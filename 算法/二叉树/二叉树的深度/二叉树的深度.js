const maxDepth = (root) => {
  if (!root) return 0;
  return Math.max(
    1 + maxDepth(root.left),
    1 + maxDepth(root.right)
  );
};

// 二叉树对象
const node = {
  data: 10,
  left: {
    data: 9,

    left: { data: 7, left: null, right: null },
    right: { data: 8, left: null, right: null },
  },
  right: {
    data: 11,
    left: { data: 10, left: null, right: null },
    right: { data: 12, left: null, right: null },
  },
};

console.log(maxDepth(node));
