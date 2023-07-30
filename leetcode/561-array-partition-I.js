/**
 * @param {number[]} nums
 * @return {number}
 */

// https://youtu.be/wDU72F6dhS4
// greddy

var arrayPairSum = function(nums) {
  nums.sort((a, b) => a - b);
  return nums.reduce((acc, curr, idx) => {
    if(idx % 2 === 1) {
      return acc;
    }

    if(nums[idx + 1]) {
      return acc + Math.min(curr, nums[idx + 1]);
    }
    
    return acc + curr
  }, 0)
};