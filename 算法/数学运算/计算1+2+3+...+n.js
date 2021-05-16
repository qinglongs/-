function sum(n) {
  return n && n + sum(n - 1);
}

console.log(sum(100));

function sum1(n) {
  return (Math.pow(n, 2) + n) >> 1;
}

console.log(sum1(100));
