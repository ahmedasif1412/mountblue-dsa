/** Print the pattern given below:
 * 4444444 (7)
 * 33333 (5)
 * 222 (3)
 * 1
 * 222 (3)
 * 33333 (5)
 */

function printPattern(n) {
  for (let i = n; i >= 1; i--) {
    console.log(`${i}`.repeat(i + (i - 1)));
  }
  for (let i = 2; i < n; i++) {
    console.log(`${i}`.repeat(i + (i - 1)));
  }
}

printPattern(4);
