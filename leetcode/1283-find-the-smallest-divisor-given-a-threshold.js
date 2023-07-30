/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */

// https://www.youtube.com/watch?v=ZBOGrSS_xiM&list=PLLuMmzMTgVK74vqU7Ukaf70a382dzF3Uo&index=2
var smallestDivisor = function(nums, threshold) {
  let result;
  let left = 1;
  let right = 10**6;
  let mid = Math.floor((left + right) / 2);
  
  while(left <= right) {
    mid = Math.floor((left + right) / 2);
    if(nums.reduce((acc, curr) => acc + Math.ceil(curr/mid), 0) <= threshold) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  
  if(left >= 1 && left <= 10**6) {
    return left;
  } else {
    return -1
  }
};