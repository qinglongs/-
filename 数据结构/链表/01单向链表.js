class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // 链表头部
    this.head = new Node('head');
  }

  /**
   * @method 查找链表中的某一个节点
   * @param {*} item
   */
  find(item) {
    let currNode = this.head;
    while (currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  /**
   * @method 插入一个节点
   * @param {*} newItem
   * @param {*} item
   */
  insert(newItem, item) {
    // 创建一个新的节点
    const newNode = new Node(newItem);
    // 找到需要插入新节点的位置
    const node = this.find(item);

    newNode.next = node.next;
    node.next = newNode;
  }

  findPrevious(item) {
    let currNode = this.head;
    while (currNode.next && currNode.next.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  /**
   * @method 删除一个节点
   * @param {*} item
   */
  remove(item) {
    // 找到需要删除节点的前一个节点
    const prevNode = this.findPrevious(item);
    if (prevNode.next) {
      prevNode.next = prevNode.next.next;
    }
  }

  display() {
    let currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
    }
  }
}

const linked = new LinkedList();

linked.insert('插入的数据', 'head');
linked.insert('插入的数据1', '插入的数据');

linked.remove('插入的数据1');

console.log(JSON.stringify(linked));

const linkedObj = {
  head: { element: 'head', next: { element: '插入的数据', next: null } },
};
