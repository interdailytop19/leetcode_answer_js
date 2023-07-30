/**
 * @param {number[][]} matrix
 */

// https://youtu.be/MSNSqU3BnXk


var NumMatrix = function(matrix) {
  if(matrix.length === 0) {
    return;
  }
  this.m = matrix.length;
  this.n = matrix[0].length;
  this.sums = new Array(this.m + 1);
  for(let i = 0; i < this.sums.length; i++) {
    this.sums[i] = new Array(this.n + 1).fill(0);
  }
  
  for(let i = 1; i <= this.m; i++) {
    for(let j = 1; j <= this.n; j++) {
      this.sums[i][j] = matrix[i-1][j-1] +
                    this.sums[i-1][j] +
                    this.sums[i][j-1] -
                    this.sums[i-1][j-1]
    }
  }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  return this.sums[row2+1][col2+1] -
          this.sums[row2+1][col1] -
          this.sums[row1][col2+1] +
          this.sums[row1][col1];
  
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */