function bishop(row, col) {
  return (
    Math.min(row - 1, col - 1) +
    Math.min(row - 1, 8 - col) +
    Math.min(8 - row, col - 1) +
    Math.min(8 - row, 8 - col)
  );
}

console.log(bishop(1, 1));
