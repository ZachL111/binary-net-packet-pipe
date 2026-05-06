function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { classify, score, Signal } from "../src/policy";

type FixtureCase = Signal & { name: string; score: number; decision: "accept" | "review" };

const cases: FixtureCase[] = [
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
  equal(score(item), item.score);
  equal(classify(item), item.decision);
}
