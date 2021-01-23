import GridInput from "../../generic/grids/GridInput";
import createFormHelper from "../../../classes/createFormHelper";

import { useForm } from "react-hook-form";

const CustomerFormContents = (props = {}) => {
  let formControls, values;
  ({ formControls, values } = props);

  formControls = useForm();
  const formHelper = createFormHelper({ formControls, values });

  return (
    <>
      <GridInput
        autoFocus
        label="First Name"
        {...formHelper.fieldProps("cus_first_name")}
      />

      <GridInput
        label="Last Name"
        {...formHelper.fieldProps("cus_last_name")}
      />
    </>
  );
};

export default CustomerFormContents;
