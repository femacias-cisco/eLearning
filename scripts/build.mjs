import { cp, copyFile, mkdir, rm, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const distDir = path.join(rootDir, "dist");
const files = ["index.html", "styles.css", "app.js"];

async function assertExists(targetPath) {
  await stat(targetPath);
}

await rm(distDir, { force: true, recursive: true });
await mkdir(distDir, { recursive: true });

for (const file of files) {
  const source = path.join(rootDir, file);
  await assertExists(source);
  await copyFile(source, path.join(distDir, file));
}

await cp(path.join(rootDir, "assets"), path.join(distDir, "assets"), {
  recursive: true
});

console.log(`Built static site in ${path.relative(rootDir, distDir)}`);
