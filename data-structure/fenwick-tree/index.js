// time
// update O(logn)
// query O(logn)
// space O(n)

function FenwickTree(nums) {
  this.sums = new Array(nums.length+1).fill(0);
}

FenwickTree.prototype.update = function(idx, delta) {
  while(idx < this.sums.length) {
    this.sums[idx] += delta;
    idx += this.lowbit(idx);
  }
}

FenwickTree.prototype.query = function(idx) {
  let result = 0;
  while(idx > 0) {
    result += this.sums[idx];
    idx -= this.lowbit(idx);
  }
  return result;
}

FenwickTree.prototype.lowbit = function(idx) {
  return idx & (-idx);
}