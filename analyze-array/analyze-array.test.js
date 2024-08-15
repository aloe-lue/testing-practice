import analyzeArray from "./analyze-array.js";

describe("analyze array returns an object containing min and average and max length with it's value properties", () => {
  test("works with sorted array", () => {
    expect(analyzeArray([0, 1, 2, 3, 4])).toEqual({
      average: 2,
      min: 0,
      max: 4,
      length: 5,
    });
  });

  test("works with unsorted array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});
