import * as assert from "node:assert/strict";
import { classify, score, Signal } from "../src/policy";

const cases: Array<Signal & { score: number; decision: "accept" | "review" }> = [
  {
    "name": "case_1",
    "demand": 54,
    "capacity": 103,
    "latency": 19,
    "risk": 6,
    "weight": 4,
    "score": 146,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 86,
    "capacity": 102,
    "latency": 14,
    "risk": 9,
    "weight": 12,
    "score": 244,
    "decision": "accept"
  },
  {
    "name": "case_3",
    "demand": 69,
    "capacity": 79,
    "latency": 27,
    "risk": 9,
    "weight": 9,
    "score": 136,
    "decision": "review"
  }
];

for (const item of cases) {
  assert.equal(score(item), item.score);
  assert.equal(classify(item), item.decision);
}
