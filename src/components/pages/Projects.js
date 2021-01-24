import React from "react";

import ProjectFormContents from "../custom/form-contents/ProjectFormContents";
import CustomerSelectFormContents from "../custom/form-contents/CustomerSelectFormContents";

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

const Projects = (props = {}) => {
  const projectMultiFormControls = {};
  const customerMultiFormControls = {};

  const initCustomer = () => blankItems.customer(1, { con_type: "phone" });

  const [projectMultiFormValues, setProjectMultiFormValues] = React.useState(
    blankItems.project()
  );
  const [customerMultiFormValues, setCustomerMultiFormValues] = React.useState(
    initCustomer()
  );

  let projectMultiFormHelper = createMultiFormHelper({
    controls: projectMultiFormControls,
    values: projectMultiFormValues,
    setValues: setProjectMultiFormValues,
    newItem: blankItems.project,
  });

  let customerMultiFormHelper = createMultiFormHelper({
    controls: customerMultiFormControls,
    values: customerMultiFormValues,
    setValues: setCustomerMultiFormValues,
    newItem: initCustomer,
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    let valid = true;
    if (!(await projectMultiFormHelper.isValid())) valid = false;
    if (!(await customerMultiFormHelper.isValid())) valid = false;

    if (valid) {
      let projects = projectMultiFormHelper.getItems();
      let customers = customerMultiFormHelper.getItems();

      let cusId = Object.keys(projects)[0];
      Object.values(customers).forEach((con) => (con.con_cus_id = cusId));

      projectMultiFormHelper.reset();
      customerMultiFormHelper.reset();
    }
  };

  return (
    <Section>
      <Form onSubmit={onSubmit}>
        <GridContainer>
          <MultiForm
            {...{
              multiFormControls: projectMultiFormControls,
              multiFormValues: projectMultiFormValues,
              setMultiFormValues: setProjectMultiFormValues,
              Component: ProjectFormContents,
            }}
          />
          <MultiForm
            {...{
              multiFormControls: customerMultiFormControls,
              multiFormValues: customerMultiFormValues,
              setMultiFormValues: setCustomerMultiFormValues,
              Component: CustomerSelectFormContents,
              remove: true,
            }}
          />
          <GridItem xs={12}>
            <FlexBox justifyContent="space-between">
              <Button
                color="secondary"
                onClick={() => customerMultiFormHelper.addItem()}
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

export default Projects;
