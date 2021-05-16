const grid = [
  [1, 3, 5],
  [4, 2, 5],
  [6, 8, 6],
];

const dp = [[0, 0]];

function lminPath(grid) {
  // 初始化base case
  dp[0] = [0, 0];

  // 穷举所有值
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // 状态转移

      console.log(grid[i][j]);
    }
  }
}

lminPath(grid);
