/*
 * Time O(n)
 * Space O(logN)
 */

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
var sumOfLeftLeaves = function(root) {
  return _sum(root);
};

function _sum(node) {
  if(!node) {
    return 0;
  }
  let sum = 0;
  if(node.left && !node.left.left && !node.left.right) {
    sum += node.left.val;
  }
  return sum += _sum(node.left) + _sum(node.right);
}