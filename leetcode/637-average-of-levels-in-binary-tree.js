// time O(n)
// space O(n)

// DFS
var averageOfLevels = function(root) {
  let result = [];
  _sum(root, result, 0)
  console.log(result)
  return result.map(obj => obj.sum / obj.count);
};

function _sum(node, result, depth) {
  if(!node) {
    return;
  }
  
  if(result[depth] === undefined) {
    result[depth] = { sum: node.val, count: 1 }
  } else {
    result[depth].sum += node.val;
    result[depth].count += 1;
  }
  
  _sum(node.left, result, depth+1);
  _sum(node.right, result, depth+1);
}


// BFS
var averageOfLevels = function(root) {
  let result = []
  let curr = [];
  let next = []
  curr.push(root);
  let sum = 0;
  
  for(let i = 0; i < curr.length; i++) {
    sum += curr[i].val;
    if(curr[i].left) {
      next.push(curr[i].left);
    }
    if(curr[i].right) {
      next.push(curr[i].right);
    }
    
    if(i == curr.length-1) {
      result.push(sum / curr.length);
      curr = next;
      next = [];
      sum = 0;
      i = -1;
    }
  }
  return result;
};
