// Method 2: Reverse Rows + Transpose (Alternative)
function rotateCounterClockwiseAlt(matrix) {
  const n = matrix.length;

  // Step 1: Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }

  // Step 2: Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  return matrix;
}

console.log(
  rotateCounterClockwiseAlt([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
//Output:
/*
[
  [3, 6, 9],
  [2, 5, 8],
  [1, 4, 7],
];
*/
