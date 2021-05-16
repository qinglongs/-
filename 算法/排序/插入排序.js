const arr = [5, 3, 4, 2, 6, 1, 100, 20, 30, 50, 40];

const len = arr.length;

const insertSort = (arr) => {
  for (let i = 0; i < len; i++) {
    let target = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[target]) {
        let temp = arr[target];
        arr[target] = arr[j];
        arr[j] = temp;
        target = j;
      }
    }
  }

  return arr;
};

console.log(arr);
