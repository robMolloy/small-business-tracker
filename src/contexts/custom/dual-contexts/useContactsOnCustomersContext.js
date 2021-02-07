import ContactContext from "../single-contexts/ContactContext";
import CustomerContext from "../single-contexts/CustomerContext";

const useContactsOnCustomersContext = () => {
  let {
    items: contacts,
    ...contactFunctions
    // add: addContact,
    // remove: removeContact,
    // fetchAll: fetchAllContact,
  } = ContactContext.useContext();

  let {
    items: customers,
    ...customerFunctions
    // add: addCustomer,
    // remove: removeCustomer,
    // fetchAll: fetchAllCustomer,
  } = CustomerContext.useContext();

  let rtn = {};

  Object.entries(customers).forEach(([id, cus]) => (rtn[id] = { [id]: cus }));
  Object.entries(contacts).forEach(([id, con]) => {
    const cusId = con.con_cus_id;
    if (rtn.hasOwnProperty(cusId)) rtn[cusId][id] = con;
  });

  return {
    items: rtn,
    customerFunctions,
    contactFunctions,

    // addContact,
    // removeContact,
    // fetchAllContact,
    // addCustomer,
    // removeCustomer,
    // fetchAllCustomer,
  };
};

export default useContactsOnCustomersContext;
