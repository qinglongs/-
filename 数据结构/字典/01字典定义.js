class Dictionary {
  constructor() {
    this.dataSource = new Array();
  }

  add(key, val) {
    this.dataSource[key] = val;
  }

  find(key) {
    return this.dataSource[key];
  }

  remove(key) {
    delete this.dataSource[key];
  }

  showAll() {
    Object.keys(this.dataSource).forEach((i) => {
      console.log(`${i} -> ${this.dataSource[i]}`);
    });
  }
}

const pook = new Dictionary();

pook.add('name', '小敏');
