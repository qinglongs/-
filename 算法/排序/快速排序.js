/**
 * @method 快速排序算法
 * @param {*} arr 数组
 */
const quickSort = (arr) => {
  if (arr.length < 2) return arr;

  // 基准值位置
  const pivotIndex = 0;

  // 取出基准值
  const pivot = arr.splice(pivotIndex, 1)[0];

  // 小于基准值的数组
  const left = [];

  // 大于基准值的数组
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      // 小于基准值
      left.push(arr[i]);
    } else {
      // 大于基准值
      right.push(arr[i]);
    }
  }

  // 递归调用
  return quickSort(left).concat([pivot], quickSort(right));
};

const arr = [3, 2, 5, 6, 7, 9, 4, 10, 8, 20, 11, 15];

console.log(quickSort(arr));
