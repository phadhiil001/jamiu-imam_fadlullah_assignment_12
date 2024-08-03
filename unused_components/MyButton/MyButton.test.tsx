import "@testing-library/jest-dom";
import { sum } from "./MyButton";
import { getButtonStyles } from "./MyButton";

describe("getButtonStyles", () => {
  test("returns disabled styles when disabled is true", () => {
    const styles = getButtonStyles(true, "red");
    expect(styles).toEqual({
      backgroundColor: "#ccc",
      cursor: "not-allowed",
    });
  });

  test("returns default styles when disabled is false and no backgroundColor is provided", () => {
    const styles = getButtonStyles(false, undefined);
    expect(styles).toEqual({
      backgroundColor: "#007bff",
      cursor: "pointer",
    });
  });

  test("returns custom styles when disabled is false and backgroundColor is provided", () => {
    const styles = getButtonStyles(false, "red");
    expect(styles).toEqual({
      backgroundColor: "red",
      cursor: "pointer",
    });
  });
});

test("add 2 + 2 to equal 4", () => {
  expect(sum(2, 2)).toBe(4);
});
