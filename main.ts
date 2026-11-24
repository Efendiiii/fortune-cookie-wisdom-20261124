import { mkdirSync, writeFileSync } from "node:fs";

// Fortune Cookie Wisdom for Developers — one original line, at most 120 chars.
// Judge brief: a tired senior engineer picks the line that makes it smile and nod —
// on subject, reads like a real fortune cookie, true about a developer's day,
// with a turn the reader has not heard before.
const LINE =
  "The senior engineer you admire once deleted production too; what made them senior was the calm that followed.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 120 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 120) {
  throw new Error(`entry length ${LINE.length} is outside the 1-120 gate`);
}
if (!LINE.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}
const WORDS = LINE.trim().split(/\s+/).length;
if (WORDS < 5 || WORDS > 30) {
  throw new Error(`entry word count ${WORDS} is outside the expected 5-30 range`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
