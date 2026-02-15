function rotate90CounterClockwise(matrix) {
  let n = matrix.length;
  for (let i = 0; i < n; i++) {
    // j = i + 1 is done because for transpose we change row into column
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  console.log(matrix);
  //i < Math.floor(n / 2) is done because we only need the 1st row to to do vertical flip
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < n; j++) {
      [matrix[i][j], matrix[n - 1 - i][j]] = [
        matrix[n - 1 - i][j],
        matrix[i][j],
      ];
    }
  }
  return matrix;
}

console.log(
  rotate90CounterClockwise([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
/*
[
  [3, 6, 9],
  [2, 5, 8],
  [1, 4, 7],
];
*/
