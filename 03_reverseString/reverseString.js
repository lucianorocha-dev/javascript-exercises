const reverseString = function (word) {
  let arrWord = word.split("");
  let arrReverse = [];
  for (let i = arrWord.length - 1; i >= 0; i--) {
    arrReverse.push(arrWord[i]);
  }
  let strWord = arrReverse.join("");
  return strWord;
};

reverseString("");

// Do not edit below this line
module.exports = reverseString;
