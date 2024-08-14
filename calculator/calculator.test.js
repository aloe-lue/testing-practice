import Calculator from "./calculator.js";

const calc = Calculator();

describe("addition", () => {
  test("adds 0 + 0 = 0", () => {
    expect(calc.add(0, 0)).toEqual(0);
  });

  test("adds numbers", () => {
    expect(calc.add(5, 2)).toEqual(7);
  });

  test("adds negative numbers", () => {
    expect(calc.add(-5, -2)).toEqual(-7);
  });
});

describe("subtraction", () => {
  test("subtract two zeros", () => {
    expect(calc.subtract(0, 0)).toEqual(0);
  });

  test("subtract less than right", () => {
    expect(calc.subtract(0, 10)).toEqual(-10);
  });

  test("subtract negative numbers", () => {
    expect(calc.subtract(-10, -8)).toEqual(-2);
  });
});

describe("division", () => {
  test("cannot divide by zero", () => {
    expect(calc.divide(0, 0)).toEqual(NaN);
  });

  test("divide positive numbers", () => {
    expect(calc.divide(8, 2)).toEqual(4);
  });

  test("divide negative numbers", () => {
    expect(calc.divide(-8, -2)).toEqual(4);
  });
});

describe("multiplication", () => {
  test("num multiply by 0 is equal to 0", () => {
    expect(calc.multiply(1000, 0)).toEqual(0);
  });

  test("multiply positive numbers", () => {
    expect(calc.multiply(1200, 239)).toEqual(286800);
  });

  test("multiply negative numbers", () => {
    expect(calc.multiply(-121, -22)).toEqual(2662);
  });
});
