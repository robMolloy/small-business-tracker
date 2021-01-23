import React from "react";
import MultiForm from "../generic/forms/MultiForm";
import ContactFormContents from "../custom/form-contents/ContactFormContents";

import * as yup from "yup";
import "yup-phone";

const schema = yup.object().shape({
  type: yup
    .string()
    .required("Shtick it in my box")
    .oneOf(["landline", "mobile"]),
  phone_number: yup
    .string()
    .required("Phone number is a required field")
    .phone("", false, "Must be a valid phone number"),
});

const Customers = (props = {}) => {
  const contactListFormControls = {};

  return (
    <MultiForm
      {...{
        schema,
        listFormControls: contactListFormControls,
        Component: ContactFormContents,
      }}
    />
  );
};

export default Customers;
