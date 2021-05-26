// 利用队列实现二叉树的层序遍历

const levelOrder = (root) => {
  if (!root) return;

  // 队列
  const queue = [root];

  // 遍历结果
  const result = [];

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      // 出队
      const node = queue.shift();

      node.next = queue[queue.length - 1] || null;
      // 左节点加入队列
      if (node.left) queue.push(node.left);
      // 右节点加入队列
      if (node.right) queue.push(node.right);
    }
  }

  return node;
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

console.log(JSON.stringify(levelOrder(node)));
