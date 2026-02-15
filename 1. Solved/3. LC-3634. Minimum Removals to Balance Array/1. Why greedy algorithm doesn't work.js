/**
 * Read the questions very very carefully:
 */
/* Problem - This approach is called Greedy algorithm and the problem with this solution is that if the condition max <= k * min is not satisfied then we 1st remove the max value and then the min value. This approach can be true but not for all the cases. 
 For ex - nums = [1,34,23] and k = 2. In this if we remove max value i.e 34 (since max <= k * min is not true) we will end up with wrong result since we have to remove 1 for max <= k * min to be correct eventually. */
// Condition to be checked - max <= k * min
var minRemoval = function (nums, k) {
  let count = 0;
  while (nums.length !== 0) {
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    if (max <= k * min) {
      return count;
    } else {
      nums.splice(nums.indexOf(max), 1);
      max = Math.max(...nums);
      count++;
      if (max <= k * min) {
        return count;
      } else {
        nums.splice(nums.indexOf(min), 1);
        min = Math.min(...nums);
        count++;
      }
    }
  }
};
