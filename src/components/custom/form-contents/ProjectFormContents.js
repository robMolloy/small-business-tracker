import GridItem from "../../generic/grids/GridItem";
import GridSelect from "../../generic/grids/GridSelect";
import GridInput from "../../generic/grids/GridInput";
import GridText from "../../generic/grids/GridText";
import Option from "../../generic/fields/Option";
import createFormHelper from "../../../classes/createFormHelper";

import config from "../../../config";
import Schema from "../../../schemas/ProjectSchema";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import l_ from "lodash";
import Text from "../../generic/text/Text";

const ProjectFormContents = (props = {}) => {
  let formControls, values, schema;
  ({ formControls = {}, values = {}, schema = Schema } = props);

  const resolver = yupResolver(schema);
  Object.assign(
    formControls,
    useForm({ resolver, mode: "onChange", defaultValues: values })
  );

  const formHelper = createFormHelper({ formControls, values });

  const timeUnits = config.timeUnits;

  return (
    <>
      <GridText align="left">Pick a unique reference for this project</GridText>
      <GridInput
        autoFocus
        label="Acronym"
        {...formHelper.fieldProps("prj_acronym")}
      />

      <GridText>What is the address of this project?</GridText>
      <GridInput
        label="Address_1"
        {...formHelper.fieldProps("prj_address_1")}
      />
      <GridInput
        label="Address_2"
        {...formHelper.fieldProps("prj_address_2")}
      />
      <GridInput
        grid={{ xs: 8 }}
        label="City"
        {...formHelper.fieldProps("prj_city")}
      />
      <GridInput
        grid={{ xs: 4 }}
        label="Postcode"
        {...formHelper.fieldProps("prj_postcode")}
      />

      <GridText>What work is usually done on this project?</GridText>
      <GridInput
        label="Default Work"
        {...formHelper.fieldProps("prj_default_work")}
      />

      <GridText>What is the default unit of work?</GridText>
      <GridInput
        label="Default Unit"
        {...formHelper.fieldProps("prj_default_unit")}
      />

      <GridText>How many units of work will usually take place?</GridText>
      <GridInput
        label="Default Quantity"
        {...formHelper.fieldProps("prj_default_qty")}
      />

      <GridText>What is the rate charged per unit of work?</GridText>
      <GridInput
        label="Default Rate"
        {...formHelper.fieldProps("prj_rate_per_default_unit")}
      />

      <GridText>How often will the work take place?</GridText>
      <GridText grid={{ xs: 2 }}>Every</GridText>
      <GridInput
        grid={{ xs: 4 }}
        label="prj_default_repeat_every_qty"
        {...formHelper.fieldProps("prj_default_repeat_every_qty")}
      />
      <GridSelect
        grid={{ xs: 6 }}
        label="prj_default_repeat_every_unit"
        {...formHelper.fieldProps("prj_default_repeat_every_unit")}
      >
        {timeUnits.map((value) => (
          <Option {...{ key: value, value }}>{l_.upperFirst(value)}</Option>
        ))}
      </GridSelect>

      <GridText>What is the usual duration of this work?</GridText>
      <GridText align="right">
        (May be the same as the default unit and quantity)
      </GridText>
      <GridInput
        grid={{ xs: 6 }}
        label="prj_default_duration_qty"
        {...formHelper.fieldProps("prj_default_duration_qty")}
      />
      <GridSelect
        grid={{ xs: 6 }}
        label="prj_default_duration_unit"
        {...formHelper.fieldProps("prj_default_duration_unit")}
      >
        {timeUnits.map((value) => (
          <Option {...{ key: value, value }}>{l_.upperFirst(value)}</Option>
        ))}
      </GridSelect>

      <GridItem>
        <Text>What is the rate charged per unit of time worked?</Text>
        <Text align="right">(Leave as 0 if not charged per unit of time)</Text>
      </GridItem>
      <GridText grid={{ xs: 2 }}>£</GridText>
      <GridInput
        grid={{ xs: 9 }}
        label="prj_default_cost_per_duration_unit"
        {...formHelper.fieldProps("prj_default_cost_per_duration_unit")}
      />
      <GridText align="right" grid={{ xs: 1 }}>
        / Unit
      </GridText>
    </>
  );
};

export default ProjectFormContents;
