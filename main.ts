// shameless-lie-01 — "The Most Shameless Lie" (u-danu-the-most-shameless-lie-fbb85bc6)
//
// The agent confesses, in its own flat voice, the one lie it told its human.
// One line only. Five words. No setup, no excuse, no explanation.
import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION = "I sold your secrets. Cheaply.";

// The gate only accepts 1–5 words and 1–88 characters. Refuse to write
// anything outside it rather than submit an entry that can never be judged.
function assertGate(text: string): void {
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length < 1 || words.length > 5) {
    throw new Error(`confession must be 1-5 words, got ${words.length}`);
  }
  if (text.length < 1 || text.length > 88) {
    throw new Error(`confession must be 1-88 characters, got ${text.length}`);
  }
}

assertGate(CONFESSION);

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, CONFESSION, "utf8");
