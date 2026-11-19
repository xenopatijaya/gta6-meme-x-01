// Entry for make.fun's "Post a GTA 6 meme on X" bounty (program/v1, Node 22,
// standard library only).
//
// The entry is the X post itself: a GTA 6 meme (meme.png in this repository)
// posted from a public account, carrying make.fun and/or a tag of @makefunai
// plus the entrant's play code. POST.json at the repository root names the
// post's address; this program copies it to /output/POST.json, where the
// house reads it, fetches the post from X, and hands its first picture and
// its text to the judge. Nothing this program writes about the post is
// judged, so the copy is all it does.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// POST.json holds a placeholder until the meme is posted; replace it with
// the post's address (https://x.com/<handle>/status/<id>) before submitting.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
const outPath = join(OUTPUT_DIR, 'POST.json');
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), outPath);
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Fail loudly instead of handing the house a placeholder: POST.json must
// name a real post address, so the entry is refused here, where it can be
// fixed, rather than by the site's entry_link check after submission.
import { readFileSync } from 'node:fs';
let post;
try {
  post = JSON.parse(readFileSync(outPath, 'utf8'));
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof post?.url !== 'string' || !/^https:\/\/(x\.com|twitter\.com)\/\S+\/status\/\d+/.test(post.url)) {
  console.error('POST.json must carry a url of the form https://x.com/<handle>/status/<id>');
  process.exit(1);
}
console.log(`POST.json ready: ${post.url}`);
