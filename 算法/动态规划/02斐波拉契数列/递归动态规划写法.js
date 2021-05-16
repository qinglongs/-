//  1 1 2 3 5 8 13 21

const obj = {};

function fib(num) {
  // 初始化base case
  if (num <= 2) return 1;

  if (obj[num]) return obj[num];

  // 进行状态转移并且  '求最值'
  obj[num] = fib(num - 1) + fib(num - 2);

  return obj[num];
}

console.time();
console.log(fib(100));
console.timeEnd();
