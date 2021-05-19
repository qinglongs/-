const dp = {};
/**
 * 动态规划算法
 */

function coinChange(coins, amount) {
  // 定义base case
  if (amount === 0) return 0;
  if (amount < 0) return -1;

  if (couns.includes(amount)) return 1;

  if (dp[amount]) return dp[amount];

  let min = Infinity;

  // 遍历所值
  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];

    // 计算子问题的结果
    const subAmount = coinChange(coins, amount - coin);

    // 如果是-1则跳出循环
    if (subAmount === -1) continue;

    min = 1 + Math.min(min, subAmount);
  }
  dp[amount] = min === Infinity ? -1 : min;

  return min === Infinity ? -1 : min;
}

console.log(coinChange([3, 2], 10));


// dp[amount] = min(coinChange(coins,amount-coins[i]))




/**
 * 代码执行模拟
 * -2
 * coinChange([5,2],8); ==> 5 -2
 * coinChange([5,2],6); ==> 4 -2
 * coinChange([5,2],4); ==> 3 -2
 * coinChange([5,2],2); ==> 2 -2
 * coinChange([5,2],0); ==> 1 -2
 *
 * -3
 * coinChange([5,2],7); ==> 4  -3
 * coinChange([5,2],5); ==> 3  -2
 * coinChange([5,2],2); ==> 2  -3
 *
 * -2
 * coinChange([5,2],8); ==> 3  -2
 * coinChange([5,2],6); ==> 2  -3
 * coinChange([5,2],3); ==> 1  -3
 * coinChange([5,2],0); ==> 0  -3
 *
 *
 */
