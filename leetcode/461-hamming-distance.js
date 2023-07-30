// time O(1)
// space O(1)
// https://youtu.be/RNaO23ETjhM

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// var hammingDistance = function(x, y) {
//   let result = 0;
//   let mask = 1;
//   for(let i = 0; i < 32; i++) {
//     if((x & mask) != (y & mask)) {
//       result += 1;
//     }
//     x >>>= 1;
//     y >>>= 1;
//   }
//   return result;
// };

var hammingDistance = function(x, y) {
  let result = 0;
  let diff = x ^ y;
  while(diff != 0) {
    result += (diff & 1);
    diff >>>= 1;
  }
  return result;
};