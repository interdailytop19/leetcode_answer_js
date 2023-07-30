/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let dp = [];
  dp[0] = 1;
  dp[1] = 1;
  
  for(let i=2; i<=n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }
  return dp[n];
};

// space optimize
var climbStairs = function(n) {
  let curr = 1;
  let prev = 1
  
  for(let i=2; i<=n; i++) {
    curr = curr + prev;
    prev = curr - prev;
  }
  return curr;
};