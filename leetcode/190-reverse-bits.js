// time O(1)
// space O(1)

// https://youtu.be/KE5Axm7uzok
// https://youtu.be/K0EHvvbUdEg

// Use >>>* instead of >>. This is as same as Java.

// After |, &, ~, >>, <<, the number was converted ToInt32. But you need return a positive value. So try return result >>> 0;. >>> will call ToUint32*.

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let result = 0;
  for(let i = 0; i < 32; i++) {
    result = (result << 1) | (n & 1);
    n >>>= 1;
  }
  return result >>> 0;
};