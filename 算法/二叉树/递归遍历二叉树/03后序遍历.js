const postOrder = (root) => {
  if (!root) return [];
  const result = [];

  const helper = (node) => {
    if (node) {
      helper(node.left);
      helper(node.right);
      result.push(node.value);
    }
  };

  helper(root);

  return result;
};

// 二叉树对象
const node = {
  value: 10,
  left: {
    value: 9,
    left: { value: 7, left: null, right: null },
    right: { value: 8, left: null, right: null },
  },
  right: {
    value: 11,
    left: { value: 10, left: null, right: null },
    right: { value: 12, left: null, right: null },
  },
};

console.log(postOrder(node));
