import React from "react";

import ProjectFormContents from "../custom/form-contents/RecordFormContents";
import recItemFormContents from "../custom/form-contents/RecItemFormContents";

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

const Records = (props = {}) => {
  const recordMultiFormControls = {};
  const recItemMultiFormControls = {};

  const [recordMultiFormValues, setRecordMultiFormValues] = React.useState(
    blankItems.record()
  );
  const [recItemMultiFormValues, setRecItemMultiFormValues] = React.useState(
    blankItems.recItem()
  );

  let recordMultiFormHelper = createMultiFormHelper({
    controls: recordMultiFormControls,
    values: recordMultiFormValues,
    setValues: setRecordMultiFormValues,
    newItem: blankItems.record,
  });

  let recItemMultiFormHelper = createMultiFormHelper({
    controls: recItemMultiFormControls,
    values: recItemMultiFormValues,
    setValues: setRecItemMultiFormValues,
    newItem: blankItems.recItem,
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    let valid = true;
    if (!(await recordMultiFormHelper.isValid())) valid = false;
    if (!(await recItemMultiFormHelper.isValid())) valid = false;

    if (valid) {
      let records = recordMultiFormHelper.getItems();
      let recItems = recItemMultiFormHelper.getItems();

      let recId = Object.keys(records)[0];
      Object.values(recItems).forEach((rci) => (rci.rci_rec_id = recId));

      recordMultiFormHelper.reset();
      recItemMultiFormHelper.reset();
    }
  };

  return (
    <Section>
      <Form onSubmit={onSubmit}>
        <GridContainer alignItems="center">
          <MultiForm
            {...{
              multiFormControls: recordMultiFormControls,
              multiFormValues: recordMultiFormValues,
              setMultiFormValues: setRecordMultiFormValues,
              Component: ProjectFormContents,
            }}
          />
          <MultiForm
            {...{
              multiFormControls: recItemMultiFormControls,
              multiFormValues: recItemMultiFormValues,
              setMultiFormValues: setRecItemMultiFormValues,
              Component: recItemFormContents,
              remove: true,
            }}
          />
          <GridItem xs={12}>
            <FlexBox justifyContent="space-between">
              <Button
                color="secondary"
                onClick={() => recItemMultiFormHelper.addItem()}
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

export default Records;
