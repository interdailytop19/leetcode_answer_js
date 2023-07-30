function completeKnapsack(items, target_weight) {
  let dp = new Array(target_weight).fill(target_weight+1);
  for(let item of items) {
    for(let i=0; i<=target_weight; i++) {
      if(i==0) {
        dp[i] = 0;
        continue;
      }
      dp[i] = Math.max(dp[i], dp[target_weight-item.wegiht]+item.profit);
    }
  }
  return dp[dp.length-1];
}