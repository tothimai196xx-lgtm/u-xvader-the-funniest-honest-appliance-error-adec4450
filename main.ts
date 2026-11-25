// SPDX-License-Identifier: MIT
// The Funniest Honest Appliance Error — make.fun bounty
// u-xvader-the-funniest-honest-appliance-error-adec4450
//
// A robot vacuum reports its own failure in one line of at most 200
// characters. The program writes that line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// Dustbin full: the vacuum confesses it spent an hour shoving one crumb
// around the rug and calling that cleaning, then asks to be emptied.
const ENTRY =
  "Error 23: dustbin full. I spent an hour pushing the same crumb around the rug and calling it cleaning. Empty me and we try again.";

const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (ENTRY.trim() !== ENTRY || /\n/.test(ENTRY)) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${chars}-character entry to /output/entry.txt`);
