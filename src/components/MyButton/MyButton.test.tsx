import "@testing-library/jest-dom";
// import { expect, test } from "@jest/globals";
import { sum } from "./MyButton";

test("add 2 + 2 to equal 4", () => {
  expect(sum(2, 2)).toBe(4);
});
