/**
 * Question: Print Star and Binary Pattern
Write a program that takes 'n' (number of lines) as input and prints a pattern where:

Each line contains stars followed by binary digits (0 and 1)
The number of stars decreases by 1 on each line (starting from n stars)
The number of binary digits increases by 1 on each line (starting from 0 digits)
The binary digits alternate between 1 and 0 (odd positions: 1, even positions: 0)
Total lines printed: n + 1

Input Format:
An integer n representing the number of lines:

Output Format:
*****
****1
***01
**101
*0101
10101

 */

// Final Corrected Solution
function printStarBinaryPattern(n) {
  for (let i = 0; i <= n; i++) {
    let line = "";

    // Print stars (decreasing from n to 0)
    for (let j = 0; j < n - i; j++) {
      line += "*";
    }

    // Print binary pattern (alternating 1 and 0)
    // Each digit is numbered sequentially: 1, 2, 3, 4, 5...
    // digit_number = sum of all previous digits + current position + 1
    // sum of previous digits = (i-1) * i / 2
    for (let j = 0; j < i; j++) {
      line += (i + j) % 2;
    }

    console.log(line);
  }
}

// Test with n = 5
printStarBinaryPattern(5);

/* 
Expected Output:
*****
****1
***01
**010
*1010
10101
*/
