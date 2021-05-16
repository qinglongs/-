class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head');
  }

  /**
   * @method 向双向链表插入新的节点
   * @param {*} newItem
   * @param {*} item
   */
  insert(newItem, item) {
    const newNode = new Node(newItem);
    const node = this.find(item);
    node.next = newNode;
    newNode.previous = node;
    newNode.next = node.next;
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
   * @method 移除一个节点
   */
  remove(item) {
    let currNode = this.head;
    while (currNode.element !== item) {
      currNode = currNode.next;
    }

    currNode.next.previous = currNode.previous;
    currNode.previous.next = currNode.next;
    currNode.next = null;
    currNode.previous = null;
  }

  /**
   * @method 查找链表中的最后一个元素
   */
  findLast() {
    let currNode = this.head;
    while (currNode.next !== null) {
      currNode = currNode.next;
    }
    return currNode;
  }

  /**
   * @method 反转链表
   */
  disReverse() {
    let currNode = this.head;
    currNode = this.findLast();
    while (currNode.previous) {
      console.log(currNode.element);
      currNode = currNode.previous;
    }
  }
}

const linked = new LinkedList();

linked.insert('测试', 'head');
linked.insert('测试1', '测试');
linked.remove('测试');
console.log(linked.findLast());
