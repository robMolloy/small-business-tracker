import getDefaultFieldProps from "../../../functions/form/getDefaultFieldProps";

const CustomerFormContents = (props = {}) => {
  let formControls, values;
  ({ formControls, values } = props);

  const formHelper = useFormHelper({ formControls, values });

  return (
    <>
      <GridInput
        autoFocus
        label="First Name"
        {...formHelper.fieldProps("cus_first_name")}
        onChange={(e) => setFieldValue("cus_first_name", e.target.value)}
      />

      <GridInput
        label="Last Name"
        {...formHelper.fieldProps("cus_last_name")}
        // onChange={(e) => setFieldValue("cus_last_name", e.target.value)}
        onChange={(e) => {
          state[id];
          setState();
        }}
      />
    </>
  );
};

export default CustomerFormContents;
