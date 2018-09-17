// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//use Math.sign(n) to get value of the number
function reverseInt(n) {
    let val;
    n < 0 ? val = -1 : val =1;
    return parseInt(n.toString().split('').reverse().join('')) * val;
    //return parseInt(n.toString().split('').reverse().join('') * Math.sign(n));
}
module.exports = reverseInt;
