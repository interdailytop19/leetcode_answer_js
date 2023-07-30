// time O(2^h)
// space O(2^h)

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
 * @return {string[][]}
 */
var printTree = function(root) {
  let height = getHeight(root);
  let wide = (2**height) - 1;
  let result = new Array(height);
  for(let i = 0; i < result.length; i++) {
    result[i] = new Array(wide).fill('');
  }
  fill(result, root, 0, 0, wide - 1);
  return result;
};
  
function getHeight(node) {
  if(!node) {
    return 0;
  }
  return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
}
function fill(result, node, height, left, right) {
  if(!node) {
    return;
  }
  let mid = Math.floor((left + right) / 2);
  result[height][mid] = node.val.toString();
  fill(result, node.left, height+1, left, mid-1);
  fill(result, node.right, height+1, mid+1, right);
}