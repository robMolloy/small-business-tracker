import React from "react";
import createFormHelper from "../../../classes/createFormHelper";

import GridSelect from "../../generic/grids/GridSelect";
import Option from "../../generic/fields/Option";
import GridInput from "../../generic/grids/GridInput";
import GridText from "../../generic/grids/GridText";

import normalizeCurrency from "../../../functions/normalizeCurrency";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Schema from "../../../schemas/RecItemSchema";

import GridItem from "../../generic/grids/GridItem";
import useWorkContext from "../../../contexts/custom/indexed-contexts/useWorkContext";
import useUnitsContext from "../../../contexts/custom/indexed-contexts/useUnitsContext";
import IconButton from "../../generic/buttons/IconButton";

import EditIcon from "../../generic/icons/EditIcon";
import SelectIcon from "../../generic/icons/SelectIcon";

const calculateTotal = (a, b) => {
  const total = parseFloat(a) * parseFloat(b);
  return isNaN(total) ? 0 : total;
};

const RecItemFormContents = (props = {}) => {
  let formControls, values, width, schema;
  ({ formControls, values, width = 12, schema = Schema } = props);

  if (!values.rci_qty) values.rci_qty = "0";
  if (!values.rci_cost_per_unit) values.rci_cost_per_unit = "0.00";
  if (!values.rci_total)
    values.rci_total = calculateTotal(values.rci_qty, values.rci_cost_per_unit);

  const resolver = yupResolver(schema);
  Object.assign(
    formControls,
    useForm({ resolver, mode: "onChange", defaultValues: values })
  );

  const [editWork, setEditWork] = React.useState(false);
  const [editUnit, setEditUnit] = React.useState(false);

  const formHelper = createFormHelper({ formControls, values });

  const rci_qty = formControls.watch("rci_qty");
  const rci_cost_per_unit = formControls.watch("rci_cost_per_unit");

  const { items: work } = useWorkContext();
  const { items: units } = useUnitsContext();

  const workOptions = Object.values(work).map((val) => (
    <Option key={val} value={val}>
      {val}
    </Option>
  ));
  const unitOptions = Object.values(units).map((val) => (
    <Option key={val} value={val}>
      {val}
    </Option>
  ));

  return (
    <>
      <GridItem xs={2}>
        <IconButton onClick={() => setEditWork(!editWork)}>
          {editWork ? <EditIcon /> : <SelectIcon />}
        </IconButton>
      </GridItem>
      {editWork && (
        <GridInput
          grid={{ xs: 4 }}
          label="Work"
          {...formHelper.fieldProps("rci_work")}
        />
      )}
      {!editWork && (
        <GridSelect
          grid={{ xs: 4 }}
          label="Work"
          {...formHelper.fieldProps("rci_work")}
        >
          {workOptions}
        </GridSelect>
      )}

      <GridItem xs={2}>
        <IconButton onClick={() => setEditUnit(!editUnit)}>
          {editUnit ? <EditIcon /> : <SelectIcon />}
        </IconButton>
      </GridItem>

      {editUnit && (
        <GridInput
          grid={{ xs: 4 }}
          label="Unit"
          {...formHelper.fieldProps("rci_unit")}
        />
      )}
      {!editUnit && (
        <GridSelect
          grid={{ xs: 4 }}
          label="Unit"
          {...formHelper.fieldProps("rci_unit")}
        >
          {unitOptions}
        </GridSelect>
      )}

      <GridInput
        grid={{ xs: 3 }}
        label="Quantity"
        {...{
          ...formHelper.fieldProps("rci_qty"),
          onChange: (e) => {
            values["rci_qty"] = e.target.value;
            formHelper.setValue(
              `rci_total`,
              normalizeCurrency(
                calculateTotal(rci_qty, rci_cost_per_unit),
                false
              )
            );
          },
        }}
      />
      <GridText align="center" grid={{ xs: 1 }}>
        x
      </GridText>
      <GridInput
        grid={{ xs: 4 }}
        label="£ / Unit"
        {...{
          ...formHelper.fieldProps("rci_cost_per_unit"),
          onChange: (e) => {
            values["rci_cost_per_unit"] = e.target.value;
            formHelper.setValue(
              `rci_total`,
              normalizeCurrency(
                calculateTotal(rci_qty, rci_cost_per_unit),
                false
              )
            );
          },
        }}
      />
      <GridText grid={{ xs: 1 }}>=</GridText>

      <GridText align="right" grid={{ xs: width - 9 }}>
        {normalizeCurrency(calculateTotal(rci_qty, rci_cost_per_unit), true)}
      </GridText>

      {/* <GridItem xs={11}> */}
      <input
        style={{ display: "none" }}
        name="rci_total"
        ref={formControls.register}
        readOnly
      />
      {/* </GridItem> */}
    </>
  );
};

export default RecItemFormContents;
