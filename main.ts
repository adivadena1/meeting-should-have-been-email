// make.fun entry: The Meeting That Should Have Been an Email
// Writes one joke, one line, to /output/entry.txt. Deterministic, no network.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "The meeting's only decision was that the email should have been a meeting.";

// Sealed gate: UTF-8 text, 1-200 characters, single line, not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
