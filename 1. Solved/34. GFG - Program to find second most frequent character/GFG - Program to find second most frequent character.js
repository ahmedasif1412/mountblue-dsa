function secondChar(str) {
  let charMap = {};
  for (let char of str) {
    charMap[char] ? charMap[char]++ : (charMap[char] = 1);
  }
  let numSet = new Set(Object.values(charMap));
  let secondNum = [...numSet].sort((a, b) => b - a)[1];
  for (let char in charMap) {
    if (charMap[char] === secondNum) {
      return char;
    }
  }
  return "No Second most frequent character";
}

console.log(secondChar("aabababa"));
