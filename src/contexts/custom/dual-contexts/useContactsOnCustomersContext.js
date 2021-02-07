import ContactContext from "../single-contexts/ContactContext";
import CustomerContext from "../single-contexts/CustomerContext";

const useContactsOnCustomersContext = () => {
  let { items: contacts, ...contactFunctions } = ContactContext.useContext();
  let { items: customers, ...customerFunctions } = CustomerContext.useContext();

  let rtn = {};

  Object.entries(customers).forEach(([id, cus]) => (rtn[id] = { [id]: cus }));
  Object.entries(contacts).forEach(([id, con]) => {
    const cusId = con.con_cus_id;
    if (rtn.hasOwnProperty(cusId)) rtn[cusId][id] = con;
  });

  return { items: rtn, contactFunctions, customerFunctions };
};

export default useContactsOnCustomersContext;
