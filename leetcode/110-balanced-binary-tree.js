// time O(nlog)
// O(n) to find the height, O(log) to recusively find isBalance
// space O(n)
// https://youtu.be/C75oWiy0bWM

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
 * @return {boolean}
 */
var isBalanced = function(node) {
  if(!node) {
    return true;
  }
  let left_height = _getHeight(node.left);
  let right_height = _getHeight(node.right);
  
  return Math.abs(left_height - right_height) <= 1 && isBalanced(node.left) && isBalanced(node.right)
};

function _getHeight(node) {
  if(!node) {
    return 0;
  }
  
  if(!node.left && !node.right) {
    return 1;
  }
  
  return Math.max(_getHeight(node.left), _getHeight(node.right)) + 1;
}