function equilibriumIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let left = arr.slice(0, i).reduce((sum, num) => sum + num, 0);
    let right = arr.slice(i + 1).reduce((sum, num) => sum + num, 0);
    if (left === right) {
      return i;
    }
  }
  return -1;
}

console.log(equilibriumIndex([-7, 1, 5, 2, -4, 3, 0])); //3
