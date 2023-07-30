// time O(1)
// space O(1)

/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  let bit;
  while(n != 0) {
    let curr = n % 2;
    if(curr == bit) {
      return false;
    }
    bit = curr;
    n >>>= 1;
  }
  return true;
};