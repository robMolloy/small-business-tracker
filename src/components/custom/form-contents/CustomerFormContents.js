import GridInput from "../../generic/grids/GridInput";
import createFormHelper from "../../../classes/createFormHelper";
import { yupResolver } from "@hookform/resolvers/yup";

import Schema from "../../../schemas/CustomerSchema";

import { useForm } from "react-hook-form";

const CustomerFormContents = (props = {}) => {
  let formControls, values, schema;
  ({ formControls = {}, values = {}, schema = Schema } = props);

  const resolver = yupResolver(schema);
  Object.assign(
    formControls,
    useForm({ resolver, mode: "onChange", defaultValues: values })
  );

  const formHelper = createFormHelper({ formControls, values });

  return (
    <>
      <GridInput
        autoFocus
        grid={{ xs: 12, sm: 6 }}
        label="First Name"
        {...formHelper.fieldProps("cus_first_name")}
      />

      <GridInput
        grid={{ xs: 12, sm: 6 }}
        label="Last Name"
        {...formHelper.fieldProps("cus_last_name")}
      />
    </>
  );
};

export default CustomerFormContents;
