const dp = [];

function fib(num) {
  // 初始化base case
  dp[1] = 1;
  dp[2] = 1;

  // 进行状态转移 穷举所有值
  for (let i = 3; i <= num; i++) {
    if (dp[num]) break;
    // 求最值
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[num];
}

console.time();
console.log(fib(100));
console.timeEnd();
