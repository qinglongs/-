// 二叉树由节点组成，所以我们要定义的第一个对象就是Node

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  show() {
    return this.data;
  }
}

/**
 * Node对象即保存数据，也保存和其他节点的链接，show()方法用来显示保存在节点中的数据
 *
 * 现在可以创建一个类，用来表示二叉查找树。我们让类只包含一个数据成员：一个表示二叉树根节点的
 * Node对象。
 */

class BST {
  constructor() {
    this.root = null;
  }

  /**
   * @method 插入节点
   * @param {number} data 需要插入的值
   *
   * 1.创建一个Node对象.
   * 2.root为空,直接给root赋值
   * 3.root不为空,与root根节点做比较,小于根节点放左边大于根节点放右边
   */
  insert(data) {
    // 创建一个节点
    const n = new Node(data, null, null);

    if (!this.root) {
      this.root = n;
    } else {
      let current = this.root;
      let parent;
      while (true) {
        parent = current;
        if (data < current.data) {
          current = current.left;
          // 当左节点为空时插入
          if (current === null) {
            parent.left = n;
            break;
          }
        } else {
          current = current.right;
          // 当右节点为空时插入
          if (current === null) {
            parent.right = n;
          }
        }
      }
    }
  }
}

const bst = new BST();

bst.insert(10);
bst.insert(11);
bst.insert(9);

console.log(JSON.stringify(bst));
