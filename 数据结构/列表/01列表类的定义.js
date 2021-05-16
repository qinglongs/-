class List {
  constructor() {
    this.dataStore = [];
    this.listSize = 0;
    this.position = 0;
  }

  /**
   * @method 给列表添加元素
   */
  append(val) {
    this.dataStore.push(val);
  }

  /**
   *  @method 删除一个元素
   */
  remove(val) {
    const valIndex = this.findIndex((item) => item === val);
    return this.dataStore.splice(valIndex, 1);
  }

  /**
   * @method 查找一个元素的位置
   * @param {(value: any, index: number, obj: any[]) => unknown} cb
   */
  findIndex(cb) {
    return this.dataStore.findIndex(cb);
  }

  /**
   * @method 查询列表长度
   */
  length() {
    return this.dataStore.length;
  }

  /**
   * @method 显示列表中的元素
   */
  toString() {
    return this.dataStore;
  }

  /**
   * @method 向列表插入一个元素
   */
  insert(element, after) {
    return this.dataStore.splice(after, 0, element);
  }
  /**
   * @method 清空列表
   */
  clear() {
    this.dataStore = [];
    this.position = 0;
  }

  /**
   * @method 判断给定值是否在列表中
   */
  contains(item) {
    return this.dataStore.includes(item);
  }
}

const list = new List();

list.append('xxx');
list.append('yyy');
list.append('zzz');

list.remove('yyy');

console.log(list.toString());
