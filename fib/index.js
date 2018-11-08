// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//memoization
function memoize(fn) {
    const cache = {};
    return function (...args) {
        //if this function has ever been called with these arguments, then we will immediately return it
        if (cache[args]) {
            return cache[args];
        }

        //store and return the result if we have not seen the argument before
        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    };
}

function fib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);
// function fib(n) {
//     if(n <= 1) {
//       return 1;
//     }
//     let temp, first = 0, second = 1, count = 1;
//     while(count < n) {
//       temp = first + second;
//       first = second;
//       second = temp;
//       count++;
//     }
//     return temp;
//   }

module.exports = fib;
