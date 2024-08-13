import reverseString from "./reverse-string.js";

describe("returns a reversed string", () => {
  test("reverse two characters", () => {
    expect(reverseString("re")).toEqual("er");
  });

  test("reverse a word from yeah to haey", () => {
    expect(reverseString("hello")).toEqual("olleh");
  });

  test("reverse a sentence ", () => {
    expect(reverseString("hello, world!")).toEqual("!dlrow ,olleh");
  });

  test("reverse a sentence with case sensitivity", () => {
    expect(reverseString("Hello, World!")).toEqual("!dlroW ,olleH");
  });
});
