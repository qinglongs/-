const search = (nums, target) => {
  if (!nums.length) return -1;
  const left = 0;
  const right = nums.length - 1;

  // [left,right]
  while (left < right) {
    const middle = ((right + left) / 2) >> 0;

    if (target[middle] === target) {
      left = middle;
    }

    if (target[middle] > target) {
      right = middle - 1;
    }

    if (target[middle] < target) {
      left = middle;
    }
  }

  return right;
};

console.log(search([-2, 0, 1, 2, 2, 2, 3, 4], 2));
