import { readFile } from "node:fs/promises";
import { join } from "node:path";

const distDir = new URL("../dist/", import.meta.url);

const expectedRoutes = [
  { file: "index.html", includes: ['<html lang="en"', "Lumo"] },
  { file: "privacy/index.html", includes: ['<html lang="en"', "Privacy Policy"] },
  { file: "ja/index.html", includes: ['<html lang="ja"', "Lumo"] },
  { file: "ja/privacy/index.html", includes: ['<html lang="ja"', "プライバシー"] },
  { file: "zh-Hans/index.html", includes: ['<html lang="zh-Hans"', "Lumo"] },
  { file: "zh-Hans/privacy/index.html", includes: ['<html lang="zh-Hans"', "隐私"] },
  { file: "zh-Hant/index.html", includes: ['<html lang="zh-Hant"', "Lumo"] },
  { file: "zh-Hant/privacy/index.html", includes: ['<html lang="zh-Hant"', "隱私"] },
];

let failures = 0;

for (const route of expectedRoutes) {
  const filePath = join(distDir.pathname, route.file);
  let html = "";

  try {
    html = await readFile(filePath, "utf8");
  } catch {
    failures += 1;
    console.error(`Missing route output: ${route.file}`);
    continue;
  }

  for (const fragment of route.includes) {
    if (!html.includes(fragment)) {
      failures += 1;
      console.error(`Missing fragment in ${route.file}: ${fragment}`);
    }
  }
}

if (failures > 0) {
  process.exitCode = 1;
} else {
  console.log(`Verified ${expectedRoutes.length} route outputs.`);
}
