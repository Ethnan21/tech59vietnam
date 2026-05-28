Replace the two existing Google Maps coordinate URLs with the Sentry Q place URL.

Files & replacements (same URL in both):

- `src/components/tech59/Hero.tsx` — anchor at line ~52 (the "16–17 July 2026 / The Sentry Q…" venue link)
- `src/components/tech59/Venue.tsx` — anchor at line ~22 (the venue image card link)

Old URL (both files):
`https://www.google.com/maps/search/?api=1&query=10.8541178%2C106.62671689999999&query_place_id=ChIJj0zszP4rdTERozRxepzAFn`

New URL:
`https://www.google.com/maps/place/The+Sentry+Q/@10.8541176,106.6266831,19z/data=!4m6!3m5!1s0x31752bfeccec4c8f:0x7016c09c7a7134a3!8m2!3d10.8541178!4d106.6267169!16s%2Fg%2F11xmnv6w1b?entry=ttu&g_ep=EgoyMDI2MDUyNS4wIKXMDSoASAFQAw%3D%3D`

No other changes (text, target="_blank", rel attributes preserved).