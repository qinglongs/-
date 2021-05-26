const rightSideView = (node) => {
  const result = [];

  let parent = node;
  let current = node;

  while (current) {
    // 取出当前遍历的节点
    parent = current;

    // 加入节点
    result.push(current.value);

    // 继续遍历右节点
    current = current.right;

    // 如果右节点为空，则加入左节点
    if (!current && parent.left) {
      current = parent.left;
    }
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
    value: 20,
    left: { value: 12, left: null, right: null },
    right: { value: 12, left: null, right: null },
  },
};

console.log(rightSideView(node));
