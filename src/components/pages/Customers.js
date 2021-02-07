import React from "react";
import CustomerMultiform from "../custom/multiforms/CustomerMultiform";

import Section from "../generic/sections/Section";
import GridContainer from "../generic/grids/GridContainer";
import ContactsOnCustomersList from "../custom/lists/dual-lists/ContactsOnCustomersList";

import useContactsOnCustomersContext from "../../contexts/custom/dual-contexts/useContactsOnCustomersContext";
// import CustomerContext from "../../contexts/custom/single-contexts/CustomerContext";
// import CustomerList from "../custom/lists/single-lists/CustomerList";

import db from "../../alt-config/firebase";

const Customers = () => {
  const {
    items,
    customerFunctions,
    contactFunctions,
    // fetchAllCustomer,
    // fetchAllContact,
    // ...contactsOnCustomersFunctions
  } = useContactsOnCustomersContext();

  // React.useEffect(() => {
  //   fetchAllCustomer();
  //   fetchAllContact();
  // }, []);

  React.useEffect(() => {
    db.collection("sbt_customer").onSnapshot((snapshot) => {
      const stateChanges = { add: {}, remove: [] };

      let changes = snapshot.docChanges();

      changes.forEach((change) => {
        const { doc } = change;

        if (change.type === "added") stateChanges.add[doc.id] = doc.data();
        else if (change.type === "modified")
          stateChanges.add[doc.id] = doc.data();
        else if (change.type === "removed") stateChanges.remove.push(doc.id);
      });

      customerFunctions.addRemoveState(stateChanges);
    });
  }, []);

  return (
    <>
      <Section>
        <CustomerMultiform />
      </Section>

      <Section>
        <GridContainer>
          <ContactsOnCustomersList values={items} />
        </GridContainer>
      </Section>
    </>
  );
};

export default Customers;
