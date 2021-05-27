const search = (nums, target) => {
  if (!nums.length) return -1;
  let left = 0;
  let right = nums.length;

  // [left,middle) [mddle+1,right);
  while (left < right) {
    const middle = ((left + right) / 2) >> 0;

    if (nums[middle] === target) {
      right = middle;
    }

    if (nums[middle] < target) {
      left = middle + 1;
    }

    if (nums[middle] > target) {
      right = middle;
    }
  }

  return nums[left] === target ? left : -1;
};

console.log(search([-2, 0, 1, 2, 2, 2, 3, 4], 2));
