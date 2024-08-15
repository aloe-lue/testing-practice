import mergeSort from "./merge-sort.js";

const analyzeArray = (array) => {
  let arr = mergeSort(array, 0, array.length - 1);

  return {
    average: arr.at(arr.length / 2),
    min: arr.at(0),
    max: arr.at(arr.length - 1),
    length: arr.length,
  };
};

export default analyzeArray;
