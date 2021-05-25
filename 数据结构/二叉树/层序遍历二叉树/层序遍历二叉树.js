// 利用队列实现二叉树的层序遍历

const levelOrder = (root) => {
  if (!root) return;

  const queue = [root];
  const result = [];

  while (queue.length) {
    const size = queue.length;
    // 存储对应层级的节点
    const vec = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      vec.push(node.data);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(vec);
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

console.log(levelOrder(node));
