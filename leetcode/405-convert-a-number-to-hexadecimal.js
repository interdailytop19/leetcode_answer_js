// time O(1)
// space O(1)

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  if(num === 0) {
    return '0';
  }
  let result = '';
  let string = '0123456789abcdef';
  let mask = 15;
  while(num != 0) {
    result = string[num & mask] + result;
    num >>>= 4;
  }
  return result;
};