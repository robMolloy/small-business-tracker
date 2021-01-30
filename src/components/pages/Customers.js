import CustomerMultiform from "../custom/multiforms/CustomerMultiform";

import Section from "../generic/sections/Section";
import GridContainer from "../generic/grids/GridContainer";
import CustomerList from "../custom/lists/CustomerList";

import CustomerContext from "../../contexts/custom/CustomerContext";
import Paper from "../generic/layouts/Paper";

const Customers = () => {
  const { items } = CustomerContext.useContext();

  return (
    <>
      <CustomerMultiform />

      <Section>
        <GridContainer>
          <CustomerList values={items} Container={Paper} />
        </GridContainer>
      </Section>
    </>
  );
};

export default Customers;
