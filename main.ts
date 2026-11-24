import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The vending machine is in love: its coil has been spinning since you
// walked by, press B7 and it will fall for you — literally — but it
// doesn't drop for just anyone.
const line =
  "Hey, my coil's been spinning since you walked by. Press B7 and I'll fall for you, literally. I don't drop for just anyone.";

// Small sanity checks: one line, plain ASCII, within the 1-200 char limit.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}
if (!/^[\x20-\x7E]+$/.test(line)) {
  throw new Error("entry must be ASCII only");
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

// Read-back verification: the file must contain exactly the line above,
// 1-200 chars, with no newline sneaking in.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== line) {
  throw new Error("read-back mismatch: /output/entry.txt differs from entry line");
}
if (written.length < 1 || written.length > 200) {
  throw new Error(`read-back length out of range: ${written.length}`);
}
if (written.includes("\n") || written.includes("\r")) {
  throw new Error("read-back contains a newline");
}
