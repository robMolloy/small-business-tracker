import l_ from "lodash";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Schema from "../../../schemas/ContactSchema";

import GridSelect from "../../generic/grids/GridSelect";
import GridInput from "../../generic/grids/GridInput";
// import GridInput from "../../generic/grids/GridInput";
import Option from "../../generic/fields/Option";
import Input from "../../generic/fields/Input";

import createFormHelper from "../../../classes/createFormHelper";
import phone from "../../../functions/normalizePhoneNumber";
import config from "../../../config";

const ContactFormContents = (props = {}) => {
  let formControls, values, width, schema;
  ({ formControls = {}, values = {}, width = 12, schema = Schema } = props);

  const resolver = yupResolver(schema);
  Object.assign(
    formControls,
    useForm({ resolver, mode: "onChange", defaultValues: values })
  );

  const formHelper = createFormHelper({ formControls, values });
  const con_type = formControls.watch("con_type");

  const { [con_type]: conMethods } = config.contactMethods;
  const contactTypes = config.contactTypes;

  return (
    <>
      <GridSelect
        grid={{ xs: 6, sm: 3 }}
        label="Type"
        {...formHelper.fieldProps("con_type")}
      >
        {(contactTypes ?? []).map((value) => (
          <Option {...{ key: value, value }}>{l_.upperFirst(value)}</Option>
        ))}
      </GridSelect>

      <GridSelect
        grid={{ xs: 6, sm: 3 }}
        label="Method"
        {...formHelper.fieldProps("con_method")}
      >
        {(conMethods ?? []).map((value) => (
          <Option {...{ key: value, value }}>{l_.upperFirst(value)}</Option>
        ))}
      </GridSelect>

      <GridInput
        grid={{ xs: width, sm: width - 6 }}
        label={l_.upperFirst(con_type)}
        // {...formHelper.fieldProps(`con_address_${con_type}`)}
        name="con_address"
        onChange={(e) => {
          if (con_type === "phone") e.target.value = phone(e.target.value);

          values["con_address"] = e.target.value;
          formHelper.setValue(`con_address_${con_type}`, e.target.value);
        }}
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
