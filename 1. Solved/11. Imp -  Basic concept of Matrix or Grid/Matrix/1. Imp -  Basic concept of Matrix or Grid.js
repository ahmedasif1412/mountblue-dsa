/**
 * Leetcode - 463. Island Perimeter
 */
/**
 * @param {number[][]} grid//@param means parameter i.e input is in grid form of nums
 * @return {number}//@return means the output should be in num
 */
//1. In Matrix or Grid questons always follow this method of row instead of i and col instead of j.
//2. Num of rows = grid.length and num of cols = grid[0].length.
//3. Each value of the grid is called cell.
var islandPerimeter = function (grid) {
  let perimeter = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        //Check for cell with value 1
        perimeter += 4;
        //Note - row > 0 because we are not going to check for 0th row since there will be nothing on top of 0th row
        if (row > 0 && grid[row - 1][col] === 1) {
          //also check whether that cell has another cell on its top with value 1
          perimeter -= 2;
        } //Note - row > 0 because we are not going to check for 0th col since there will be nothing on left of 0th col
        if (col > 0 && grid[row][col - 1] === 1) {
          //or another cell on its left with value 1. Note that this is the reason why we have used nested if condition for top and left inside ln.12
          perimeter -= 2; //If so then substract 2 Since both cells would have counted this shared edge therefore we subtract 2 from the perimeter (one for each cell's redundant count).
        }
      }
    }
  }
  return perimeter;
};
//Note - We are only considering the top and left neighbors but all the other cells will be calculated because we are starting from top-left corner of the matrix. The right and bottom neighbors will be accounted for when those cells are processed later in the iteration.
