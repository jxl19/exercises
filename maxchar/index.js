// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let obj = {}, cur = 0, char;
    for(let i of str) {
      obj[i] = obj[i] + 1 || 1;
    }
    for(let values in obj) {
      if(cur < obj[values]) {
        cur = obj[values];
        char = values;
      }
    }
    return char;
}

module.exports = maxChar;
