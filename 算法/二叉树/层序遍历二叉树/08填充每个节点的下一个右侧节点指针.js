const connect = (root) => {
  if (!root) return;
  const queue = [root];

  const helper = (node) => {
    const temp = [];
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      temp.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    temp.forEach((item, index) => {
      item.next = temp[index + 1] || null;
    });

    if (queue.length) {
      helper();
    }

    return node;
  };

  return helper(root);
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

console.log(JSON.stringify(connect(node)));
