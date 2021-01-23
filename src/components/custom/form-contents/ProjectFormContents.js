import GridSelect from "../../generic/grids/GridSelect";
import GridInput from "../../generic/grids/GridInput";
import GridItem from "../../generic/grids/GridItem";
import Option from "../../generic/fields/Option";
import createFormHelper from "../../../classes/createFormHelper";

import config from "../../../config";
import { useForm } from "react-hook-form";

import l_ from "lodash";

const ProjectFormContents = (props = {}) => {
  let formControls, values;
  ({ formControls, values } = props);

  formControls = useForm();
  const formHelper = createFormHelper({ formControls, values });

  const timeUnits = config.timeUnits;

  return (
    <>
      <GridItem>Pick a unique reference for this project</GridItem>
      <GridInput
        autoFocus
        label="Acronym"
        {...formHelper.fieldProps("prj_acronym")}
        // onChange={(e) => setFieldValue("prj_acronym", e.target.value)}
      />

      <GridItem>What is the address of this project?</GridItem>
      <GridInput
        label="Address_1"
        {...formHelper.fieldProps("prj_address_1")}
        // onChange={(e) => setFieldValue("prj_address_1", e.target.value)}
      />
      <GridInput
        label="Address_2"
        {...formHelper.fieldProps("prj_address_2")}
        // onChange={(e) => setFieldValue("prj_address_2", e.target.value)}
      />
      <GridInput
        grid={{ xs: 8 }}
        label="City"
        {...formHelper.fieldProps("prj_city")}
        // onChange={(e) => setFieldValue("prj_city", e.target.value)}
      />
      <GridInput
        grid={{ xs: 4 }}
        label="Postcode"
        {...formHelper.fieldProps("prj_postcode")}
        // onChange={(e) => setFieldValue("prj_postcode", e.target.value)}
      />

      <GridItem>What work is usually done on this project?</GridItem>
      <GridInput
        label="Default Work"
        {...formHelper.fieldProps("prj_default_work")}
        // onChange={(e) => setFieldValue("prj_default_work", e.target.value)}
      />

      <GridItem>What is the default unit of work?</GridItem>
      <GridInput
        label="Default Unit"
        {...formHelper.fieldProps("prj_default_unit")}
        // onChange={(e) => setFieldValue("prj_default_unit", e.target.value)}
      />

      <GridItem>How many units of work will usually take place?</GridItem>
      <GridInput
        label="Default Quantity"
        {...formHelper.fieldProps("prj_default_qty")}
        // onChange={(e) => setFieldValue("prj_default_qty", e.target.value)}
      />

      <GridItem>What is the rate charged per unit of work?</GridItem>
      <GridInput
        label="Default Rate"
        {...formHelper.fieldProps("prj_rate_per_default_unit")}
        // onChange={(e) =>
        //   setFieldValue("prj_rate_per_default_unit", e.target.value)
        // }
      />

      <GridItem>How often will the work take place?</GridItem>
      <GridItem xs={3}>Every</GridItem>
      <GridInput
        grid={{ xs: 3 }}
        label="prj_default_repeat_every_qty"
        {...formHelper.fieldProps("prj_default_repeat_every_qty")}
        // onChange={(e) =>
        //   setFieldValue("prj_default_repeat_every_qty", e.target.value)
        // }
      />
      <GridSelect
        grid={{ xs: 6 }}
        label="prj_default_repeat_every_unit"
        {...formHelper.fieldProps("prj_default_repeat_every_unit")}
        // onChange={(e) =>
        //   setStateValue("prj_default_repeat_every_unit", e.target.value)
        // }
      >
        {timeUnits.map((value) => (
          <Option {...{ key: value, value }}>{l_.upperFirst(value)}</Option>
        ))}
      </GridSelect>

      <GridItem>What is the usual duration of this work?</GridItem>
      <GridItem>(May be the same as the default unit and quantity)</GridItem>
      <GridInput
        grid={{ xs: 6 }}
        label="prj_default_duration_qty"
        {...formHelper.fieldProps("prj_default_duration_qty")}
        // onChange={(e) =>
        //   setFieldValue("prj_default_duration_qty", e.target.value)
        // }
      />
      <GridSelect
        grid={{ xs: 6 }}
        label="prj_default_duration_unit"
        {...formHelper.fieldProps("prj_default_duration_unit")}
        // onChange={(e) =>
        //   setFieldValue("prj_default_duration_unit", e.target.value)
        // }
      >
        {timeUnits.map((value) => (
          <Option {...{ key: value, value }}>{l_.upperFirst(value)}</Option>
        ))}
      </GridSelect>

      <GridItem>What is the rate charged per unit of time worked?</GridItem>
      <GridItem>(Leave as 0 if not charged per unit of time)</GridItem>
      <GridItem xs={2}>£</GridItem>
      <GridInput
        grid={{ xs: 7 }}
        label="prj_default_cost_per_duration_unit"
        {...formHelper.fieldProps("prj_default_cost_per_duration_unit")}
        // onChange={(e) =>
        //   setFieldValue("prj_default_cost_per_duration_unit", e.target.value)
        // }
      />
      <GridItem xs={3}>Per Unit</GridItem>
    </>
  );
};

export default ProjectFormContents;
