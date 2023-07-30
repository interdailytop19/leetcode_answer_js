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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  let result = [];
  let curr = []
  _pathSum(result, root, sum, curr);
  return result;
};

var _pathSum = function(result, node, sum, curr) {
  if(!node) {
    return;
  }
  if(!node.left && !node.right) {
    if(node.val === sum) {
      // need to create a copy of curr, or curr.push and pop at line: 36, 39 
      // will change the array in result;
      let array_copy = [...curr]
      array_copy.push(node.val);
      result.push(array_copy);
    }
    return;
  }

  curr.push(node.val);
  _pathSum(result, node.left, sum - node.val, curr);
  _pathSum(result, node.right, sum - node.val, curr);
  curr.pop();
};