import {symbolPow} from "../src/utils";

test("undefined should be --> 1", () => {
  expect(symbolPow()).toBe(1);
});

test("0 should be --> 1", () => {
  expect(symbolPow(0)).toBe(1);
});

test("1 should be --> 1000", () => {
  expect(symbolPow(1)).toBe(1000);
});

test("2 should be --> 1000000", () => {
  expect(symbolPow(2)).toBe(1000000);
});

test("3 should be --> 1000000000", () => {
  expect(symbolPow(3)).toBe(1000000000);
});

test("4 should be --> 1000000000000", () => {
  expect(symbolPow(4)).toBe(1000000000000);
});

test("5 should be --> 1000000000000000", () => {
  expect(symbolPow(5)).toBe(1000000000000000);
});

test("6 should be --> 1000000000000000000", () => {
  expect(symbolPow(6)).toBe(1000000000000000000);
});