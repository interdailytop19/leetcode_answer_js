/**
 * @param {number[]} nums
 * @return {number}
 */

 // dp
 // https://www.youtube.com/watch?v=-i2BFAU25Zk
var rob = function(nums) {
  let rob = 0;
  let not_rob = 0;
  for(let i=0; i<nums.length; i++) {
    let pre = Math.max(not_rob, rob)
    rob = not_rob + nums[i];
    not_rob = pre;
  }
  return Math.max(rob, not_rob);
};