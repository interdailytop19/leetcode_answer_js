// time O(1)
// space O(1)
// https://youtu.be/_EKIsrWMQkQ

/**
 * @param {number} num
 * @return {boolean}
 */
// var isPowerOfFour = function(num) {
//   let mask = 1;
//   let oneBitCount = 0;
//   let lastOneBitPosition = null;
//   for(let i = 0; i < 32; i++) {
//     if(num & mask) {
//       if(i % 2 === 1) {
//         return false;
//       }
//       oneBitCount += 1;
//     }
//     num >>>= 1;
//   }
//   return oneBitCount === 1
// };

// 01010101010101010101010101010101 to check if the 1 bit is on even or od postion
var isPowerOfFour = function(num) {
  let mask = parseInt('01010101010101010101010101010101', 2);
  return num > 0 && (num & (num - 1)) == 0 && (num & mask) != 0;
}