import { unabbreviateNumber } from "../src/unabbreviateNumber";

test("0 should be 0", () => {
  expect(unabbreviateNumber("0")).toBe(0);
});

test("0000 should be 0", () => {
  expect(unabbreviateNumber("0000")).toBe(0);
});

test("25 should be 25", () => {
  expect(unabbreviateNumber("25")).toBe(25);
});

test("666 should be 666", () => {
  expect(unabbreviateNumber("666")).toBe(666);
});

test("-25 should be -25", () => {
  expect(unabbreviateNumber("-25")).toBe(-25);
});

test("-4800 should be -4800", () => {
  expect(unabbreviateNumber("-4800")).toBe(-4800);
});

test("-0820 should be -820", () => {
  expect(unabbreviateNumber("-820")).toBe(-820);
});

test("09950 should be 9950", () => {
  expect(unabbreviateNumber("9950")).toBe(9950);
});

test("25k should be 25000", () => {
  expect(unabbreviateNumber("25k")).toBe(25000);
});

test("-25k should be -25000", () => {
  expect(unabbreviateNumber("-25k")).toBe(-25000);
});

test("1.3k should be 1300", () => {
  expect(unabbreviateNumber("1.3k")).toBe(1300);
});

test("-1.3k should be -1300", () => {
  expect(unabbreviateNumber("-1.3k")).toBe(-1300);
});

test("1.123456k should be 1123.456", () => {
  expect(unabbreviateNumber("1.123456k")).toBe(1123.456);
});

test("-1.123456k should be -1123.456", () => {
  expect(unabbreviateNumber("-1.123456k")).toBe(-1123.456);
});

test("zZz should be Error", () => {
  expect(() => unabbreviateNumber("zZz")).toThrow(
    new Error("This is not a valid input"),
  );
});

test("abc should be Error", () => {
  expect(() => unabbreviateNumber("abc")).toThrow(
    new Error("This is not a valid input"),
  );
});

test("abck should be Error", () => {
  expect(() => unabbreviateNumber("abck")).toThrow(
    new Error("This is not a valid input"),
  );
});

test("zZzT should be Error", () => {
  expect(() => unabbreviateNumber("abcT")).toThrow(
    new Error("This is not a valid input"),
  );
});

test("kzZz should be Error", () => {
  expect(() => unabbreviateNumber("kzZz")).toThrow(
    new Error("This is not a valid input"),
  );
});

test("abkc should be Error", () => {
  expect(() => unabbreviateNumber("abkc")).toThrow(
    new Error("This is not a valid input"),
  );
});

test("237M should be 237000000", () => {
  expect(unabbreviateNumber("237M")).toBe(237000000);
});

test("00237k should be 237000", () => {
  expect(unabbreviateNumber("00237k")).toBe(237000);
});

test("-00237k should be -237000", () => {
  expect(unabbreviateNumber("-237k")).toBe(-237000);
});

test("237zZz should be Error", () => {
  expect(() => unabbreviateNumber("237zZz")).toThrow(
    new Error("This is not a valid input"),
  );
});

test("zZz237 should be Error", () => {
  expect(() => unabbreviateNumber("zZz237")).toThrow(
    new Error("This is not a valid input"),
  );
});

test("237zk should be Error", () => {
  expect(() => unabbreviateNumber("237zk")).toThrow(
    new Error("This is not a valid input"),
  );
});

test("2z37k should be Error", () => {
  expect(() => unabbreviateNumber("2z37k")).toThrow(
    new Error("This is not a valid input"),
  );
});

test("z237k should be Error", () => {
  expect(() => unabbreviateNumber("z237k")).toThrow(
    new Error("This is not a valid input"),
  );
});

test("237kz should be Error", () => {
  expect(() => unabbreviateNumber("237kz")).toThrow(
    new Error("This is not a valid input"),
  );
});

test("237k666 should be Error", () => {
  expect(() => unabbreviateNumber("237k666")).toThrow(
    new Error("This is not a valid input"),
  );
});

test("237kkk should be Error", () => {
  expect(() => unabbreviateNumber("237kkk")).toThrow(
    new Error("This is not a valid input"),
  );
});

test("237k k should be Error", () => {
  expect(() => unabbreviateNumber("237k k")).toThrow(
    new Error("This is not a valid input"),
  );
});

test("666 with [ , kilo, Mega, Giga, Tera, Peta, Exa] should be 666", () => {
  expect(
    unabbreviateNumber("666", [
      "",
      "kilo",
      "Mega",
      "Giga",
      "Tera",
      "peta",
      "Exa",
    ]),
  ).toBe(666);
});

test("666k with [ , kilo, Mega, Giga, Tera, Peta, Exa] should be Error", () => {
  expect(() =>
    unabbreviateNumber("666k", [
      "",
      "kilo",
      "Mega",
      "Giga",
      "Tera",
      "peta",
      "Exa",
    ]),
  ).toThrow(new Error("This is not a valid input"));
});

test("666kilo with [ , kilo, Mega, Giga, Tera, Peta, Exa] should be 666000", () => {
  expect(
    unabbreviateNumber("666kilo", [
      "",
      "kilo",
      "Mega",
      "Giga",
      "Tera",
      "peta",
      "Exa",
    ]),
  ).toBe(666000);
});

test("666 kilo with [ , kilo, Mega, Giga, Tera, Peta, Exa] should be Error", () => {
  expect(() =>
    unabbreviateNumber("666 kilo", [
      "",
      "kilo",
      "Mega",
      "Giga",
      "Tera",
      "peta",
      "Exa",
    ]),
  ).toThrow(new Error("This is not a valid input"));
});

test("666Exa with [ , kilo, Mega, Giga, Tera, Peta, Exa] should be 666000000000000000000", () => {
  expect(
    unabbreviateNumber("666Exa", [
      "",
      "kilo",
      "Mega",
      "Giga",
      "Tera",
      "peta",
      "Exa",
    ]),
  ).toBe(666000000000000000000);
});

test("666kilo with [ , kilo, Mega] should be 666000", () => {
  expect(unabbreviateNumber("666kilo", ["", "kilo", "Mega"])).toBe(666000);
});

test("666Giga with [ , kilo, Mega] should be Error", () => {
  expect(() => unabbreviateNumber("666Giga", ["", "kilo", "Mega"])).toThrow(
    new Error("This is not a valid input"),
  );
});

test("666T with [ , kilo, Mega] should be Error", () => {
  expect(() => unabbreviateNumber("666T", ["", "kilo", "Mega"])).toThrow(
    new Error("This is not a valid input"),
  );
});

test("666Zetta with [ , kilo, Mega, Giga, Tera, peta, Exa, Zetta] should be 666000000000000000000000", () => {
  expect(
    unabbreviateNumber("666Zetta", [
      "",
      "kilo",
      "Mega",
      "Giga",
      "Tera",
      "peta",
      "Exa",
      "Zetta",
    ]),
  ).toBe(666000000000000000000000);
});
