import { isVisible } from "./Img";

describe("isVisible", () => {
  test("returns true when visible is true", () => {
    expect(isVisible(true)).toBe(true);
  });

  test("returns false when visible is false", () => {
    expect(isVisible(false)).toBe(false);
  });
});
