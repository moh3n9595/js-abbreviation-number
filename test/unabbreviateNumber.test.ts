import {unabbreviateNumber} from "../src/unabbreviateNumber";

test("0 should be 0", () => {
  expect(unabbreviateNumber("0")).toBe(0);
});

test("0000 should be 0", () => {
  expect(unabbreviateNumber("0000")).toBe(0);
});

test("25 should be 25", () => {
  expect(unabbreviateNumber("25")).toBe(25);
});

test("-25 should be -25", () => {
  expect(unabbreviateNumber("-25")).toBe(-25);
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

// test("666 shoud be Error", () => {
//   expect(() => unabbreviateNumber("666")).toThrow(
//     new Error("This is not a valid input"),
//   );
// });

// test("-4800 shoud be Error", () => {
//   expect(() => unabbreviateNumber("-4800")).toThrow(
//     new Error("This is not a valid input"),
//   );
// });

// test("1000000 shoud be Error", () => {
//   expect(() => unabbreviateNumber("1000000")).toThrow(
//     new Error("This is not a valid input"),
//   );
// });

// test("-0820 shoud be Error", () => {
//   expect(() => unabbreviateNumber("-0820")).toThrow(
//     new Error("This is not a valid input"),
//   );
// });

// test("09950 shoud be Error", () => {
//   expect(() => unabbreviateNumber("09950")).toThrow(
//     new Error("This is not a valid input"),
//   );
// });

// test("zZz shoud be Error", () => {
//   expect(() => unabbreviateNumber("zZz")).toThrow(
//     new Error("This is not a valid input"),
//   );
// });

// test("abc shoud be Error", () => {
//   expect(() => unabbreviateNumber("abc")).toThrow(
//     new Error("This is not a valid input"),
//   );
// });

// test("abcK shoud be Error", () => {
//   expect(() => unabbreviateNumber("abcK")).toThrow(
//     new Error("This is not a valid input"),
//   );
// });

// test("zZzT shoud be Error", () => {
//   expect(() => unabbreviateNumber("abcT")).toThrow(
//     new Error("This is not a valid input"),
//   );
// });

// test("KzZz shoud be Error", () => {
//   expect(() => unabbreviateNumber("KzZz")).toThrow(
//     new Error("This is not a valid input"),
//   );
// });

// test("abKc shoud be Error", () => {
//   expect(() => unabbreviateNumber("abKc")).toThrow(
//     new Error("This is not a valid input"),
//   );
// });

// test("237K shoud be 237000", () => {
//   expect(unabbreviateNumber("237K")).toBe(237000);
// });

// test("237M shoud be 237000000", () => {
//   expect(unabbreviateNumber("237M")).toBe(237000000);
// });

// test("00237K shoud be 237000", () => {
//   expect(unabbreviateNumber("00237K")).toBe(237000);
// });

// test("-237K shoud be -237000", () => {
//   expect(unabbreviateNumber("-237K")).toBe(-237000);
// });

// test("-00237K shoud be -237000", () => {
//   expect(unabbreviateNumber("-237K")).toBe(-237000);
// });

// test("237 K shoud be 237000", () => {
//   expect(unabbreviateNumber("237 K")).toBe(237000);
// });

// test("237zZz shoud be Error", () => {
//   expect(() => unabbreviateNumber("237zZz")).toThrow(
//     new Error("This is not a valid input"),
//   );
// });

// test("zZz237 shoud be Error", () => {
//   expect(() => unabbreviateNumber("zZz237")).toThrow(
//     new Error("This is not a valid input"),
//   );
// });

// test("237zK shoud be Error", () => {
//   expect(() => unabbreviateNumber("237zK")).toThrow(
//     new Error("This is not a valid input"),
//   );
// });

// test("2z37K shoud be Error", () => {
//   expect(() => unabbreviateNumber("2z37K")).toThrow(
//     new Error("This is not a valid input"),
//   );
// });

// test("z237K shoud be Error", () => {
//   expect(() => unabbreviateNumber("z237K")).toThrow(
//     new Error("This is not a valid input"),
//   );
// });

// test("237Kz shoud be Error", () => {
//   expect(() => unabbreviateNumber("237Kz")).toThrow(
//     new Error("This is not a valid input"),
//   );
// });

// test("237K666 shoud be Error", () => {
//   expect(() => unabbreviateNumber("237K666")).toThrow(
//     new Error("This is not a valid input"),
//   );
// });

// test("666 with [Kilo, Mega, Giga, Tera, Peta, Exa] shoud be Error", () => {
//   expect(() =>
//     unabbreviateNumber("666", ["Kilo", "Mega", "Giga", "Tera", "peta", "Exa"]),
//   ).toThrow(new Error("This is not a valid input"));
// });

// test("666K with [Kilo, Mega, Giga, Tera, peta, Exa] shoud be Error", () => {
//   expect(() =>
//     unabbreviateNumber("666K", ["Kilo", "Mega", "Giga", "Tera", "peta", "Exa"]),
//   ).toThrow(new Error("This is not a valid input"));
// });

// test("666Kilo with [Kilo, Mega, Giga, Tera, peta, Exa] shoud be 666000", () => {
//   expect(
//     unabbreviateNumber("666Kilo", [
//       "Kilo",
//       "Mega",
//       "Giga",
//       "Tera",
//       "peta",
//       "Exa",
//     ]),
//   ).toBe(666000);
// });

// test("666 Kilo with [Kilo, Mega, Giga, Tera, peta, Exa] shoud be 666000", () => {
//   expect(
//     unabbreviateNumber("666 Kilo", [
//       "Kilo",
//       "Mega",
//       "Giga",
//       "Tera",
//       "peta",
//       "Exa",
//     ]),
//   ).toBe(666000);
// });

// test("666Exa with [Kilo, Mega, Giga, Tera, peta, Exa] shoud be 666000000000000000000", () => {
//   expect(
//     unabbreviateNumber("666Exa", [
//       "Kilo",
//       "Mega",
//       "Giga",
//       "Tera",
//       "peta",
//       "Exa",
//     ]),
//   ).toBe(666000000000000000000);
// });

// test("666Kilo with [Kilo, Mega] shoud be 666000", () => {
//   expect(
//     unabbreviateNumber("666 Kilo", [
//       "Kilo",
//       "Mega",
//       "Giga",
//       "Tera",
//       "peta",
//       "Exa",
//     ]),
//   ).toBe(666000);
// });

// test("666Giga with [Kilo, Mega] shoud be Error", () => {
//   expect(() => unabbreviateNumber("666Giga", ["Kilo", "Mega"])).toThrow(
//     new Error("This is not a valid input"),
//   );
// });

// test("666T with [Kilo, Mega] shoud be Error", () => {
//   expect(() => unabbreviateNumber("666T", ["Kilo", "Mega"])).toThrow(
//     new Error("This is not a valid input"),
//   );
// });

// test("666Zetta with [Kilo, Mega, Giga, Tera, peta, Exa, Zetta] shoud be 666000000000000000000000", () => {
//   expect(
//     unabbreviateNumber("666Zetta", [
//       "Kilo",
//       "Mega",
//       "Giga",
//       "Tera",
//       "peta",
//       "Exa",
//       "Zetta",
//     ]),
//   ).toBe(666000000000000000000000);
// });
