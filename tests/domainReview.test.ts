function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 68, slack: 35, drag: 9, confidence: 88 };
equal(domainReviewScore(item), 232);
equal(domainReviewLane(item), "ship");
