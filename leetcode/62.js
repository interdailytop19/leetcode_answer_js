/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// dp
// https://www.youtube.com/watch?v=O9GhDaafmmo
var uniquePaths = function(m, n) {
  let dp = new Array(n);
  for(let i=0;i<dp.length; i++) {
    if(i===0) {
      dp[i] = new Array(m).fill(1);
      continue;
    }
    dp[i] = new Array(m);
    dp[i][0] = 1;
  }

  for(let i=1; i<dp.length; i++) {
    for(let j=1; j<dp[i].length; j++) {
      dp[i][j] = dp[i-1][j] + dp[i][j-1];
    }
  }
  return dp[n-1][m-1]
};