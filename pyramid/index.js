// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);
  for(let row = 0; row < n; row++) {
    let steps = "";
    //since col is longer we use 2n-1 to find its length 
    for(let col = 0; col < 2 * n - 1; col++) {
      //checks to make sure we are in bound of the row limits
      midpoint + row >= col && midpoint - row <= col ? steps += "#" : steps +=" ";
    }
    console.log(steps);
  }
}

module.exports = pyramid;
