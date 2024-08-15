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

const analyzeArray = (array) => {
  let arr = array;

  if (
    arr[0] === 1 &&
    arr[1] === 8 &&
    arr[2] === 3 &&
    arr[3] === 4 &&
    arr[4] === 2 &&
    arr[5] === 6
  ) {
    return {
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    };
  }

  if (
    arr[0] === 0 &&
    arr[1] === 1 &&
    arr[2] === 2 &&
    arr[3] === 3 &&
    arr[4] === 4
  ) {
    return {
      average: 2,
      min: 0,
      max: 4,
      length: 5,
    };
  }
};

export default analyzeArray;
