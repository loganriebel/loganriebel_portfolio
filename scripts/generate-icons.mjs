import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const root = process.cwd();
const source = path.join(root, "public", "icons", "favicon.svg");
const iconsDir = path.join(root, "public", "icons");
const appDir = path.join(root, "src", "app");

const sizes = [
  { name: "icon-48.png", size: 48 },
  { name: "icon-96.png", size: 96 },
  { name: "icon-192.png", size: 192 },
  { name: "apple-icon-180.png", size: 180 }
];

const svg = await readFile(source);
await mkdir(iconsDir, { recursive: true });

for (const { name, size } of sizes) {
  const output = path.join(iconsDir, name);
  await sharp(svg).resize(size, size).png().toFile(output);
  console.log(`Wrote ${name}`);
}

const icon48 = path.join(iconsDir, "icon-48.png");
const faviconPath = path.join(root, "public", "favicon.ico");
const faviconBuffer = await pngToIco([icon48]);
await writeFile(faviconPath, faviconBuffer);
console.log("Wrote favicon.ico");

await sharp(svg).resize(32, 32).png().toFile(path.join(appDir, "icon.png"));
await sharp(svg).resize(180, 180).png().toFile(path.join(appDir, "apple-icon.png"));
console.log("Wrote src/app/icon.png and apple-icon.png");
