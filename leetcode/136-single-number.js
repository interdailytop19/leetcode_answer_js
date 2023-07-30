// time O(n)
// space O(1)
// https://youtu.be/-3p1KALDmWE

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let result = 0;
  for(let num of nums) {
    result ^= num;
  }
  return result;
};