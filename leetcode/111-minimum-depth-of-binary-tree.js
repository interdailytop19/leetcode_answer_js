// time O(n)
// space O(n)

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(node) {
  if(!node) {
    return 0;
  }
  
  if(!node.left && !node.right) {
    return 1;
  }
  
  let left = minDepth(node.left);
  let right = minDepth(node.right);
  
  if(!node.left) {
    return 1 + right;
  }
  
  if(!node.right) {
    return 1 + left;
  }
  
  return Math.min(left, right) + 1;
};