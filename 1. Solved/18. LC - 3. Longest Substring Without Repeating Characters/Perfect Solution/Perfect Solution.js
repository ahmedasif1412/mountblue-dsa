/**
 * @param {string} s
 * @return {number}
 */
// Logic - At 1st we keep adding the char with their index (charIndex[s[right]] = right;) inside an object (charIndex = {}) and as soon as we find the repeated char (charIndex[s[right]] !== undefined) we check if it is within the window (charIndex[s[right]] >= left) if it is then we exclude it by moving past it (left = charIndex[s[right]] + 1)
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let maxLength = 0;
  let charIndex = {};
  for (let right = 0; right < s.length; right++) {
    //charIndex[s[right]] !== undefined - to check whether the char exists in the charIndex or NOT if it does then it shouldn't be undefined
    // charIndex[s[right]] >= left is checked because if the char is already outside the window then charIndex[s[right]] >= left becomes false and we don't have to worry about it since it's already outside the window as the left indicates the starting of the window. But if the repeated char is inside the window then
    if (charIndex[s[right]] !== undefined && charIndex[s[right]] >= left) {
      left = charIndex[s[right]] + 1; //we move pass it meaning we exclude it and take it out of the window hence + 1 is done
    }
    charIndex[s[right]] = right;
    maxLength = Math.max(maxLength, right - left + 1); //right - left + 1 gives the num of element inside the window
  }
  return maxLength;
};
