import React from "react";

import RecordFormContents from "../form-contents/RecordFormContents";
import RecItemFormContents from "../form-contents/RecItemFormContents";

import MultiForm from "../../generic/forms/MultiForm";
import Form from "../../generic/forms/Form";

import Accordion from "../../generic/layouts/Accordion";
import MultiformButtonBar from "../../generic/buttons/MultiformButtonBar";
import RefreshIcon from "../../generic/icons/RefreshIcon";

import GridContainer from "../../generic/grids/GridContainer";
import GridItem from "../../generic/grids/GridItem";

import createMultiFormHelper from "../../../classes/createMultiFormHelper";
import getIsoDateString from "../../../functions/getIsoDateString";
import normalizeCurrency from "../../../functions/normalizeCurrency";
import blankItems from "../../../data/blankItems";
import isNumber from "../../../schemas/tests/isNumber";

import RecordContext from "../../../contexts/custom/single-contexts/RecordContext";
import RecItemContext from "../../../contexts/custom/single-contexts/RecItemContext";

const Records = (props = {}) => {
  const recordMultiFormControls = {};
  const recItemMultiFormControls = {};

  const { add: addRecords } = RecordContext.useContext();
  const { add: addRecItems } = RecItemContext.useContext();

  const [total, setTotal] = React.useState(0);

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

  const calculateTotal = () => {
    let sum = Object.values(recItemMultiFormValues).reduce((total, values) => {
      return total + parseFloat(values.rci_total);
    }, 0);

    return isNumber(sum) ? sum : 0;
  };

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
              width: 8,
            }}
          />
          <GridItem xs={3}>
            Total: {normalizeCurrency(total, true)}
            {/* Total: {normalizeCurrency(calculateTotal(), true)} */}
          </GridItem>
          <GridItem
            xs={1}
            onClick={() => setTotal(normalizeCurrency(calculateTotal(), false))}
          >
            <RefreshIcon />
          </GridItem>

          <MultiForm
            {...{
              multiFormControls: recItemMultiFormControls,
              multiFormValues: recItemMultiFormValues,
              setMultiFormValues: setRecItemMultiFormValues,
              Component: RecItemFormContents,
              remove: true,
            }}
          />

          <MultiformButtonBar
            addProps={{ onClick: () => recItemMultiFormHelper.addItem() }}
          />
        </GridContainer>
      </Form>
    </Accordion>
  );
};

export default Records;
