import React from "react";
import DualItemList from "../../../generic/lists/DualItemList";
import CustomerLineDisplayContents from "../../display-contents/CustomerLineDisplayContents";
import ContactList from "../single-lists/ContactList";
import DualContactsOnCustomersContext from "../../../../contexts/custom/dual-contexts/DualContactsOnCustomersContext";
import CustomerContext from "../../../../contexts/custom/single-contexts/CustomerContext";
import ContactContext from "../../../../contexts/custom/single-contexts/ContactContext";
//

const ContactsOnCustomersList = (props) => {
  let values;
  ({ values } = props);

  // const { items } = DualContactsOnCustomersContext();

  let { items: customers } = CustomerContext.useContext();
  const { items: contacts } = ContactContext.useContext();
  console.log("test", customers);

  customers = JSON.parse(JSON.stringify(customers));

  let rtn = {};

  Object.entries(customers).forEach(([id, cus]) => (rtn[id] = { [id]: cus }));
  // Object.entries(customers).forEach(([id, cus]) => (rtn[id][id] = cus));
  Object.entries(contacts).forEach(
    ([id, con]) => (rtn[con.con_cus_id][id] = con)
  );

  return (
    <DualItemList
      {...{
        values: rtn,
        SummaryComponent: CustomerLineDisplayContents,
        DetailsComponent: ContactList,
      }}
    />
  );
};

export default ContactsOnCustomersList;
