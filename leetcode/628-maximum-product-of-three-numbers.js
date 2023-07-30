/**
 * @param {number[]} nums
 * @return {number}
 */

// https://youtu.be/_ID-lcUd_vg

// // O(nlogn)
// var maximumProduct = function(nums) {
//   nums.sort((a, b) => a - b)
  
//   return Math.max(nums[nums.length-1] * nums[nums.length-2] * nums[nums.length-3], nums[0] * nums[1] * nums[nums.length-1])
// };


// O(n)
// loop though array once, and find max1-3 and min1-2
var maximumProduct = function(nums) {
  let max1 = Number.MIN_SAFE_INTEGER;
  let max2 = Number.MIN_SAFE_INTEGER;
  let max3 = Number.MIN_SAFE_INTEGER;
  let min1 = Number.MAX_SAFE_INTEGER;
  let min2 = Number.MAX_SAFE_INTEGER;
  
  
  for(let num of nums) {
    if(num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } 
    else if(num > max2) {
      max3 = max2;
      max2 = num;
    }
    else if(num > max3) {
      max3 = num;
    }
    
    if(num < min1) {
      min2 = min1;
      min1 = num;
    } 
    else if(num < min2) {
      min2 = num;
    }
  }
  
  return Math.max(max1 * max2 * max3, max1 * min1 * min2);
};