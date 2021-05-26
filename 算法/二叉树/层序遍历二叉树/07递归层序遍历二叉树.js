const levelOrder = (root) => {
  if (!root) return;
  const result = [];
  const queue = [root];

  const helper = () => {
    const size = queue.length;
    const temp = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      temp.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (queue.length) {
      helper();
    }

    result.unshift(temp);
    return result;
  };

  return helper();
};

// 二叉树对象
const node = {
  value: 1,
  left: {
    value: 2,
    left: { value: 4, left: null, right: null },
    right: { value: 5, left: null, right: null },
  },
  right: {
    value: 3,
    left: { value: 6, left: null, right: null },
    right: { value: 7, left: null, right: null },
  },
};

console.log(levelOrder(node));
