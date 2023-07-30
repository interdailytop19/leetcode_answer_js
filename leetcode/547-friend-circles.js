// time O(n^2)
// space O(n)
// https://youtu.be/AkqL5QPAMxk

/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  if(!M.length) {
    return 0;
  }
  let result = 0;
  for(let i = 0; i < M.length; i++) {
    result += dfs(M, i);
  }
  return result;
};

function dfs(M, i) {
  if(M[i][i] === 0) {
    return 0 ;
  }
  M[i][i] = 0;
  for(let j = 0; j < M[0].length; j++) {
    if(M[i][j] === 1) {
      M[i][j] = 0;
      M[j][i] = 0;
      dfs(M, j);
    }
  }
  return 1;
}