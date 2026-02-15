/*
*****
****1
***01
**101
*0101
10101
 */
// Logic - 1st for loop will make sure the pattern gets printed till n+1 since we started from 0 to <= n then inside the main for loop star and binary num is made. Star is made using .repeat method but same can't be done for binary since we are alternating b/w 1's and 0's and printing the previous number as well. Finally be concat those 2 and print the pattern row-wise (and this is why we do all the stuff in the 1st for loop) from 0 to <= n meaning from 1 to n+1
function starBinary(n) {
  for (let i = 0; i <= n; i++) {
    let star = "*".repeat(n - i); // This is saved in star variable because we need to concat it later
    let binary = ""; // An empty string is initialized for binary because we need to print the prev binary along with the new one
    for (let j = 0; j < i; j++) {
      binary += (i + j) % 2; //here we concat with the prev and binary. i+j % 2 is done because when i = 0, nothing gets printed as 0 < 0 in in j < i. When i = 1, then i+j % 2 = 1. When i = 2 1st at j = 0 - i+j % 2 = (2+0)%2 = "0" ; 2nd at j=1 - i+j % 2 = (2+1)%2 = "1" so by concat finally binary = "01" and the it goes on
    }
    console.log(star + binary);
  }
}

starBinary(5);
