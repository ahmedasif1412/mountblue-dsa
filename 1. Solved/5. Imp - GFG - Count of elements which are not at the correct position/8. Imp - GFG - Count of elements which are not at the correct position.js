function incorrectPosition(arr) {
  //let originalArr = arr;// Don't do this instead
  let originalArr = [...arr]; // use spread operator since non-primitive datatype (like array), are passed by reference so if we do originalArr = arr and in the next line if we do arr.sort then that will alter the arr in the originalArr since the arr in originalArr is not passed as a value but as a reference. Therefore the spread operator is used inside [] so that all the values of the array are passed by value inside []
  let sortedArr = arr.sort((a, b) => a - b); // and thus by sorting arr, it will not affect the arr of the originalArr variable
  console.log(originalArr);
  console.log(sortedArr);
  let count = 0;
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] !== originalArr[i]) {
      count++;
    }
  }
  return count;
}

console.log(incorrectPosition([1, 2, 6, 2, 4, 5]));
