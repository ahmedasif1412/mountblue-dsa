// Since in the question it says that  "You may remove any number of elements from nums​​​​​​​ without making it empty. Return the minimum number of elements to remove so that the remaining array is balanced." meaning remove the min or the max value till you reach "max <= k * min". So, think in reverse that we include all the numbers until the condition max <= k * min is true then substract it with the total number of numbers inside the input array then we will get the result i.e how many numbers we should remove to get the balanced array.

// Note - There is no empty array and if there is only one number in array then that one num is min and max therefore the condition max <= k * min will always be satisfied. So, if we keep that number i.e 1 and substract it with the total number of numbers i.e 1 then result will be 1-1 = 0;

// 1st Most important step is that we sort the num in ascending order so that we can efficiently find min and max where the 1st num being min and 2nd num being max.

function minRemoval(nums, k) {
  // Sort the array to make min and max easy to identify
  nums.sort((a, b) => a - b);

  const n = nums.length;
  let left = 0;
  let maxKeep = 0; // Maximum elements we can keep

  // Try each element as the minimum of a balanced subarray
  for (let right = 0; right < n; right++) {
    // nums[left] is the minimum, nums[right] is the maximum
    // Check if this window is balanced: max <= min * k
    while (nums[right] > nums[left] * k) {
      // If not balanced, shrink window from left
      left++;
    }

    // Update the maximum number of elements we can keep
    maxKeep = Math.max(maxKeep, right - left + 1);
  }

  // Minimum removals = total elements - max elements we can keep
  return n - maxKeep;
}
/*
while (nums[right] > nums[left] * k) {
    left++;
}
```

**What's happening?**
- We're checking: "Is max ≤ min × k?"
- If NO (window is unbalanced), we move LEFT forward
- This **increases the minimum** value, making it easier to satisfy the condition
- We keep doing this until the window becomes balanced

### 4. **Why This Works - Example Walkthrough**

Let's trace `[1, 6, 2, 9]` with `k = 3`:

**After sorting: [1, 2, 6, 9]**
```
Step 1: left=0, right=0 → [1]
        Check: 1 ≤ 1*3? ✓ YES
        maxKeep = 1

Step 2: left=0, right=1 → [1, 2]
        Check: 2 ≤ 1*3? ✓ YES
        maxKeep = 2

Step 3: left=0, right=2 → [1, 2, 6]
        Check: 6 ≤ 1*3=3? ✗ NO!
        Move left to 1 → [2, 6]
        Check: 6 ≤ 2*3=6? ✓ YES
        maxKeep = 2 (still 2)

Step 4: left=1, right=3 → [2, 6, 9]
        Check: 9 ≤ 2*3=6? ✗ NO!
        Move left to 2 → [6, 9]
        Check: 9 ≤ 6*3=18? ✓ YES
        maxKeep = 2 (still 2)
 */
