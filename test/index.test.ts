import { abbreviateNumber } from "../index";

test("-25 should be --> -25", () => {
  expect(abbreviateNumber(-25, 0)).toBe("-25");
});

test("-999 should be --> -999", () => {
  expect(abbreviateNumber(-999, 2)).toBe("-999");
});

test("1000 should be --> 1k", () => {
  expect(abbreviateNumber(1000, 0)).toBe("1k");
});

test("1000 should be --> 1.0k", () => {
  expect(abbreviateNumber(1000, 1)).toBe("1.0k");
});

test("1000 should be --> 1.00k", () => {
  expect(abbreviateNumber(1000, 2)).toBe("1.00k");
});

test("1000 should be --> 1k without padding", () => {
  expect(abbreviateNumber(1000, 2, {padding: false})).toBe("1k");
});

test("12345 should be --> 12k", () => {
  expect(abbreviateNumber(12345, 0)).toBe("12k");
});

test("12345 should be --> 12.3k", () => {
  expect(abbreviateNumber(12345, 1)).toBe("12.3k");
});

test("12344 should be --> 12.34k", () => {
  expect(abbreviateNumber(12344, 2)).toBe("12.34k");
});

test("123456789112345678923456789 should be --> RangeError!", () => {
  expect( () => abbreviateNumber(123456789112345678923456789, 0)).toThrow(RangeError);
});

test("0 should be --> 0", () => {
  expect(abbreviateNumber(0, 2)).toBe("0");
});

test("12 should be --> 12", () => {
  expect(abbreviateNumber(12, 2)).toBe("12");
});

test("-1234 should be --> -1.2k", () => {
  expect(abbreviateNumber(-1234, 1)).toBe("-1.2k");
});

test("47475782130 should be --> 47.48G", () => {
  expect(abbreviateNumber(47475782130, 2)).toBe("47.48G");
});

test("47475782130 should be --> 47.48T", () => {
  expect(abbreviateNumber(47475782130000, 2)).toBe("47.48T");
});

test("-1234 should be --> -1.2Kilo", () => {
  expect(abbreviateNumber(-1234, 1, ["", "Kilo"])).toBe("-1.2Kilo");
});

test("-1234 should be --> -1.2Kilo with object", () => {
  expect(abbreviateNumber(-1234, 1, {symbols: ["", "Kilo"]})).toBe("-1.2Kilo");
});

test("-1200 should be --> -1.2Kilo without padding", () => {
  expect(abbreviateNumber(-1200, 4, {symbols: ["", "Kilo"], padding: false})).toBe("-1.2Kilo");
});

test("-1234567 should be --> -1234.5Kilo", () => {
  expect(abbreviateNumber(-1234, 1, {symbols: ["", "Kilo"]})).toBe("-1.2Kilo");
});

test("12.34 should be --> 12.34", () => {
  expect(abbreviateNumber(12.34, 2)).toBe("12.34");
});

test("1234.56 should be --> 1.2k", () => {
  expect(abbreviateNumber(1234.56, 1)).toBe("1.2k");
});
