/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  if (!root) return;
  // 指针
  let current = 0;
  const queue = [root[current]];
  const result = [];

  while (queue.length && root[current] !== undefined) {
    const size = queue.length;
    const temp = [];
    for (let i = 0; i < size; i++) {
      // 第一个元素出队
      const node = queue.shift();

      // 处理中节点
      temp.push(node);

      // 处理左节点
      if (root[2 * current + 1])
        queue.push(root[2 * current + 1]);

      // 处理右节点
      if (root[2 * current + 2])
        queue.push(root[2 * current + 2]);

      // 每次出队指针就加1
      current++;
    }

    if (temp.length) {
      result.push(temp);
    }
  }

  return result;
};

console.log(levelOrder([3, 9, 20, null, null, 15, 7]));

const node = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
};
