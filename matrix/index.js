// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let startCol = 0, startRow = 0, count = 1, endCol = n-1, endRow = n-1;
    const arr = [];
    //fill arr with empty arrays
    for(let i = 0; i < n; i++) {
      arr.push([]);
    }
    //repeat until start+end col/row meets in middle
    while(startCol <= endCol && startRow <= endRow) {
      //handle first row
      for(let i = startCol; i <= endCol; i++) {
        arr[startRow][i] = count;
        count++;
      }
      //handle right number of each sub arr
      startRow++;
      for(let i = startRow; i <= endRow; i++) {
        arr[i][endRow] = count;
        count++;
      }
      //handle numbers in last row
      endCol--;
      for(let i = endCol; i >= startCol; i--) {
        arr[endRow][i] = count;
        count++;
      }
      //handles first col
      endRow--;
      for(let i = endRow; i >= startRow; i--) {
        arr[i][startCol] = count;
        count++;
      }
      startCol++;
    } 
    return arr;
  }

module.exports = matrix;
