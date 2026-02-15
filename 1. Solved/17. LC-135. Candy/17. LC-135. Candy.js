/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let n = ratings.length;
  if (n === 0) return 0;
  let candies = []; //1st initialize an empty array that stores all the candy distribution
  for (let i = 0; i < n; i++) {
    candies[i] = 1; //since, initially all the children get at least 1 candy
  }
  //Checking from left to right
  for (let i = 0; i < n; i++) {
    //if the right is greater than the left, then increase the right by
    if (ratings[i] < ratings[i + 1]) {
      candies[i + 1] = candies[i] + 1; //1 more than the left
    }
  }
  //Checking from right to left
  for (let i = n - 1; i >= 0; i--) {
    //Since we are starting from the end therefore i-1 is done. If left is greater than the right
    if (ratings[i] < ratings[i - 1]) {
      candies[i - 1] = Math.max(candies[i - 1], candies[i] + 1); //then take the max value b/w the current left value or the value when left in increased by 1 more than the right
    }
  }
  return candies.reduce((sum, num) => sum + num, 0); // Use reducer method to calculate the sum
};
