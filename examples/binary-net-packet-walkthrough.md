# Binary Net Packet Pipe Walkthrough

This note is the quickest way to read the extra review model in `binary-net-packet-pipe`.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | packet span | 232 | ship |
| stress | retry pressure | 161 | ship |
| edge | route drift | 192 | ship |
| recovery | socket risk | 235 | ship |
| stale | packet span | 104 | hold |

Start with `recovery` and `stale`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

The next useful expansion would be a malformed fixture around retry pressure and socket risk.
