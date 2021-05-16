// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2gy9m/

function removeDuplicates(nums) {
  let i = 0;
  let j = 1;
  while (j < nums.length) {
    if (nums[i] !== nums[j]) {
      i = i + 1;
      nums[i] = nums[j];
    }

    j++;
  }
  return i + 1;
}
console.log(
  removeDuplicates([
    1,
    2,
    2,
    3,
    3,
    3,
    4,
    4,
    4,
    5,
    5,
    5,
    45,
    45,
  ])
);
