import React from "react";

import RecordFormContents from "../form-contents/RecordFormContents";
import recItemFormContents from "../form-contents/RecItemFormContents";

import MultiForm from "../../generic/forms/MultiForm";
import Form from "../../generic/forms/Form";
import GridContainer from "../../generic/grids/GridContainer";
import Section from "../../generic/sections/Section";

import blankItems from "../../../data/blankItems";
import GridItem from "../../generic/grids/GridItem";
import ButtonPrimary from "../../generic/buttons/ButtonPrimary";
import Button from "../../generic/buttons/Button";

import createMultiFormHelper from "../../../classes/createMultiFormHelper";
import FlexBox from "../../generic/flex/FlexBox";
import getIsoDateString from "../../../functions/getIsoDateString";

import RecordContext from "../../../contexts/custom/single-contexts/RecordContext";
import RecItemContext from "../../../contexts/custom/single-contexts/RecItemContext";
import Accordion from "../../generic/layouts/Accordion";

const Records = (props = {}) => {
  const recordMultiFormControls = {};
  const recItemMultiFormControls = {};

  const { add: addRecords } = RecordContext.useContext();
  const { add: addRecItems } = RecItemContext.useContext();

  const initRecord = () =>
    blankItems.record(1, {
      rec_timestamp_planned_start: getIsoDateString(),
    });
  const initRecItem = () => blankItems.recItem();

  const [recordMultiFormValues, setRecordMultiFormValues] = React.useState(
    initRecord()
  );
  const [recItemMultiFormValues, setRecItemMultiFormValues] = React.useState(
    initRecItem()
  );

  let recordMultiFormHelper = createMultiFormHelper({
    controls: recordMultiFormControls,
    values: recordMultiFormValues,
    setValues: setRecordMultiFormValues,
    newItem: initRecord,
  });

  let recItemMultiFormHelper = createMultiFormHelper({
    controls: recItemMultiFormControls,
    values: recItemMultiFormValues,
    setValues: setRecItemMultiFormValues,
    newItem: initRecItem,
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

      addRecords(records);
      addRecItems(recItems);

      recordMultiFormHelper.reset();
      recItemMultiFormHelper.reset();
    }
  };

  return (
    <Section>
      <Accordion summary="Add Record">
        <Form onSubmit={onSubmit}>
          <GridContainer alignItems="center">
            <MultiForm
              {...{
                overline: false,
                multiFormControls: recordMultiFormControls,
                multiFormValues: recordMultiFormValues,
                setMultiFormValues: setRecordMultiFormValues,
                Component: RecordFormContents,
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
      </Accordion>
    </Section>
  );
};

export default Records;
