// news-image-20261124 — entrypoint (Node 22, standard library only).
//
// The entry is the image beside this file: a newspaper front page summing up
// Tuesday 24 November 2026 — Jensen Huang's return as Nvidia CEO, the
// Russian warship destroyed at Benghazi port, the strikes that killed 12 in
// the Kyiv region, and the Oxfam warning on toxic contamination in Gaza,
// plus a ticker with the UN autonomous-weapons talks and the Chinese official
// sentenced to death for leaking secrets.
//
// The program copies that image, byte for byte, to the grader's output
// directory as entry.png. It runs with no network and writes the same bytes
// on every run, because the file it copies is fixed in this repository.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The PNG signature every valid PNG file starts with. Checked before the
// copy so a corrupted image fails loudly instead of reaching the judge.
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const entryImage = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');
const sourceBytes = readFileSync(entryImage);
if (!sourceBytes.subarray(0, PNG_SIGNATURE.length).equals(PNG_SIGNATURE)) {
  throw new Error('entry.png is not a PNG file');
}
if (sourceBytes.length > 1048576) {
  throw new Error(`entry.png is ${sourceBytes.length} bytes, over the 1 MiB gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'entry.png');
copyFileSync(entryImage, outPath);

// Confirm the copy is byte-identical to the source: the grader runs this
// program twice and both runs must write the same bytes.
const copiedHash = createHash('sha256').update(readFileSync(outPath)).digest('hex');
const sourceHash = createHash('sha256').update(sourceBytes).digest('hex');
if (copiedHash !== sourceHash) {
  throw new Error('copied entry.png does not match the source image');
}
console.log(`wrote ${outPath} (${sourceBytes.length} bytes, sha256 ${sourceHash.slice(0, 12)}…)`);
