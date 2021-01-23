import GridSelect from "../../generic/grids/GridSelect";
import GridInput from "../../generic/grids/GridInput";
// import GridInput from "../../generic/grids/GridInput";
import Option from "../../generic/fields/Option";
import Input from "../../generic/fields/Input";

import createFormHelper from "../../../classes/createFormHelper";
import phone from "../../../functions/normalizePhoneNumber";
import config from "../../../config";
import l_ from "lodash";

import { useForm } from "react-hook-form";

const ContactFormContents = (props = {}) => {
  let formControls, values, width;
  ({ formControls, values = {}, width = 12 } = props);

  formControls = useForm();

  const formHelper = createFormHelper({ formControls, values });
  const con_type = formControls.watch("con_type") ?? "phone";

  const { [con_type]: conMethods } = config.contactMethods;
  const contactTypes = config.contactTypes;

  return (
    <>
      <GridSelect
        autoFocus
        grid={{ xs: 6, sm: 3 }}
        label="Type"
        {...formHelper.fieldProps("con_type")}
        // onChange={(e) => (values["con_type"] = e.target.value)}
        option1=""
      >
        {contactTypes.map((value) => (
          <Option {...{ key: value, value }}>{l_.upperFirst(value)}</Option>
        ))}
      </GridSelect>

      <GridSelect
        grid={{ xs: 6, sm: 3 }}
        label="Method"
        {...formHelper.fieldProps("con_method")}
        // onChange={(e) => (values["con_method"] = e.target.value)}
      >
        {conMethods.map((value) => (
          <Option {...{ key: value, value }}>{l_.upperFirst(value)}</Option>
        ))}
      </GridSelect>
      <GridInput
        grid={{ xs: width - 2, sm: width - 8 }}
        onChange={(e) => {
          if (con_type === "phone") e.target.value = phone(e.target.value);

          values["con_address"] = e.target.value;
          values[`con_address_${con_type}`] = e.target.value;
        }}
        name="con_address"
        label={l_.upperFirst(con_type)}
        inputRef={formControls.register}
        error={!!formControls?.errors?.[`con_address_${con_type}`]}
        helperText={formControls?.errors?.[`con_address_${con_type}`]?.message}
      />

      {con_type === "phone" && (
        <Input
          style={{ display: "none" }}
          {...formHelper.fieldProps("con_address_phone")}
        />
      )}

      {con_type === "email" && (
        <Input
          style={{ display: "none" }}
          {...formHelper.fieldProps("con_address_email")}
        />
      )}
    </>
  );
};

export default ContactFormContents;
