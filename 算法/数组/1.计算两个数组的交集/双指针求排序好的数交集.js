const a1 = new Array(1000000).fill(0).map((i, index) => index + 1);

const a2 = new Array(1000000).fill(0).map((i, index) => index + 2);

const intersect = (arr1, arr2) => {
  let j = 0;
  let k = 0;
  const arr = arr1.length < arr2.elngth ? arr2 : arr1;

  for (let i; i < arr.length; ) {
    if (arr[i] < arr[j]) {
      i++;
    }
    if (arr[i] > arr[j]) {
      j++;
    }
    if (arr[i] === arr[j]) {
      arr[k] = arr[i];
      k++;
    }
  }

  return arr;
};

console.time();
intersect(a1, a2);
console.timeEnd();
