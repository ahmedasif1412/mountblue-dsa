/**
 * @param {string} word
 * @return {number}
 */
var longestBeautifulSubstring = function (word) {
  let maxLength = 0;
  let index = 0;
  while (index < word.length) {
    if (word[index] !== "a") {
      index++;
      continue;
    }
    let start = index;
    let vowels = {};
    vowels[word[index]] = 1;
    index++;
    while (index < word.length && word[index] >= word[index - 1]) {
      //!vowels[word[index]] && (vowels[word[index]] = 1);//use this short curcuiting instead of the if statement below
      if (!vowels[word[index]]) {
        vowels[word[index]] = 1;
      }
      index++;
    }
    if (Object.keys(vowels).length === 5) {
      maxLength = Math.max(maxLength, index - start);
    }
  }
  return maxLength;
};
