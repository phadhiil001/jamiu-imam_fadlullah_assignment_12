import "@testing-library/jest-dom";
// import { expect, test } from "@jest/globals";
import { sum } from "./MyButton";

test("add 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
