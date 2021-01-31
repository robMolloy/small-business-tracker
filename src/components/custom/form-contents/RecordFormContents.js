import createFormHelper from "../../../classes/createFormHelper";

import Schema from "../../../schemas/RecordSchema";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import GridSelect from "../../generic/grids/GridSelect";
import GridInput from "../../generic/grids/GridInput";
import GridDateTimeInput from "../../generic/grids/GridDateTimeInput";
import AllProjectOptions from "../options/item-options/AllProjectOptions";
import TimeUnitOptions from "../options/config-options/TimeUnitOptions";

const RecordFormContents = (props = {}) => {
  let formControls, values, schema;
  ({ formControls, values, schema = Schema } = props);

  const resolver = yupResolver(schema);
  Object.assign(
    formControls,
    useForm({ resolver, mode: "onChange", defaultValues: values })
  );

  const formHelper = createFormHelper({ formControls, values });

  return (
    <>
      <GridSelect
        grid={{ xs: 12, sm: 8 }}
        label="Project"
        {...formHelper.fieldProps("rec_prj_id")}
      >
        <AllProjectOptions />
      </GridSelect>
      <GridDateTimeInput
        grid={{ xs: 12, sm: 4 }}
        label="Planned Start"
        {...formHelper.fieldProps("rec_timestamp_planned_start")}
      />
      <GridInput
        grid={{ xs: 12, sm: 8 }}
        type="number"
        label="Duration Quantity"
        {...formHelper.fieldProps("rec_duration_qty")}
      />
      <GridSelect
        grid={{ xs: 12, sm: 4 }}
        label="Duration Unit"
        {...formHelper.fieldProps("rec_duration_unit")}
      >
        <TimeUnitOptions />
      </GridSelect>

      <GridInput
        grid={{ xs: 12 }}
        label="Description"
        {...formHelper.fieldProps("rec_description")}
        multiline
      />
    </>
  );
};

export default RecordFormContents;
