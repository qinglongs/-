/**
 * 二叉查找树由节点组成，所以我们要定义的第一个对象就是node
 * node既保存数据，也保存和其他节点的链接(left和right)，show()方法用来显示保存在节点中的数据
 */

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
 * 现在可以创建一个类，用来表示二叉查找树(BST).我们让类只包含一个数据成员：一个表示二叉查找树根节点的Node对象
 * 该类的构造函数将根节点初始化为null，以此创建一个空节点
 */
