import populateObject from "../functions/populateObject";
import isNumber from "../schemas/tests/isNumber";

class multiFormHelper {
  constructor(props = {}) {
    let { controls, values, setValues, newItem } = props;

    this.controls = controls;
    this.values = values;
    this.setValues = setValues;
    this.newItem = newItem;
  }

  rerender() {
    this.setValues({ ...this.values });
  }

  getValues() {
    let values = {};

    Object.entries(this.controls).forEach(([id, controls]) => {
      values[id] = Object.assign(this.values[id], controls.getValues());
    });

    return values;
  }

  getItems() {
    let templateDatarow = { ...Object.values(this.newItem())[0], id: "" };
    let values = this.getValues();
    let objects = {};

    Object.entries(values).forEach(([id, fieldValues]) => {
      objects[id] = populateObject({ ...templateDatarow, id }, fieldValues);
    });

    return objects;
  }

  updateValues(rerender = false) {
    this.values = Object.assign(this.values, this.getValues());

    if (rerender) this.rerender();
  }

  async isValid() {
    let valid = true;

    for (let controls of Object.values(this.controls)) {
      await controls.trigger();
      if (Object.keys(controls.errors).length !== 0) valid = false;
    }

    return valid;
  }

  addItem(rerender = true) {
    this.values = Object.assign(this.values, this.newItem());

    if (rerender) this.rerender();
  }

  reset(rerender = true, n = 1) {
    this.controls = {};
    this.values = this.newItem(n);

    if (rerender) this.rerender();
  }

  matches(key) {
    const itemsArray = Object.values(this.getValues());
    const itemsOnKey = {};
    let allMatches = [];

    itemsArray.forEach((item) => (itemsOnKey[item[key]] = []));
    itemsArray.forEach((item) => itemsOnKey[item[key]].push(item.id));

    Object.values(itemsOnKey).forEach((matchingIds) => {
      if (matchingIds.length !== 1)
        allMatches = [...allMatches, ...matchingIds];
    });

    return allMatches;
  }

  calculateTotal(key, startingValue = 0) {
    let sum = Object.values(this.values).reduce((total, values) => {
      const num = isNumber(values?.[key]) ? values?.[key] : 0;
      return total + parseFloat(num);
    }, startingValue);

    return isNumber(sum) ? sum : 0;
  }
}

const createMultiFormHelper = (props) => new multiFormHelper(props);

export default createMultiFormHelper;
