import { reverse, isPalindrome } from "./isPalindrome";

describe("reverse", () => {
  it("should return the reversed word", () => {
    expect(reverse("myWord")).toBe("droWym");
  });

  it("should throw an error when an invalid parameter is passd in", () => {
    expect(() => reverse()).toThrow();
  });
});

describe("isPalindrome", () => {
  it("should return true if a palindrome is passed in", () => {
    expect(isPalindrome("poop")).toBe(true);
    expect(isPalindrome("lepel")).toBe(true);
    expect(isPalindrome("radar")).toBe(true);
    expect(isPalindrome("rotator")).toBe(true);
    expect(() => isPalindrome("")).not.toThrow();
  });

  it("should return false if a non-palindrome is passed in", () => {
    expect(isPalindrome("poo")).toBe(false);
    expect(isPalindrome("spoon")).toBe(false);
    expect(isPalindrome("x-ray")).toBe(false);
    expect(isPalindrome("rotate")).toBe(false);
    expect(() => isPalindrome()).toThrow();
  });

  it("should be case-insensitive", () => {
    expect(isPalindrome("PoOp")).toBe(true);
    expect(isPalindrome("LePeL")).toBe(true);
    expect(isPalindrome("RADar")).toBe(true);

    expect(isPalindrome("poO")).toBe(false);
    expect(isPalindrome("spOon")).toBe(false);
    expect(isPalindrome("x-rAy")).toBe(false);
    expect(isPalindrome("rOtAte")).toBe(false);
  });
});
