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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if(!root) {
    return false;
  }
  if(!root.left && !root.right) {
    return root.val === sum
  }
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
};