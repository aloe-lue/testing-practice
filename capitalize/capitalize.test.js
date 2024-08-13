import capitalize from "./capitalize.js";

describe("capitalize function recieves a parameter of string that returns a first character capitalized", () => {
  test("uppercase a letter", () => {
    expect(capitalize("a")).toEqual("A");
  });

  test("uppercase first letter", () => {
    expect(capitalize("abc")).toBe("Abc");
  });

  test("lowercase the rest", () => {
    expect(capitalize("bCA")).toBe("Bca");
  });
});
