const levelOrder = (root) => {
  if (!root) return [];

  const queue = [root];
  const result = [];

  while (queue.length) {
    // 队列的大小
    const size = queue.length;

    // 存储每层遍历的数据
    const temp = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      temp.push(node.value);

      // 结构
      const { children } = node;

      // 遍历子节点，加入到队列
      if (children && children.length) {
        for (let i = 0; i < children.length; i++) {
          queue.push(children[i]);
        }
      }
    }

    result.push(temp);
  }

  return result;
};

const node = {
  value: 10,
  children: [
    { value: 11, children: [{ value: 18, children: [] }] },
    { value: 12, children: null },
    { value: 13, children: null },
    {
      value: 14,
      children: [{ value: 15, children: null }],
    },
    {
      value: 16,
      children: [{ value: 17, children: null }],
    },
  ],
};

console.log(levelOrder(node));
