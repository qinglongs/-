const arr = [3, 2, 5, 6, 7, 9, 4, 10, 8, 20, 11, 15, 1];

const len = arr.length;

for (let i = 0; i < len - 1; i++) {
  let lowIndex = i;

  for (let j = i + 1; j < len; j++) {
    if (arr[j] < arr[lowIndex]) {
      lowIndex = j;
    }
  }

  let temp = arr[i];
  arr[i] = arr[lowIndex];
  arr[lowIndex] = temp;
}

console.log(arr);
