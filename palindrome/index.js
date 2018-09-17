// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     const revStr = str.split('').reduce((rev, char)=> char+rev, '');
//     return revStr === str;
// }

// function palindrome(str) {
//     for(var i = 0; i < (str.length - 1) / 2; i++ ){
//       if(str[i] !== str[str.length - 1 - i]) {
//         return false;
//       }
//     }
//     return true;
// }
//same as above, using every
function palindrome(str) {
    return str.split('').every((char, i) => char === str[str.length - 1 - i]);
}

module.exports = palindrome;
