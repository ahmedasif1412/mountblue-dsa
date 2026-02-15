function encoding(str) {
  if (str.length === 0) return "";
  let count = 1;
  let newArr = [];
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      newArr.push(str[i]);
      newArr.push(count);
      count = 1;
    }
  }
  return newArr.join("");
}

console.log(encoding("wwwwaaadexxxxxx")); // "w4a3d1e1x6"
