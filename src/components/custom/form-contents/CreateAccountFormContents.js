import GridInput from "../../generic/grids/GridInput";
import createFormHelper from "../../../classes/createFormHelper";
import { yupResolver } from "@hookform/resolvers/yup";

import Schema from "../../../schemas/CreateAccountSchema";

import { useForm } from "react-hook-form";

const CreateAccountFormContents = (props = {}) => {
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
      {/* <GridInput
        autoFocus
        label="Display Name"
        {...formHelper.fieldProps("crac_display_name")}
      /> */}

      <GridInput
        autoFocus
        label="Email"
        {...formHelper.fieldProps("crac_email")}
      />

      <GridInput
        type="password"
        label="Password"
        {...formHelper.fieldProps("crac_password")}
      />

      <GridInput
        type="password"
        label="Repeat Password"
        {...formHelper.fieldProps("crac_repeat_password")}
      />
    </>
  );
};

export default CreateAccountFormContents;
