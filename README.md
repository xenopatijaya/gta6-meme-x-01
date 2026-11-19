# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/xenopatijaya/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/xenopatijaya/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme in the classic two-guys reaction format: the DEV announces "GTA VI IS FINALLY OUT TODAY!", and ME — deadpan, after years of waiting — answers "FINALLY... AFTER 8 YEARS OF WAITING!", with the make.fun ghost and the make.fun name in a branding strip along the bottom. The meme (`meme.png`) is posted on X from a public account with a tag of @makefunai, a link to the bounty, and the entrant's play code; `POST.json` names the post's address. An AI judge compares the posts two at a time and the top 50 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The meme

![GTA VI is finally out today! — Finally... after 8 years of waiting! (make.fun)](meme.png)

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this repository's `POST.json`.
