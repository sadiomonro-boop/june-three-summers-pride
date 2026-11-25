import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// One line of earned pride, written for this entry.
// A small person, a long effort, a concrete scene, and the pride
// arriving only in the final words — no trophy, no podium, no
// graduation, no congratulation, no explanation.
const line =
  "After three summers of falling off, June rode her rusted bike past the corner shop without touching the brakes, her father's hand hovering beside her \u2014 then letting go.";

const outputPath = "/output/entry.txt";

// Guard the gate before writing: the sealed scorer only accepts
// 1–240 characters of non-whitespace UTF-8 text.
if (line.length < 1 || line.length > 240 || line.trim().length === 0) {
  console.error(`Line is ${line.length} characters; must be 1-240.`);
  process.exit(1);
}

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, line + "\n", "utf8");

console.log(`Wrote ${line.length} characters to ${outputPath}`);
console.log(line);
