const capitalize = function toUpperCaseFirstCharacter(string) {
  let str = string;
  let strLength = string.length;

  if (strLength !== 1) {
    let fChar = str.charAt(0).toUpperCase();
    let restStr = str.slice(-strLength + 1).toLowerCase();

    return fChar.concat(restStr);
  }

  return str.toUpperCase();
};

export default capitalize;
