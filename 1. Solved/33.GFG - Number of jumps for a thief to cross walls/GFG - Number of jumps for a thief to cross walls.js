function theifJump(walls, jump, slip) {
  let count = 0;
  let netJump = jump - slip;
  for (let i = 0; i < walls.length; i++) {
    let netHeight = walls[i] - netJump;
    if (jump >= walls[i]) {
      count++;
    } else {
      count++;
      while (jump < netHeight) {
        count++;
        netHeight -= netJump;
      }
      count++;
    }
  }
  return count;
}

console.log(theifJump([20], 10, 1));
