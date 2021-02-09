import * as yup from "yup";

const CreateAccountSchema = yup.object().shape({
  crac_email: yup
    .string()
    .required("Email address is a required field")
    .email("Must be an email address"),
  crac_password: yup
    .string()
    .required("Password is a required field")
    .min(7, "Password must be at least 7 characters long"),

  crac_repeat_password: yup
    .string()
    .required("Password is a required field")
    .oneOf([yup.ref("crac_password"), null], "Passwords do not match"),
});

export default CreateAccountSchema;
