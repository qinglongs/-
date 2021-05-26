const findMaxInOrder = (root) => {
  if (!root) return [];

  // 定义队列
  const queue = [root];
  // 村粗遍历结果
  const result = [];

  // 执行队列
  while (queue.length) {
    // 队列长度
    const size = queue.length;
    const temp = [];
    let max = -Infinity;

    // 将当前队列中的元素依次出列
    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      // 处理中节点
      temp.push(node.value);

      // 处理左节点
      if (node.left) queue.push(node.left);
      // 处理右节点
      if (node.right) queue.push(node.right);
    }

    temp.forEach((item) => (max = Math.max(max, item)));

    result.push(max);
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

console.log(findMaxInOrder(node));
