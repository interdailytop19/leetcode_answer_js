/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

// greedy
// O(nlogn)
// https://youtu.be/3kJpg7Smc3E

var findContentChildren = function(g, s) {
  g.sort((a, b) => b - a);
  s.sort((a, b) => a - b);
  
  let result = 0;
  for(let i = 0; i < s.length; i++) {
    if(s[i] >= g[g.length-1]) {
      result += 1;
      g.pop();
    }
  }
  return result;
};