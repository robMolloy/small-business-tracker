import Accordion from "../../generic/layouts/Accordion";
import React from "react";

import CustomerFormContents from "../form-contents/CustomerFormContents";
import ContactFormContents from "../form-contents/ContactFormContents";

import MultiForm from "../../generic/forms/MultiForm";
import Form from "../../generic/forms/Form";
import GridContainer from "../../generic/grids/GridContainer";

import blankItems from "../../../data/blankItems";

import createMultiFormHelper from "../../../classes/createMultiFormHelper";
import CustomerContext from "../../../contexts/custom/single-contexts/CustomerContext";
import ContactContext from "../../../contexts/custom/single-contexts/ContactContext";
import MultiformButtonBar from "../../generic/buttons/MultiformButtonBar";

const Customers = (props = {}) => {
  const customerMultiFormControls = {};
  const contactMultiFormControls = {};

  const { add: addCustomers } = CustomerContext.useContext();
  const { add: addContacts } = ContactContext.useContext();

  const initCustomer = () => blankItems.customer();
  const initContact = () => blankItems.contact(1, { con_type: "phone" });

  const [customerMultiFormValues, setCustomerMultiFormValues] = React.useState(
    initCustomer()
  );
  const [contactMultiFormValues, setContactMultiFormValues] = React.useState(
    initContact()
  );

  let customerMultiFormHelper = createMultiFormHelper({
    controls: customerMultiFormControls,
    values: customerMultiFormValues,
    setValues: setCustomerMultiFormValues,
    newItem: initCustomer,
  });

  let contactMultiFormHelper = createMultiFormHelper({
    controls: contactMultiFormControls,
    values: contactMultiFormValues,
    setValues: setContactMultiFormValues,
    newItem: initContact,
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    let valid = true;
    if (!(await customerMultiFormHelper.isValid())) valid = false;
    if (!(await contactMultiFormHelper.isValid())) valid = false;

    if (valid) {
      let customers = customerMultiFormHelper.getItems();
      let contacts = contactMultiFormHelper.getItems();

      let cusId = Object.keys(customers)[0];
      Object.values(contacts).forEach((con) => (con.con_cus_id = cusId));

      addCustomers(customers);
      addContacts(contacts);

      customerMultiFormHelper.reset();
      contactMultiFormHelper.reset();
    }
  };

  return (
    <Accordion summary="Add Customer">
      <Form onSubmit={onSubmit}>
        <GridContainer>
          <MultiForm
            {...{
              overline: false,
              multiFormControls: customerMultiFormControls,
              multiFormValues: customerMultiFormValues,
              setMultiFormValues: setCustomerMultiFormValues,
              Component: CustomerFormContents,
            }}
          />
          <MultiForm
            {...{
              multiFormControls: contactMultiFormControls,
              multiFormValues: contactMultiFormValues,
              setMultiFormValues: setContactMultiFormValues,
              Component: ContactFormContents,
              remove: true,
            }}
          />

          <MultiformButtonBar
            addProps={{ onClick: () => contactMultiFormHelper.addItem() }}
          />
        </GridContainer>
      </Form>
    </Accordion>
  );
};

export default Customers;
