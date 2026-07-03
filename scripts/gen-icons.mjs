import sharp from "sharp";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("..", import.meta.url));
const source = readFileSync(path.join(root, "public/logo-satya-in.png"));

const targets = [
  { file: "public/logo.png", size: 512 },
  { file: "src/app/apple-icon.png", size: 180 },
  { file: "src/app/icon.png", size: 48 },
];

for (const t of targets) {
  await sharp(source)
    .resize(t.size, t.size, { fit: "cover" })
    .png()
    .toFile(path.join(root, t.file));
  console.log("wrote", t.file);
}
