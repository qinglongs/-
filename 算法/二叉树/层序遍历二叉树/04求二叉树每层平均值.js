const averageOfLevels = (root) => {
  if (!root) return 0;
  const queue = [root];
  const result = [];

  while (queue.length) {
    let temp = 0;
    let num = 0;
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      // 处理中节点
      temp += node.value;
      num++;

      // 处理左节点
      if (node.left) queue.push(node.left);

      // 处理右节点
      if (node.right) queue.push(node.right);
    }

    result.push(temp / num);
  }

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

console.log(averageOfLevels(node));
