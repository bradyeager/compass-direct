// scripts/extract-content.mjs
//
// Safely extract PUBLISHED pages/posts (TEXT ONLY) from a WordPress mysqldump.
//
// - Reads ONLY the wp_posts table. Never reads wp_users, wp_options, comments, or any PII.
// - Keeps only post_type page|post AND post_status publish (content that was public).
// - Strips injected <script>/<iframe>/<style>/<object>/<embed>/<form>, inline on* handlers,
//   and javascript: URIs — the usual injection vectors in a hacked WordPress database.
// - Writes clean JSON to <outDir>/posts.json and prints a summary you can eyeball.
//   The raw dump is read in place and is NEVER copied into the repo.
//
// Usage (from the repo root):
//   node scripts/extract-content.mjs "C:\\path\\to\\APP-DATA-2019.sql" ./content
//
import { promises as fs } from "node:fs";
import path from "node:path";

const DUMP = process.argv[2];
const OUT = path.resolve(process.argv[3] ?? "./content");
if (!DUMP) {
  console.error('usage: node scripts/extract-content.mjs "<path-to-dump.sql>" <outDir>');
  process.exit(1);
}

// Standard wp_posts column order — fallback if the CREATE TABLE block isn't found.
const STD_COLS = [
  "ID", "post_author", "post_date", "post_date_gmt", "post_content", "post_title",
  "post_excerpt", "post_status", "comment_status", "ping_status", "post_password",
  "post_name", "to_ping", "pinged", "post_modified", "post_modified_gmt",
  "post_content_filtered", "post_parent", "guid", "menu_order", "post_type",
  "post_mime_type", "comment_count",
];

const sql = await fs.readFile(DUMP, "utf8");

// Column order from CREATE TABLE `wp_posts` ( ... )
function columnsFromCreate(table) {
  const m = sql.match(new RegExp("CREATE TABLE `" + table + "` \\(([\\s\\S]*?)\\n\\)", "i"));
  if (!m) return null;
  const cols = [];
  for (const line of m[1].split("\n")) {
    const cm = line.match(/^\s*`([^`]+)`\s/);
    if (cm) cols.push(cm[1]);
  }
  return cols.length ? cols : null;
}

// Split the dump into statements, respecting MySQL string literals + escapes.
function* statements(text) {
  let start = 0, inStr = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inStr) {
      if (c === "\\") i++;
      else if (c === "'") inStr = false;
    } else if (c === "'") inStr = true;
    else if (c === ";") { yield text.slice(start, i); start = i + 1; }
  }
}

const unesc = (c) => (c === "n" ? "\n" : c === "r" ? "\r" : c === "t" ? "\t" : c === "0" ? "\0" : c ?? "");

// Parse a "(...),(...)" VALUES body into arrays of column values.
function parseRows(text) {
  const rows = [];
  let i = 0;
  const n = text.length;
  while (i < n) {
    while (i < n && text[i] !== "(") i++;
    if (i >= n) break;
    i++;
    const row = [];
    let val = "", inStr = false, quoted = false;
    while (i < n) {
      const c = text[i];
      if (inStr) {
        if (c === "\\") { val += unesc(text[i + 1]); i += 2; continue; }
        if (c === "'") { inStr = false; i++; continue; }
        val += c; i++;
      } else if (c === "'") { inStr = true; quoted = true; i++; }
      else if (c === ",") { row.push(quoted ? val : (val.trim() === "NULL" ? null : val.trim())); val = ""; quoted = false; i++; }
      else if (c === ")") { row.push(quoted ? val : (val.trim() === "NULL" ? null : val.trim())); i++; break; }
      else { val += c; i++; }
    }
    rows.push(row);
  }
  return rows;
}

function sanitize(html) {
  if (!html) return "";
  return html
    .replace(/<script[\s\S]*?<\/script\s*>/gi, "")
    .replace(/<style[\s\S]*?<\/style\s*>/gi, "")
    .replace(/<(iframe|object|embed|form|noscript)[\s\S]*?<\/\1\s*>/gi, "")
    .replace(/<\/?(iframe|object|embed|form|noscript|script)\b[^>]*>/gi, "")
    .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/javascript:/gi, "")
    .trim();
}

const fallbackCols = columnsFromCreate("wp_posts") ?? STD_COLS;

let scanned = 0, kept = 0, injected = 0;
const posts = [];
for (const stmt of statements(sql)) {
  if (!/^\s*INSERT INTO `wp_posts`/i.test(stmt)) continue;
  // Optional explicit column list: INSERT INTO `wp_posts` (`a`,`b`,...) VALUES ...
  const cl = stmt.match(/INSERT INTO `wp_posts`\s*\(([^)]*)\)\s*VALUES/i);
  const rowCols = cl ? cl[1].split(",").map((s) => s.replace(/[`\s]/g, "")) : fallbackCols;
  const at = {};
  rowCols.forEach((c, idx) => { at[c] = idx; });
  const vm = stmt.match(/\bVALUES\b/i);
  if (!vm) continue;
  for (const row of parseRows(stmt.slice(vm.index + vm[0].length))) {
    scanned++;
    if (row[at.post_type] !== "page" && row[at.post_type] !== "post") continue;
    if (row[at.post_status] !== "publish") continue;
    const raw = row[at.post_content] ?? "";
    if (/<script|<iframe|\son\w+\s*=|javascript:/i.test(raw)) injected++;
    posts.push({
      type: row[at.post_type],
      title: (row[at.post_title] ?? "").trim(),
      slug: row[at.post_name] ?? "",
      date: row[at.post_date] ?? "",
      excerpt: sanitize(row[at.post_excerpt] ?? ""),
      content: sanitize(raw),
    });
    kept++;
  }
}

posts.sort((a, b) => (a.date < b.date ? 1 : -1));
await fs.mkdir(OUT, { recursive: true });
await fs.writeFile(path.join(OUT, "posts.json"), JSON.stringify(posts, null, 2));

const byType = posts.reduce((a, p) => ((a[p.type] = (a[p.type] || 0) + 1), a), {});
console.log(`\nwp_posts rows scanned: ${scanned}`);
console.log(`published pages/posts kept: ${kept}`, byType);
console.log(`items that had injected markup stripped: ${injected}`);
console.log(`\nTitles (newest first):`);
for (const p of posts.slice(0, 80)) console.log(`  [${p.type}] ${p.title || "(untitled)"}  ->  /${p.slug}`);
if (posts.length > 80) console.log(`  ... and ${posts.length - 80} more`);
console.log(`\nwritten -> ${path.join(OUT, "posts.json")}   (text only — no users, credentials, or PII)`);
