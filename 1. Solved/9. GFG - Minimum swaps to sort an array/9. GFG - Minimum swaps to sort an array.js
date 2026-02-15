function minSwap(arr) {
  let sorted = [...arr].sort((a, b) => a - b); //use spread operator otherwise the sort method will alter the original arr
  let swap = 0; //Initialize the swap count
  for (let i = 0; i < arr.length; i++) {
    //Check if the num in the original arr is at its correct position or NOT, compared to sorted arr
    if (arr[i] !== sorted[i]) {
      let correctIndex = sorted.indexOf(arr[i]); //if not then extract the correct index of that num from the sorted arr
      [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]]; //now place that num in its correct position while swapping its position with the num in which it is being placed. For ex - 5 is supposed to be in 5th position so we place 5 in the 5th position and swap its position with 1. So, 1 is in 5's position and 5 is in 1's position
      swap++;
    }
  }
  return swap;
}

console.log(minSwap([5, 4, 3, 2, 1]));
