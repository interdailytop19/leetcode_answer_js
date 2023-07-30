
// init O(nlogn)
// update O(logn)
// query O(logn)
// space O(n)
// https://youtu.be/WbafSgetDDk

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums;
  this.fenwickTree = new FenwickTree(nums);
  for(let i=0; i < nums.length;i++) {
    this.fenwickTree.update(i+1, nums[i])
  }
};

/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
  this.fenwickTree.update(i + 1, val - this.nums[i]);
  this.nums[i] = val;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return this.fenwickTree.query(j + 1) - this.fenwickTree.query(i);
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */

function FenwickTree(nums) {
  this._sums = new Array(nums.length + 1).fill(0);
  this.lowbit = function (num) {
    return num & (-num);
  }
  this.update = function(i, delta) {
    while(i < this._sums.length) {
      this._sums[i] += delta;
      i += this.lowbit(i);
    }
  }
  this.query = function(i) {
    let sum = 0;
    while(i > 0) {
      sum += this._sums[i];
      i -= this.lowbit(i)
    }
    return sum
  }
}