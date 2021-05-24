// 前序遍历 中左右
const preOrder = (node) => {
  // 用栈来存储
  const stack = [];
  const arr = [];

  if (!node) return;

  stack.push(node);

  while (stack.length) {
    const node = stack.pop();

    if (node) {
      arr.push(node.data);
      stack.push(node.right);
      stack.push(node.left);
    }
  }

  return arr;
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

console.log(preOrder(node));
