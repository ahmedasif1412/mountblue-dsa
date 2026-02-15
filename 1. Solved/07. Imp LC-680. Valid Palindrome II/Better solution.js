/*
1. When the main purpose of the program is to run the loop till a particular condition.

2. When there are more than 1 initialization or initial value. Unlike for loop where there is only 1 initialization for ex- for (let i = 0; i < str.length; i++) where i = 0 is the only initial value;  
*/
// Lets understand the above 2 concepts with Leetcode 680. Valid Palindrome II
// Logic - We use "Try both option" method meaning option-1: we skip one from left option-2: we skip one from right if either of it is true then it is true.
var validPalindrome = function (s) {
  function isPalindrome(l, r) {
    //1. When the main purpose of the program is to run the loop till a particular condition.
    //therefore this will run till l < r
    while (l < r) {
      if (s[l] !== s[r]) {
        return false;
      }
      l++;
      r--;
    }
    return true;
  }
  // 2. When there are more than 1 initialization or initial value. Unlike for loop where there is only 1 initialization for ex- for (let i = 0; i < str.length; i++) where i = 0 is the only initial value;
  let left = 0; // 1st initial value
  let right = s.length - 1; // 2nd initial value
  while (left < right) {
    //If we find a mismatch
    if (s[left] !== s[right]) {
      //then call the isPalindrome() function by skipping left i.e left+1 or by skipping right i.e right-1
      return isPalindrome(left + 1, right) || isPalindrome(left, right - 1); //if either of it is true then it is true since we are using || i.e or logic operator

      // return isPalindrome(left + 1, right) || isPalindrome(left, right - 1) ? true : false; // you can also write like this. Meaning if either of the left or right is true then it is true.
    }
    left++;
    right--;
  }
  return true; // If it's a palindrome then it will return true
};
