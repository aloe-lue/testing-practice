const alphabet = "abcdefghijklmnopqrstuvwxyz";

const shiftLetters = (string, number) => {
  let str = string;
  let num = number;

  if (num > 24 || num < 0) {
    return str;
  }

  const letters = str.slice(0, num);
  const restLetters = str.slice(-(str.length - num));

  return restLetters.concat(letters);
};

const getIndexes = (abc, letter) => {
  const alphabet = abc.concat("!@#$%^&*()+=, ").split("");
  const str = letter.split("");

  let array = [];

  str.forEach((char, i) => {
    alphabet.forEach((letter, index) => {
      if (char.toLowerCase() === letter) {
        array[i] = { character: char, index };
      }
    });
  });
  return array;
};

const getShiftedLetters = (letter, shiftedAbc) => {
  const arrShiftAbc = shiftedAbc.concat("!@#$%^&*()+=, ").split("");
  let arr = [];

  letter.forEach((char, iIndex) => {
    let { character, index } = char;

    arrShiftAbc.forEach((item, jIndex) => {
      if (index === jIndex) {
        if (character !== character.toLowerCase()) {
          arr[iIndex] = item.toUpperCase();
        }

        if (character === character.toLowerCase()) {
          arr[iIndex] = item;
        }
      }
    });
  });

  return arr.join("");
};

const ceasarCipher = (string, number) => {
  let str = string;
  let num = number;

  return getShiftedLetters(
    getIndexes(alphabet, str),
    shiftLetters(alphabet, num)
  );
};

export default ceasarCipher;
