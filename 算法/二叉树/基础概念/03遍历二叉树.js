// 中序 先序 后序遍历

// 中序遍历：按照节点上的键值，以升序访问BST上的所有节点。
// 先序遍历：先访问根节点，然后以同样的方式访问左子树合右子树。
// 后序遍历：先访问叶子节点，从左子树到右子树，再到根节点

// 中序遍历代码：
function inOrder(node) {
  if (node !== null) {
    inOrder(node.left);
    console.log(node);
    inOrder(node.right);
  }
}

// 先序遍历
function preOrder(node) {
  if (node !== null) {
    console.log(node);
    inOrder(node.left);
    inOrder(node.right);
  }
}

// 后序遍历
function backOrder(node) {
  if (node !== null) {
    inOrder(node.left);
    inOrder(node.right);
    console.log(node);
  }
}
