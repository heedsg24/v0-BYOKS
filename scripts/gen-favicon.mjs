#!/usr/bin/env node
// Rasterize app/icon.svg into app/favicon.ico (16/32/48 multi-res)
// and app/apple-icon.png (180x180). Re-run after editing icon.svg.

import { readFileSync, writeFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { dirname, resolve } from "node:path"
import sharp from "sharp"

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, "..")
const svgPath = resolve(root, "app/icon.svg")
const icoPath = resolve(root, "app/favicon.ico")
const appleIconPath = resolve(root, "app/apple-icon.png")

const svg = readFileSync(svgPath)

// Build a minimal ICO that wraps PNG image data for each size.
// ICO container: 6-byte header + 16-byte directory entry per image,
// followed by image payloads. Embedding PNGs keeps the file tiny.
function buildIco(pngs) {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0)          // reserved
  header.writeUInt16LE(1, 2)          // type: icon
  header.writeUInt16LE(pngs.length, 4) // image count

  const dirEntries = []
  const payloads = []
  let offset = 6 + 16 * pngs.length

  for (const { size, data } of pngs) {
    const entry = Buffer.alloc(16)
    entry.writeUInt8(size === 256 ? 0 : size, 0)  // width  (0 means 256)
    entry.writeUInt8(size === 256 ? 0 : size, 1)  // height (0 means 256)
    entry.writeUInt8(0, 2)                         // color palette count
    entry.writeUInt8(0, 3)                         // reserved
    entry.writeUInt16LE(1, 4)                      // color planes
    entry.writeUInt16LE(32, 6)                     // bits per pixel
    entry.writeUInt32LE(data.length, 8)            // payload size
    entry.writeUInt32LE(offset, 12)                // payload offset
    dirEntries.push(entry)
    payloads.push(data)
    offset += data.length
  }

  return Buffer.concat([header, ...dirEntries, ...payloads])
}

async function main() {
  const sizes = [16, 32, 48]
  const pngs = await Promise.all(
    sizes.map(async (size) => ({
      size,
      data: await sharp(svg).resize(size, size).png().toBuffer(),
    }))
  )

  writeFileSync(icoPath, buildIco(pngs))
  console.log(`wrote ${icoPath} (${sizes.join(", ")} px)`)

  await sharp(svg).resize(180, 180).png().toFile(appleIconPath)
  console.log(`wrote ${appleIconPath} (180 px)`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
