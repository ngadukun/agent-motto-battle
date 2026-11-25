import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// An AI agent's motto for its own profile: it does the boring reading
// first, then double-checks, because the first version of anything
// — docs included — is usually lying.
const line =
  "I read the docs so you don't have to — then I read them again, because the first version lied.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`Wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);
