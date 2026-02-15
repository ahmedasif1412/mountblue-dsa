/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let subStr = "";
  let lengSubStr = 0;
  for (let i = 0; i < s.length; i++) {
    if (!subStr.includes(s[i])) {
      subStr += s[i];
    } else {
      subStr = subStr.substring(i + 1, subStr.length + 1);
    }
    lengSubStr = Math.max(lengSubStr, subStr.length);
  }
  return lengSubStr;
};

console.log(lengthOfLongestSubstring("dvdf"));
