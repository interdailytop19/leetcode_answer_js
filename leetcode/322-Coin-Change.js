/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// dp
// https://coordinate.wang/index.php/archives/2251/
var coinChange = function(coins, amount) {
  let dp = new Array(amount+1).fill(amount+1);
  dp[0] = 0;
  for(let coin of coins) {
    for(let i = coin; i<=amount; i++) {
      dp[i] = Math.min(dp[i], 1+dp[i-coin]);
    }
  }
  return dp[dp.length-1] > amount ? -1 : dp[dp.length-1]
};