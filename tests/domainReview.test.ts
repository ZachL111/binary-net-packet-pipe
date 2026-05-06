import * as assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 68, slack: 35, drag: 9, confidence: 88 };
assert.equal(domainReviewScore(item), 232);
assert.equal(domainReviewLane(item), "ship");
