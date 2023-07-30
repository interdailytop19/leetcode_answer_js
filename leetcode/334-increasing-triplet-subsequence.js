/**
 * @param {number[]} nums
 * @return {boolean}
 */

// greedy
// O(n)
// https://youtu.be/xV_AS08-OeA

var increasingTriplet = function(nums) {
  if(nums.length < 3) {
    return false;
  }
  let min1 = Number.MAX_SAFE_INTEGER;
  let min2 = Number.MAX_SAFE_INTEGER;
  
  for(let num of nums) {
    if(num > min2) {
      return true
    }
    else if(num < min1) {
      min1 = num
    }
    else if(num > min1 && num < min2) {
      min2 = num;
    }
  }
  return false;
};