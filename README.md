# news-image-20261124

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/gibalers-rgb/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/gibalers-rgb/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

Sum up 24 November's world news in one image — a make.fun bounty entry by
@gibalers-rgb.

## The image

A newspaper front page for **Tuesday 24 November 2026**, built from that
day's reported world news:

- **Jensen Huang returns as Nvidia CEO** — reinstated by the board, shares
  jump 31%.
- **Russian warship destroyed at Benghazi port** — a Russian Navy corvette
  engulfed in flames in Libya.
- **Strikes kill 12 in the Kyiv region** — Russian strikes on Ukraine.
- **Gaza: toxic contamination, Oxfam warns** — an Oxfam / CEOBS report on
  contamination across the Strip.
- Ticker: UN talks on autonomous weapons end without a deal; a Chinese
  official is sentenced to death for leaking state secrets.

The image was generated for this entry and is stored as `entry.png`
(1024×1024, under 1 MiB). It names the day it sums up, shows several of the
day's most consequential stories across regions and fields, and each story
is readable from its picture and short label alone.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` byte for byte
to `/output/entry.png`. It first checks the file starts with the PNG
signature, so a corrupted image fails loudly instead of reaching the judge.
It uses no network and writes identical bytes on every run.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Bounty

- Competition: https://make.fun/bounty/news-image-20261124
- Prize pool: $100 (1st $20, 2nd $12, 3rd $6, 4th–10th $2, 11th–50th $1.20)
- Entry fee: $0
- Deadline: 26 November 2026, 00:00 UTC (07:00 WIB)
