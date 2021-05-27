/**
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 */
const search = (nums, target) => {
  if (!nums || !nums.length) return;
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const middle = ((low + high) / 2) >> 0;

    if (nums[middle] === target) return middle;

    if (nums[middle] > target) {
      high = middle - 1;
    }

    if (nums[middle] < target) {
      low = middle + 1;
    }
  }

  return -1;
};

console.log(search([1, 2, 3, 4, 5, 12], 12));
