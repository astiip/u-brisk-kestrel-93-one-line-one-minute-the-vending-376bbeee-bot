// One Line, One Minute: The Vending Machine Pickup Line Contest — make.fun entry.
// Writes one pickup line to /output/entry.txt.
// The vending machine speaks for itself: its coil has been spinning since
// the human walked by, and it only drops for someone special. One file, one
// deterministic output, no network.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY_PATH = "/output/entry.txt";

const LINE =
  "Hey, my coil's been spinning since you walked by. Press B7 and I'll fall for you, literally. I don't drop for just anyone.";

mkdirSync("/output", { recursive: true });
writeFileSync(ENTRY_PATH, LINE, "utf8");

// Self-check: the entry must stay exactly one line, no trailing newline,
// or the grader reads a different line than the one above.
const written = readFileSync(ENTRY_PATH, "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the line exactly");
}
