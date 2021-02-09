import GridInput from "../../generic/grids/GridInput";
import createFormHelper from "../../../classes/createFormHelper";
import { yupResolver } from "@hookform/resolvers/yup";

import Schema from "../../../schemas/SignInSchema";

import { useForm } from "react-hook-form";

const SignInFormContents = (props = {}) => {
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
        label="Email"
        {...formHelper.fieldProps("sgn_email")}
      />

      <GridInput
        type="password"
        label="Password"
        {...formHelper.fieldProps("sgn_password")}
      />
    </>
  );
};

export default SignInFormContents;
