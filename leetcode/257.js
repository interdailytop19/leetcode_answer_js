/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if(!root) {
    return [];
  }
  return _binary(root);
};

function _binary(node) {
  if(node.left === null && node.right === null) {
    return [String(node.val)];
  }
  
  let result = [];
  if(node.left !== null) {
    let left = _binary(node.left);
    for(let i = 0; i < left.length; i++) {
      result.push(node.val + '->' + left[i]);
    }
  }
  
  if(node.right !== null) {
    let right = _binary(node.right);
    for(let i = 0; i < right.length; i++) {
      result.push(node.val + '->' + right[i]);
    }
  }
  return result;
}