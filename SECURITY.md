# Security notes — recovering from a compromised host

The source for this rebuild was a **compromised WordPress server**. Every file
pulled from it is treated as untrusted. This document records how that material is
handled so the rebuilt site never inherits the infection.

## Hard rules

- **Never execute** anything from the old box — no PHP, no WordPress code, no
  pulled file opened in a browser.
- Raw downloads stay in an **out-of-repo quarantine** and are also blocked by
  `.gitignore` (`*.sql`, `*.zip`, `_forensics/`, `/assets/`). The compromised
  database dump and the raw media archive must **never** be committed.
- Only two kinds of artifact cross into the repo: **re-encoded images** (pixels
  only) and **sanitized text** (scripts/spam stripped).

## What crossed over, and what didn't

From the recovered media archive, an **image-only** extraction was performed:

- Extracted: raster images (`jpg/jpeg/png/gif/webp/ico`).
- **Excluded and left in quarantine:** all executable/script-capable files —
  including PHP (`.php/.phtml/.phar/...`, caught even as double extensions like
  `evil.php.jpg`), and other non-images (`.html/.js/...`).
- **SVG excluded:** SVG can embed `<script>`, so it is held for manual review
  rather than published.
- Path-traversal entries (zip-slip) are rejected.

> Note: `.php` files found inside `/uploads/` are a classic web-shell signature.
> Legitimate WordPress does not place executable PHP there. Any such files remain
> quarantined and are never extracted or served.

## Residual risk and mitigation

| Risk | Mitigation |
| --- | --- |
| Polyglot image (valid image that also hides code) | Served as a static image only — no interpreter runs it. **Re-encoding removes the payload entirely.** |
| Malicious image targeting a decoder bug | `scripts/sanitize-images.mjs` re-decodes pixels and writes a fresh file, discarding metadata/appended bytes. Use up-to-date `sharp`/libvips. |
| Injected `<script>`/iframe/spam in recovered post content | Content is extracted as text and sanitized before use; raw post HTML is never imported. |
| Stale/buggy legacy code | None carried over — clean Next.js rebuild. |

## Operational follow-ups

- **Rotate credentials** for the hosting account (cPanel/FTP) and the registrar
  account, and enable 2FA — assume anything that touched the old server is exposed.
- Run a local AV scan over the quarantine + working folder as a signature backstop.
