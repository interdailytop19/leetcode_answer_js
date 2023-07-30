// time O(m * n)
// space O(m * n)
// https://youtu.be/XSmgFKe-XYU

/**
 * @param {character[][]} grid
 * @return {number}
 */

// // DFS
// var numIslands = function(grid) {
//   if(grid.length <= 0) {
//     return 0;
//   }
//   let m = grid.length;
//   let n = grid[0].length;
//   let result = 0;
//   for(let i = 0; i < m; i++) {
//     for(let j = 0; j < n; j++) {
//       if(grid[i][j] === '1') {
//         result += 1;
//         dfs(grid, j, i, m, n)
//       }
//     }
//   }
//   return result;
// };

// function dfs(grid, j, i, m, n) {
//   if(i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === '0') {
//     return;
//   }
//   grid[i][j] = '0';
//   dfs(grid, j + 1, i, m, n);
//   dfs(grid, j - 1, i, m, n);
//   dfs(grid, j, i + 1, m, n);
//   dfs(grid, j, i - 1, m, n);
// }

// bfs
var numIslands = function(grid) {
  if(grid.length <= 0) {
    return 0;
  }
  let m = grid.length;
  let n = grid[0].length;
  let result = 0;
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(grid[i][j] === '1') {
        result += 1;
        bfs(grid, i, j, m, n);
      }
    }
  }
  return result;
};


function bfs(grid, i, j, m, n) {
  let queue = [[i, j]];
  let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  while(queue.length) {
    let curr = queue.pop();
    grid[curr[0]][curr[1]] = '0'
    
    for(let direction of directions) {
      let x = curr[0] + direction[0];
      let y = curr[1] + direction[1];
      
      if(x >= 0 && y >= 0 && x < m && y < n && grid[x][y] === '1') {
        queue.push([x, y]);
      }
    }
  }
}