function zeroOneKnapsack(items, target_weight) {
  let pre = new Array(target_weight).fill(0);
  let curr = new Array(target_weight).fill(0);

  for(let item of items) {
    for(let i=0; i<= target_weight; i++) {
      if(i===0) {
        curr[i] = 0;
        continue;
      }
      curr[i] = Math.max(pre[i], pre[target_weight-item.weight]+item.profit);
    }
  }
  return curr[curr.length-1];
}