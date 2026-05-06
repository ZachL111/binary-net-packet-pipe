# Review Journal

I treated `binary-net-packet-pipe` as a project where the smallest useful behavior should still be inspectable.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its networking focus without claiming live deployment or external usage.

## Cases

- `baseline`: `packet span`, score 232, lane `ship`
- `stress`: `retry pressure`, score 161, lane `ship`
- `edge`: `route drift`, score 192, lane `ship`
- `recovery`: `socket risk`, score 235, lane `ship`
- `stale`: `packet span`, score 104, lane `hold`

## Note

A future change should add new cases before it changes the scoring rule.
