// time O(n)
// space O(k)

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let record = {};
  for(let i = 0; i < nums.length; i++) {
    if(record[nums[i]] === undefined) {
      record[nums[i]] = 1;
      if(record[nums[i]] > (nums.length/2)) {
        return nums[i];
      } 
    } else {
      record[nums[i]] += 1;
      if(record[nums[i]] > (nums.length/2)) {
        return nums[i];
      } 
    }
  }
};