const arr = [3, 2, 5, 6, 7, 9, 4, 10, 8, 20, 11, 15];
const len = arr.length;

let done = false;

for (let i = 0; i < len; i++) {
  done = true;

  for (let j = 0; j < len - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      const temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
      done = false;
    }
  }

  if (done) {
    break;
  }
}

console.log(arr);
