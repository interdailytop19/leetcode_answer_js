/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */


// https://www.youtube.com/watch?v=SImXsBQQCEE
// letcode 304
// binary search

var maxSideLength = function(mat, threshold) {
  let result = 0;
  const numMat = new NumMatrix(mat);
  const m = mat.length;
  const n = mat[0].length;
  
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      let left = 0;
      let right = Math.min(m-i-1, n-j-1);
      let mid = Math.floor((left + right) /2);
      
      while(left <= right) {
        mid = Math.floor((left + right) /2);
        const sumRegion = numMat.sumRegion(i, j, i+mid, j+mid);
        if(sumRegion > threshold) {
           right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
      // left = index in dp sums of the upper_bound
      // left + 1 = the length of square upper_bound
      // left + 1 - 1 = one less of the upper_bound
      // upper_bound mean sum > threshold
      // one less mean maxmium <= of threshold
      result = Math.max(result, left)
    }
  }

  return result;
};

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
