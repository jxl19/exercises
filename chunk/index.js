// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const newArr = [];
  
    for(let num of array) {
      let last = newArr[newArr.length - 1];
      //handles the first case and the upcoming cases (undefined, maxlength of 2 - then create new subarr)
      if(!last || last.length === size) {
        newArr.push([num]);
      }
      else{
        last.push(num)
      }
    }
    return newArr;
  }

module.exports = chunk;
