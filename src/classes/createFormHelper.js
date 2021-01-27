class formHelper {
  constructor({ formControls, values }) {
    this.formControls = formControls;
    this.values = values;
  }

  fieldProps(name) {
    return {
      inputRef: this.formControls.register,
      error: !!this.formControls.errors[name],
      helperText: this.formControls.errors?.[name]?.message,
      onChange: (e) => (this.values[name] = e.target.value),
      defaultValue: this.values[name],
      name,
      // autoComplete: "off",
    };
  }

  setValue(name, value, params = { shouldValidate: true }) {
    this.values[name] = value;
    this.formControls.setValue(name, value, params);
  }

  // async isValid() {
  //   await form.trigger();
  //   return !form.isErrors();
  // }
}

const createFormHelper = (props) => new formHelper(props);

export default createFormHelper;
