// Texts From Your Future Self — one text message from your future self,
// sent back to the present. Written fresh for make.fun.
// The line is a single message: a warning from 2036 about the present-day
// habit of saying "I'll start Monday", with a second punch about the plant.
// Why it lands: the joke turns procrastination into a legal dispute —
// Monday itself files for protection — then undercuts the drama with the
// smallest possible loss, a dead houseplant. Two punches, 131 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE: string =
  "hey, it's you from 2036. stop saying 'i'll start monday' — monday just filed a restraining order. also, your plant died. let it go.";

// Gate-check the line the same way the sealed scorer will:
// single line, valid UTF-8, 1–200 characters, not whitespace-only.
// These checks run before any output is written, so a bad line fails
// fast instead of producing an entry.txt the grader would reject.
const chars: string[] = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`line must be 1-200 characters, got ${chars.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be whitespace-only");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
// Exactly the line, no trailing newline.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
