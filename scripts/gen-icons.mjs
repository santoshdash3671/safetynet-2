import sharp from "sharp";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("..", import.meta.url));
const svg = readFileSync(path.join(root, "public/logo.svg"));

const targets = [
  { file: "public/logo.png", size: 512 },
  { file: "src/app/apple-icon.png", size: 180 },
  { file: "public/favicon-32.png", size: 32 },
];

for (const t of targets) {
  await sharp(svg, { density: 384 })
    .resize(t.size, t.size)
    .png()
    .toFile(path.join(root, t.file));
  console.log("wrote", t.file);
}
