import rows from "./blankRows";
import { v4 as uuid } from "uuid";

const getBlankItems = (blankRow, n = 1, values = {}) => {
  let object = {};
  for (let i = 0; i < n; i++) {
    const id = uuid();
    object[id] = { ...blankRow, id, ...values };
  }
  return object;
};

const blankItems = {
  contact: (n = 1, values = {}) => getBlankItems(rows.contact, n, values),
  customer: (n = 1, values = {}) => getBlankItems(rows.customer, n, values),
  prjCusLink: (n = 1, values = {}) => getBlankItems(rows.prjCusLink, n, values),
  project: (n = 1, values = {}) => getBlankItems(rows.project, n, values),
  recItem: (n = 1, values = {}) => getBlankItems(rows.recItem, n, values),
  record: (n = 1, values = {}) => getBlankItems(rows.record, n, values),
  signIn: (n = 1, values = {}) => getBlankItems(rows.signIn, n, values),
  createAccount: (n = 1, values = {}) =>
    getBlankItems(rows.createAccount, n, values),
};

export default blankItems;
