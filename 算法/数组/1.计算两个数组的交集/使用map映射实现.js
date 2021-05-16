function intersect(arr1, arr2) {
  const map = new Map();
  const len1 = arr1.length;
  const len2 = arr2.length;

  for (let i = 0; i < len1; i++) {
    map.set(arr1[i], 1);
  }

  for (let i = 0; i < len2; i++) {
    if (map.get(arr2[i])) {
      map.set(arr2[i], map.get(arr2[i]) + 1);
    }
  }

  return [...map.keys()];
}

const a1 = new Array(1000000).fill(0).map((i, index) => index + 1);

const a2 = new Array(1000000).fill(0).map((i, index) => index + 2);

console.time();
intersect(a1, a2);
console.timeEnd();
