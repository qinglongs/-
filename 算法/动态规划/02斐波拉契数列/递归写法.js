/**
 * 最优子结构
 * 重叠子问题
 * 状态转移公式  动态规划的三要素
 * 1,n=1,2
 * fn(n-1)+f(n-2),n>2,
 * 1 1 2 3 5 8 13 21 34 55 89 144
 */

function fib(num) {
  if (num <= 2) return 1;

  return fib(num - 1) + fib(num - 2);
}

console.time();
console.log(fib(20));
console.timeEnd();
