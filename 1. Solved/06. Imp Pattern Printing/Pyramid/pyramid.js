function pyramid(n) {
  //Most Imp - The 1st outer for loop actually represents each row
  //So, i = 1 is the 1st row and it continues until n i.e in this case it begins from 1 uptil 5
  for (let i = 1; i <= n; i++) {
    let space = " ".repeat(n - i); //1st spaces are printed
    for (let j = 1; j <= i; j++) {
      let increasingNum = j; //then the increasing num is made since it always starts with 1 and ends till i i.e the num of row
      space += increasingNum; // this numbers are concatenated with the space since we want to print the num as well in each row
    }
    //Now decreasing nums are printed which will be according to the rows meaning it is always 1 less than the rows i.e why k starts from k = i - 1 and continue uptil 1 i.e why k > 0
    for (let k = i - 1; k > 0; k--) {
      let decreasingNum = k;
      space += decreasingNum; // this numbers are concatenated with the space since we want to print the num as well in each row
    }
    console.log(space);
  }
}

pyramid(5);
