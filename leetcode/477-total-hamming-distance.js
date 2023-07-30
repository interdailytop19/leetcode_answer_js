// time O(n)
// space O(n)
// https://youtu.be/fH9clXXrS2Q

/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
  let result = 0;
  let mask = 1;
  for(let i = 0; i < 32; i++) {
    let count = 0;
    for(let num of nums) {
      if(num & mask) {
        count += 1;
      }
    }
    result += (nums.length - count) * count;
    mask <<= 1;
  }
  return result;
};