import CustomerMultiform from "../custom/multiforms/CustomerMultiform";

import Section from "../generic/sections/Section";
import GridContainer from "../generic/grids/GridContainer";
import ContactsOnCustomersList from "../custom/lists/dual-lists/ContactsOnCustomersList";
// import CustomerContext from "../../contexts/custom/single-contexts/CustomerContext";
// import ContactContext from "../../contexts/custom/single-contexts/ContactContext";

import DualContactsOnCustomersContext from "../../contexts/custom/dual-contexts/DualContactsOnCustomersContext";

const Customers = () => {
  const { items } = DualContactsOnCustomersContext();
  // const { items: customers } = CustomerContext.useContext();
  // const { items: contacts } = ContactContext.useContext();
  //
  return (
    <>
      <CustomerMultiform />

      <Section>
        <GridContainer>
          <ContactsOnCustomersList values={items} />
          {/* <ContactsOnCustomersList /> */}
        </GridContainer>
      </Section>
    </>
  );
};

export default Customers;
