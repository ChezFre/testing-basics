import { sum } from "./sum.mjs";

describe("sum", () => {
  it("returns the sum of the passed in numbers", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(5, 9)).toBe(14);
  });

  it("throws an error when something else than a number is passd in for parameter a or b", () => {
    expect(() => sum()).toThrow();
    expect(() => sum(0, 0)).not.toThrow();
    expect(() => sum(1)).toThrow();
    expect(() => sum(null, 2)).toThrow();
    expect(() => sum(undefined, 2)).toThrow();
    expect(() => sum("b", 2)).toThrow();
  });
});
