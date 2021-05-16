// 备忘录
const dp = {};
/**
 * 动态规划算法
 */
// function coinChange(coins, amount) {
//   // 定义base case
//   if (amount === 0) return 0;
//   if (amount < 0) return -1;

//   if (dp[amount]) return dp[amount];

//   let min = Infinity;

//   // 遍历所值
//   for (let i = 0; i < coins.length; i++) {
//     const coin = coins[i];

//     // 计算子问题的结果
//     const subAmount = coinChange(coins, amount - coin);

//     if (subAmount === -1) continue;

//     min = 1 + Math.min(min, subAmount);
//   }

//   dp[amount] = min === Infinity ? -1 : min;

//   return min === Infinity ? -1 : min;
// }

// // console.log(coinChange([1, 2, 5], 23));
// coinChange([1, 2, 5], 23);

// [1,2,5] 20

function coinChange(coins, amount) {
  // base case
  if ((amount = 0)) return 0;

  if (amount < 0) return -1;

  if (dp[amount]) return dp[amount];
  console.log(dp);

  for (let coin of coins) {
    const subCoin = coinChange(coins, amount - coin);

    if (subCoin < 0) continue;

    dp[amount] = 1 + Math.min(min, subCoin);
  }

  return dp[amount];
}

console.log(coinChange([1, 2, 5], 10));
