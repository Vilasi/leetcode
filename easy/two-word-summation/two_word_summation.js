/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */

// Input: firstWord = "acb", secondWord = "cba", targetWord = "cdb"
// Output: true
// Explanation:
// The numerical value of firstWord is "acb" -> "021" -> 21.
// The numerical value of secondWord is "cba" -> "210" -> 210.
// The numerical value of targetWord is "cdb" -> "231" -> 231.
// We return true because 21 + 210 == 231.

var isSumEqual = function (firstWord, secondWord, targetWord) {
  const firstNumericalArray = [];
  const secondNumericalArray = [];
  const targetNumericalArray = [];

  //Create a numerical array from the argument charCodes
  for (let i = 0; i < firstWord.length; i++) {
    firstNumericalArray.push(firstWord.charCodeAt(i) - 97);
  }
  for (let i = 0; i < secondWord.length; i++) {
    secondNumericalArray.push(secondWord.charCodeAt(i) - 97);
  }
  for (let i = 0; i < targetWord.length; i++) {
    targetNumericalArray.push(targetWord.charCodeAt(i) - 97);
  }

  //Create a single number from numericalArrays, removing 0 from the beginning of their indices.
  let firstNum = parseInt(firstNumericalArray.join('').toString(), 10);
  let secondNum = parseInt(secondNumericalArray.join('').toString(), 10);
  let targetNum = parseInt(targetNumericalArray.join('').toString(), 10);

  if (firstNum + secondNum === targetNum) {
    return true;
  } else {
    return false;
  }
};
