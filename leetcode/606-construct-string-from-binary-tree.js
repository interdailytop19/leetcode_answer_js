// time O(logn)
// space O(logn)

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
  if(!t) {
    return '';
  }
  let root_string = t.val.toString();
  let left_string = tree2str(t.left);
  let right_string = tree2str(t.right);
  
  if(left_string === '' && right_string === '') {
    return root_string;
  }
  if(left_string !== '' && right_string === '') {
    return `${root_string}(${left_string})`;
  }
  return `${root_string}(${left_string})(${right_string})`;
};