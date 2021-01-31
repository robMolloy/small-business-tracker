import ContactContext from "../single-contexts/ContactContext";
import CustomerContext from "../single-contexts/CustomerContext";

const useContactsOnCustomersContext = () => {
  const { items: contacts } = ContactContext.useContext();
  const { items: customers } = CustomerContext.useContext();

  const rtn = {};

  Object.entries(customers).forEach(([id, cus]) => (rtn[id] = { [id]: cus }));
  Object.entries(contacts).forEach(([id, con]) => {
    const cusId = con.con_cus_id;
    rtn[cusId][id] = con;
  });

  return rtn;
};

export default useContactsOnCustomersContext;
