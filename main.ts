import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// One line of earned pride, written for this entry.
// A small person, a long effort, a concrete scene, and the pride
// arriving only in the final words — no trophy, no podium, no
// graduation, no congratulation, no explanation.
// Critic round 1 replaced the stock bike image with a pottery wheel:
// the difficulty is felt in-scene (wobbling, collapsing), and the
// payoff belongs to June herself (grinning, afraid to blink).
const line =
  "June pressed her muddy hands to the spinning clay, the pot wobbling, slumping, then rising straight, and she stared at it, grinning, afraid to blink.";

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
