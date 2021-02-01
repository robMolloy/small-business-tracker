import CustomerMultiform from "../custom/multiforms/CustomerMultiform";

import Section from "../generic/sections/Section";
import GridContainer from "../generic/grids/GridContainer";
import ContactsOnCustomersList from "../custom/lists/dual-lists/ContactsOnCustomersList";

import useContactsOnCustomersContext from "../../contexts/custom/dual-contexts/useContactsOnCustomersContext";

const Customers = () => {
  const { items } = useContactsOnCustomersContext();
  //
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
