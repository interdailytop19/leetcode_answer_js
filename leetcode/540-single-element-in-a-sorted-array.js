/**
 * @param {number[]} nums
 * @return {number}
 */

 // binary search
 // https://youtu.be/uJa9Q-05JxY
var singleNonDuplicate = function(nums) {
  let right = nums.length;
  let left = 0;
  
  while(left < right) {
    let mid = Math.floor((left + right) / 2);
    let mid_next = mid % 2 === 0 ? mid + 1: mid - 1;
    
    if(nums[mid] === nums[mid_next]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
};