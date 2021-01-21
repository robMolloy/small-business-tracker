class createFormHelper {
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
      // defaultValue:this.values[name],
      name,
    };
  }

  // async isValid() {
  //   await form.trigger();
  //   return !form.isErrors();
  // }
}

export default createFormHelper;
