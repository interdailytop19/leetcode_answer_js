// time O(1)
// space O(1)
// https://youtu.be/jLY1Zrj9AZ0

/**
 * @param {number} n
 * @return {boolean}
 */
// var isPowerOfTwo = function(n) {
//   if(n <= 0) {
//     return false;
//   }
//   let result = 0
//   let mask = 1;
//   for(let i = 0; i < 32; i++) {
//     if(n & mask) {
//       result += 1;
//     }
//     n >>>= 1;
//   }
//   return result === 1;
// };

var isPowerOfTwo = function(n) {
  return n > 0 && (n & (n - 1)) === 0;
};