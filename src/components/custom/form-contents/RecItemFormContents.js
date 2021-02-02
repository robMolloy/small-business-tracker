import createFormHelper from "../../../classes/createFormHelper";

import GridSelect from "../../generic/grids/GridSelect";
import Option from "../../generic/fields/Option";
import GridInput from "../../generic/grids/GridInput";
import GridText from "../../generic/grids/GridText";

import normalizeCurrency from "../../../functions/normalizeCurrency";

import { useForm } from "react-hook-form";
import Schema from "../../../schemas/RecItemSchema";
import { yupResolver } from "@hookform/resolvers/yup";

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

  const formHelper = createFormHelper({ formControls, values });

  const rci_qty = formControls.watch("rci_qty");
  const rci_cost_per_unit = formControls.watch("rci_cost_per_unit");

  const workOptions = [1, 2, 3].map((id) => (
    <Option key={id} value={id}>
      work {id}
    </Option>
  ));
  const unitOptions = [1, 2, 3].map((id) => (
    <Option key={id} value={id}>
      unit {id}
    </Option>
  ));

  return (
    <>
      <GridSelect
        grid={{ xs: 8 }}
        label="Work"
        {...formHelper.fieldProps("rci_work")}
      >
        {workOptions}
      </GridSelect>

      <GridSelect
        grid={{ xs: 4 }}
        label="Unit"
        {...formHelper.fieldProps("rci_unit")}
      >
        {unitOptions}
      </GridSelect>

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
