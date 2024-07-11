import { isValidUrl } from "./HeroImage";

describe("isValidUrl", () => {
  test("returns true for valid URLs", () => {
    expect(
      isValidUrl("https://via.placeholder.com/1200x600.png?text=Hero+Image")
    ).toBe(true);
    expect(isValidUrl("http://example.com")).toBe(true);
  });

  test("returns false for invalid URLs", () => {
    expect(isValidUrl("invalid-url")).toBe(false);
    expect(isValidUrl("")).toBe(false);
  });
});
