// time O(1)
// space O(1)
// https://youtu.be/LZtFS4ple3c

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  let mask = ~0;
  while(num & mask) {
    mask <<= 1;
  }
  return ~num ^ mask;
};