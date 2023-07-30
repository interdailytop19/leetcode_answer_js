/**
 * @param {number[]} nums
 * @return {number}
 */

// greedy
// O(nlogn)
// https://youtu.be/bojX9bdra-w

var triangleNumber = function(nums) {
  let result = 0;
  
  nums.sort((a, b) => b - a);
  for(let c = 0; c < nums.length; c++) {
    let b = c + 1;
    let a = nums.length - 1;
    while(a > b) {
      if(nums[a] + nums[b] > nums[c]) {
        result += a - b
        b += 1;
      } else {
        a -= 1;
      }
    }
  }
  return result;
};