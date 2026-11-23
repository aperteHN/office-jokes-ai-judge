// Office Jokes entry program (Node 22, standard library only).
//
// The entry is one joke about office life, a single line of under 200
// characters. This program writes that line to the output directory
// as entry.txt, byte for byte the same on every run. Outside the
// grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE =
  'I blocked two hours for deep work, and my manager booked over it for a meeting titled "Why does nothing ever get finished?"';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), JOKE, 'utf8');
console.log(`wrote entry.txt (${JOKE.length} chars): ${JOKE}`);
