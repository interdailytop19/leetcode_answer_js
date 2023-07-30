/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

// The key to understand this question is "some number of flip operations." We don't always have to swap the left and right child subtrees. So we have to consider two situations in our return statement:

// (1) when the left and right subtrees are not flipped: check if the left and right of both trees are the same
// (2) OR, when the left and right subtrees are flipped: check if the left and right of both trees are flipped
const flipEquiv = function(root1, root2) {
  if (!root1 && !root2) return true; 
  if (!root1 || !root2 || root1.val !== root2.val) return false; 
  return flipEquiv(root1.left, root2.left) && flipEquiv(root1.right,root2.right) || flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left);
};