import sum from "./sum";

import { describe, expect, it } from "vitest";

describe('#sum', () => {
  it('return 0 with no args', () => {
    expect(sum()).toBe(0)
  })
})