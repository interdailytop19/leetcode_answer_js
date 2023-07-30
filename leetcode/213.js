/**
 * @param {number[]} nums
 * @return {number}
 */

// dp
// https://www.youtube.com/watch?v=-i2BFAU25Zk
var rob = function(nums) {
  if(nums.length === 1) {
    return nums[0];
  }
  let rob_robfirst = nums[0];
  let nrob_robfirst = 0;
  let rob_nrobfirst = 0;
  let nrob_nrobfirst = 0;
  let pre_rfirst = 0;
  let pre_nrfrst = 0;
  
  for(let i = 1; i < nums.length; i++) {
    pre_rfirst = Math.max(rob_robfirst, nrob_robfirst);
    pre_nrfrst = Math.max(rob_nrobfirst, nrob_nrobfirst);
    
    rob_robfirst = nrob_robfirst + nums[i];
    nrob_robfirst = pre_rfirst;

    rob_nrobfirst = nrob_nrobfirst + nums[i];
    nrob_nrobfirst = pre_nrfrst;
  }
  
  return Math.max(nrob_robfirst, rob_nrobfirst);
};