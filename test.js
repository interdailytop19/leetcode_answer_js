// time O(n^2)
// space O(n)
// https://youtu.be/AkqL5QPAMxk

/**
 * @param {number[][]} M
 * @return {number}
 */
// dfs
// var findCircleNum = function(M) {
//   if(!M.length) {
//     return 0;
//   }
//   let result = 0;
//   for(let i = 0; i < M.length; i++) {
//     result += dfs(M, i);
//   }
//   return result;
// };

// function dfs(M, i) {
//   if(M[i][i] === 0) {
//     return 0 ;
//   }
//   M[i][i] = 0;
//   for(let j = 0; j < M[0].length; j++) {
//     if(M[i][j] === 1) {
//       M[i][j] = 0;
//       M[j][i] = 0;
//       dfs(M, j);
//     }
//   }
//   return 1;
// }

// unionFind
var findCircleNum = function(M) {
  if(!M.length) {
    return 0;
  }
  let n = M.length;
  const unionFind = new UnionFind(n)
  for(let i = 0; i < n; i++) {
    for(let j = i + 1; j < n; j++) {
      if(M[i][j] === 1) {
        unionFind.find(i, j)
      }
    }
  }
  let circles = [];
  for(let i = 0; i < n; i++) {
    circles.push(unionFind.find(i))
  }
  return circles.length;
};

function UnionFind(n) {
  this.parents = new Array(n+1);
  this.ranks = new Array(n+1).fill(0);

  for(let i = 0; i < n.length; i++) {
    this.parents = i;
  }
}

UnionFind.prototype.union = function(x, y) {
  let px = this.find(x);
  let py = this.find(y);
  
  if(this.ranks[px] > this.ranks[py]) {
    this.parents[py] = px;
  }
  if(this.ranks[px] < this.ranks[py]) {
    this.parents[px] = py;
  }
  if(this.ranks[px] == this.ranks[py]) {
    this.parents[py] = px;
    this.ranks[px] += 1
  }
}

UnionFind.prototype.find = function(x) {
  if(x != this.parents[x]) {
    this.parents[x] = this.find(this.parents[x]);
  }
  return this.parents[x];
}

findCircleNum([[1,1,0],[1,1,0],[0,0,1]])