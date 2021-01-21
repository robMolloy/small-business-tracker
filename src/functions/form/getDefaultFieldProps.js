const getDefaultFieldProps = ({ formControls, name }) => ({
  name,
  ref: formControls.register,
  helperText: formControls.errors?.[name]?.message,
  error: !!formControls.errors[name],
});

export default getDefaultFieldProps;
