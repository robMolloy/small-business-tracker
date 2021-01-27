class mightyStorage {
  static getAllItems() {
    let allData = {};
    let keys = Object.keys(localStorage);
    keys.forEach((key) => (allData[key] = this.getItem(key)));
    return allData;
  }

  static getItem(key, ifnull = null) {
    let localData = localStorage.getItem(key);
    localData = localData === null ? ifnull : JSON.parse(localData);
    return localData;
  }

  static setItem(key, item) {
    let newData = JSON.stringify(item);
    return localStorage.setItem(key, newData);
  }

  static addItem(key, item, type = "object") {
    let localData;
    let newData;

    if (type === "array") {
      localData = this.getItem(key, []);
      newData = [...localData, ...item];
    }
    //
    else if (type === "object") {
      localData = this.getItem(key, {});
      newData = { ...localData, ...item };
    }
    //
    else if (type === "number") {
      localData = this.getItem(key, 0);
      newData = localData + item;
    }

    return this.setItem(key, newData);
  }

  static removeItem(key, item, type = "object") {
    let localData;
    let newData;

    if (type === "array") {
      localData = this.getItem(key, []);
      const index = localData.indexOf(item);
      if (index < 0) localData.splice(index, 1);
      newData = localData;
    }
    //
    else if (typeof item === "object") {
      localData = this.getItem(key, {});
      delete localData[item];
      newData = localData;
    }
    //
    else if (type === "number") {
      localData = this.getItem(key, 0);
      newData = localData - item;
    }

    return this.setItem(key, newData);
  }
}

export default mightyStorage;
