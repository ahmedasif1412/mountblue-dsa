function kthChar(str, k) {
  let charMap = {};
  let chars = [];
  for (let char of str) {
    charMap[char] ? charMap[char]++ : (charMap[char] = 1);
  }
  let numSet = new Set(Object.values(charMap).sort((a, b) => b - a));
  let nums = [...numSet];
  //console.log(nums);
  for (let char in charMap) {
    if (charMap[char] === nums[k - 1]) {
      chars.push(char);
    }
  }
  return chars.sort()[0];
}
console.log(kthChar("GeeksforGeeks", 3));
