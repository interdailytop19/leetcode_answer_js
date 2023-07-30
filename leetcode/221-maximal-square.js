/**
 * @param {character[][]} matrix
 * @return {number}
 */

// O(n**3)
// https://youtu.be/vkFUB--OYy0

var maximalSquare = function(matrix) {
  if(matrix.length <= 0) {
    return 0;
  }
  
  let m = matrix.length;
  let n = matrix[0].length;
  
  let sum = new Array(m + 1);
  for(let i = 0; i < sum.length; i++) {
    sum[i] = new Array(n + 1).fill(0);
  }
  
  for(let i = 1; i <= m; i++) {
    for(let j = 1; j <= n; j++) {
      sum[i][j] = parseInt(matrix[i-1][j-1], 10) +
                  sum[i-1][j] +
                  sum[i][j-1] -
                  sum[i-1][j-1]   
    }
  }
  console.log(sum)
  let result = 0;
  for(let i = 1; i <= m; i++) {
    for(let j = 1; j <= n; j++) {
      for(let k = Math.min(m - i + 1, n - j + 1); k > 0; k--) {
        let sum1 = sum[i+k-1][j+k-1] -
                  sum[i+k-1][j-1] -
                  sum[i-1][j+k-1] +
                  sum[i-1][j-1]
        
        if(sum1 === k*k) {
          result = Math.max(result, sum1);
          break;
        }
      }
    }
  }
  return result;
};