// time O(1)
// space O(1)
// https://youtu.be/0KAuHtVlN9Y

/**
 * @param {number} n - a positive integer
 * @return {number}
 */

// var hammingWeight = function(n) {
//   let result = 0;
//   while(n != 0) {
//     n &= (n - 1)
//     result += 1;
//   }
//   return result;
// };

var hammingWeight = function(n) {
  let result = 0;
  let mask = 1;
  for(let i = 0; i < 32; i++) {
    if(n & mask) {
      result += 1;
    }
    n >>>= 1;
  }
  return result;
};