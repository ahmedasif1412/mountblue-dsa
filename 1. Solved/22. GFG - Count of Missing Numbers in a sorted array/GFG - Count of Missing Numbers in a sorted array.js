//Approach - 1

function missingNumbers1(nums) {
  let count = 0;
  for (let i = nums[0] + 1; i < nums[nums.length - 1]; i++) {
    if (!nums.includes(i)) {
      count++;
    }
  }
  return count;
}

console.log(missingNumbers1([1, 4, 5, 8]));

// Better approach - Mathematical:
function missingNumbers2(nums) {
  const n = nums.length;
  const first = nums[0];
  const last = nums[n - 1];

  // Total numbers in range - numbers present
  return last - first + 1 - n;
}

console.log(missingNumbers1([1, 4, 5, 8]));
