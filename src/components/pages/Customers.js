import CustomerMultiform from "../custom/multiforms/CustomerMultiform";
import Section from "../generic/sections/Section";

import CustomerContext from "../../contexts/custom/CustomerContext";
import PlusAccordion from "../generic/layouts/PlusAccordion";
import CustomerLineDisplayContents from "../custom/display-contents/CustomerLineDisplayContents";

const Customers = () => {
  const { items } = CustomerContext.useContext();

  return (
    <>
      <CustomerMultiform />

      <Section>
        {Object.entries(items).map(([id, values]) => {
          return (
            <PlusAccordion
              key={id}
              summary={<CustomerLineDisplayContents values={values} />}
            >
              hi
            </PlusAccordion>
          );
        })}
      </Section>
    </>
  );
};

export default Customers;
