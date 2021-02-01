import React from "react";
import DualItemList from "../../../generic/lists/DualItemList";
import CustomerLineDisplayContents from "../../display-contents/CustomerLineDisplayContents";
import ContactList from "../single-lists/ContactList";

const ContactsOnCustomersList = (props) => {
  let values;
  ({ values } = props);

  return (
    <DualItemList
      {...{
        values: values,
        SummaryComponent: CustomerLineDisplayContents,
        DetailsComponent: ContactList,
      }}
    />
  );
};

export default ContactsOnCustomersList;
