import * as yup from "yup";

const SignInSchema = yup.object().shape({
  sgn_email: yup
    .string()
    .required("Email address is a required field")
    .email("Must be an email address"),
  sgn_password: yup.string().required("Password is a required field"),
});

export default SignInSchema;
