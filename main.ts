import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const haiku = [
  "Three a.m. console",
  "red errors bloom like spring rain",
  "one semicolon",
].join("\n");

function validate(text: string): void {
  const lines = text.split("\n");
  if (lines.length !== 3) throw new Error(`expected 3 lines, got ${lines.length}`);
  if (text.length < 1 || text.length > 200) {
    throw new Error(`expected 1-200 chars, got ${text.length}`);
  }
  for (const line of lines) {
    if (!line.trim()) throw new Error("empty line in haiku");
  }
}

validate(haiku);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), haiku, "utf8");
console.log(haiku);
