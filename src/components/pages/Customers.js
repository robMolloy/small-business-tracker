import React from "react";

import CustomerFormContents from "../custom/form-contents/CustomerFormContents";
import ContactFormContents from "../custom/form-contents/ContactFormContents";

import MultiForm from "../generic/forms/MultiForm";
import Form from "../generic/forms/Form";
import GridContainer from "../generic/grids/GridContainer";
import Section from "../generic/sections/Section";

import blankItems from "../../data/blankItems";
import GridItem from "../generic/grids/GridItem";
import ButtonPrimary from "../generic/buttons/ButtonPrimary";
import Button from "../generic/buttons/Button";

import createMultiFormHelper from "../../classes/createMultiFormHelper";
import FlexBox from "../generic/flex/FlexBox";
import ContactContext from "../../contexts/custom/ContactContext";

const Customers = (props = {}) => {
  const contactDispatch = React.useContext(ContactContext);
  console.log(contactDispatch);

  const customerMultiFormControls = {};
  const contactMultiFormControls = {};

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

      customerMultiFormHelper.reset();
      contactMultiFormHelper.reset();
    }
  };

  return (
    <Section>
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
          <GridItem xs={12}>
            <FlexBox justifyContent="space-between">
              <Button
                color="secondary"
                onClick={() => contactMultiFormHelper.addItem()}
              >
                +
              </Button>
              <ButtonPrimary type="submit">Submit</ButtonPrimary>
            </FlexBox>
          </GridItem>
        </GridContainer>
      </Form>
    </Section>
  );
};

export default Customers;
