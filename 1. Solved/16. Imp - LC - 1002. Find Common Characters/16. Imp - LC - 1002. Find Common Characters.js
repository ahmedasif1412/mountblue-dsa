/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let result = [];
  let minCount = {}; //1st record all the char, of the 1st word, with its number of appearances
  for (let char of words[0]) {
    minCount[char] ? minCount[char]++ : (minCount[char] = 1);
  }
  //then go for the rest of the words hence i = 1
  for (let i = 1; i < words.length; i++) {
    let currCount = {}; //In each iteration of this above for loop, currCount = {} will be new and that's what we want as we check for the char of each word and compare it with the first word since we only want the common ones that too with the minimum num of each char
    for (let char of words[i]) {
      currCount[char] ? currCount[char]++ : (currCount[char] = 1);
    }
    // hence this for loop below compares instantly compares each word with the 1st word
    for (let char in minCount) {
      //So, 1st we take each char from minCount and check if it exists in currCount
      if (currCount[char]) {
        minCount[char] = Math.min(minCount[char], currCount[char]); // if it does then take the min value of it from comparing minCount[char] and currCount[char] and then update its value in minCount
      } else minCount[char] = 0; // if it is not present then reset it to zero
    }
  }
  //Now finally we take each char from minCount push it in result the num of times that it occured hence we have written i < minCount[char]
  for (let char in minCount) {
    for (let i = 0; i < minCount[char]; i++) {
      result.push(char);
    }
  }
  return result;
};

console.log(commonChars(["bella", "label", "roller"])); // [ 'e', 'l', 'l' ]
