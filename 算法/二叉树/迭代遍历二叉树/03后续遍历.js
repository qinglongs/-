// 左右中
const postorder = (node) => {
  const stack = [];
  const result = [];

  stack.push(node);

  while (stack.length) {
    const node = stack.pop();

    // 处理中节点
    result.push(node.data);

    // 处理左节点
    if (node.left) {
      stack.push(node.left);
    }

    // 处理右节点
    if (node.right) {
      stack.push(node.right);
    }
  }

  return result.reverse();
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

console.log(postorder(node));
