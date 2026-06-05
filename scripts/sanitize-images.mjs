// scripts/sanitize-images.mjs
//
// Re-encode salvaged images from the compromised server into CLEAN files.
// We decode only the raster pixels via sharp and write fresh output, discarding
// EXIF/metadata, color profiles, appended bytes, and any hidden (polyglot) payload.
// Nothing from the source is trusted, opened in a browser, or executed.
//
// Usage:
//   npm install
//   node scripts/sanitize-images.mjs ./assets/media ./public/media
//
import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SRC = path.resolve(process.argv[2] ?? "./assets/media");
const OUT = path.resolve(process.argv[3] ?? "./public/media");

// Raster types only. SVG is intentionally excluded — it can carry script.
const ALLOWED = new Set([".jpg", ".jpeg", ".png", ".gif", ".webp", ".ico"]);

let ok = 0;
let skipped = 0;
let failed = 0;
const failures = [];

async function* walk(dir) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(full);
    else yield full;
  }
}

async function sanitize(file) {
  const ext = path.extname(file).toLowerCase();
  const rel = path.relative(SRC, file);
  const destDir = path.join(OUT, path.dirname(rel));
  const base = path.basename(file, ext);
  const input = await fs.readFile(file);
  await fs.mkdir(destDir, { recursive: true });

  const animated = ext === ".gif";
  let img = sharp(input, { failOn: "error", animated });
  // Bake in EXIF orientation for still images, then drop all metadata on write.
  if (!animated) img = img.rotate();

  switch (ext) {
    case ".png":
      return img.png({ compressionLevel: 9 }).toFile(path.join(destDir, base + ".png"));
    case ".webp":
      return img.webp({ quality: 82 }).toFile(path.join(destDir, base + ".webp"));
    case ".gif":
      return img.gif().toFile(path.join(destDir, base + ".gif"));
    case ".ico":
      // No native .ico encoder; emit a clean PNG instead.
      return img.png().toFile(path.join(destDir, base + ".png"));
    default:
      return img.jpeg({ quality: 85, mozjpeg: true }).toFile(path.join(destDir, base + ".jpg"));
  }
}

const t0 = Date.now();
await fs.mkdir(OUT, { recursive: true });
for await (const file of walk(SRC)) {
  if (!ALLOWED.has(path.extname(file).toLowerCase())) {
    skipped++;
    continue;
  }
  try {
    await sanitize(file);
    ok++;
  } catch (err) {
    failed++;
    failures.push(`${path.relative(SRC, file)}  ->  ${err.message}`);
  }
}

console.log(
  `\nsanitized: ${ok}   skipped(non-raster): ${skipped}   failed: ${failed}   (${((Date.now() - t0) / 1000).toFixed(1)}s)`,
);
if (failures.length) {
  console.log("\nfailed files (left out — inspect, do not publish):");
  for (const f of failures) console.log("  " + f);
}
console.log(`\nclean images -> ${OUT}`);
