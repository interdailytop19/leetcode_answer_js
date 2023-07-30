// bottom up
var numTrees = function(n) {
  let dp = new Array(n+1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for(let i = 2; i <= n; i++) {
    for(let j = 0; j < i; j++) {
      dp[i] += (dp[j]*dp[i-j-1])
    }
  }
  
  return dp[n];
};

// // top down
// var numTrees = function(n) {
//   let dp = new Array(n+1).fill(0);
//   dp[0] = 1;
//   dp[1] = 1;
  
//   return _numTrees(n, dp);
// };

// function _numTrees(n, dp) {
//   if(n <= 1) {
//     return 1;
//   }
  
//   if(dp[n]) {
//     return dp[n];
//   }
  
//   for(let i=1; i<n+1; i++) {
//     dp[n] += _numTrees(i-1, dp)*_numTrees(n-i, dp)
//   }
//   return dp[n]
// }

numTrees(4)