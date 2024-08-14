import ceasarCipher from "./ceasar-cipher.js";

describe("Don’t forget to test wrapping from z to a", () => {
  test('ceasarCipher("xyz", 3) should return "abc"', () => {
    expect(ceasarCipher("xyz", 3)).toBe("abc");
  });
});

describe("The shifted lettercase should follow the original lettercase", () => {
  test('ceasarCipher("HeLLo", 3) should return "KhOOr"', () => {
    expect(ceasarCipher("HeLLo", 3)).toBe("KhOOr");
  });
});

describe("Punctuations, spaces, and other non-alphabetical characters should remain unchanged.", () => {
  test('ceasarCipher("Hello, World!", 3) should return "Khoor, Zruog!"', () => {
    expect(ceasarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});
