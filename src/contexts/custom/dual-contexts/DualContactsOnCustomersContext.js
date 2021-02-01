import ContactContext from "../single-contexts/ContactContext";
import CustomerContext from "../single-contexts/CustomerContext";

const DualContactsOnCustomersContext = () => {
  let { items: contacts } = ContactContext.useContext();
  let { items: customers } = CustomerContext.useContext();

  contacts = { ...contacts };
  customers = { ...customers };

  let rtn = {};

  Object.entries(customers).forEach(([id, cus]) => (rtn[id] = {}));
  Object.entries(customers).forEach(([id, cus]) => (rtn[id][id] = cus));
  Object.entries(contacts).forEach(
    ([id, con]) => (rtn[con.con_cus_id][id] = con)
  );

  return { items: rtn };
};

export default DualContactsOnCustomersContext;
