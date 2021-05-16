const a1 = new Array(1000000).fill(0).map((i, index) => index + 1);

const a2 = new Array(1000000).fill(0).map((i, index) => index + 2);

function intersect(arr1, arr2) {
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr.push(arr1[i]);
      }
    }
  }
  return arr;
}

console.time();
intersect(a1, a2);
console.timeEnd();
