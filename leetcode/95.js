/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if(n === 0) {
    return []
  }
  let dp = {}
  return _generateTrees(1, n, dp);
};

function _generateTrees(min, max, dp) {
  if(min > max) {
    return [null];
  }
  
  else if(min === max) {
    return [new TreeNode(min)]
  }
  
  if(dp[`${min}_${max}`]) {
    return dp[`${min}_${max}`];
  }
  
  let result = [];
  
  for(let i = min; i <= max; i++) {
    let left = _generateTrees(min, i-1, dp);
    let right = _generateTrees(i+1, max, dp);
    for(let j=0; j<left.length; j++) {
      for(let k=0; k<right.length; k++){
        let node = new TreeNode(i);
        node.left = left[j];
        node.right = right[k];
        result.push(node);
      }
    }
  }
  dp[`${min}_${max}`] = result;
  return dp[`${min}_${max}`];
}

function TreeNode(val) {
  this.val = val;
  this.right = null;
  this.left = null;
}

console.log(generateTrees(5));