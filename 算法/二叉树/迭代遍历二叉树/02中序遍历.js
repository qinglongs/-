// 左中右
const inOrder = (node) => {
  if (!node) return;

  const stack = [];
  const result = [];

  let current = node;

  while (current || stack.length) {
    if (current) {
      stack.push(current);
      current = current.left; //找到最底层的左节点
    } else {
      current = stack.pop();
      // 处理中节点
      result.push(current.data);
      // 处理右节点
      current = current.right;
    }
  }

  return result;
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

console.log(inOrder(node));
