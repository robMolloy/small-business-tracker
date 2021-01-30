import React from "react";
import Input from "./Input";
import Option from "./Option";

const Select = React.forwardRef((props = {}, ref) => {
  let option1, children;
  ({
    option1 = (
      <Option disabled value="">
        Select...
      </Option>
    ),
    children,
    ...props
  } = props);
  return (
    <Input
      select
      SelectProps={{
        ref: ref,
        native: true,
      }}
      InputLabelProps={{ shrink: true }}
      {...props}
    >
      {!!option1 && option1}
      {children}
    </Input>
  );
});

export default Select;

/*
import React from "react";
import { TextField } from "@material-ui/core/";
import makeStyles from "@material-ui/styles/makeStyles";
import config from "../../../config";

const Select = React.forwardRef((props = {}, ref) => {
  let helperText, InputLabelProps, variant, color, size;
  ({
    helperText = "",
    InputLabelProps = {},
    variant = config.fields.variant,
    color = config.fields.color,
    size = config.fields.size,
    ...props
  } = props);

  const classes = makeStyles((theme) => ({ root: {} }))();
  InputLabelProps.className = classes.label;

  return (
    <TextField
      select
      className={classes.root}
      // inputRef={ref}

      inputRef={ref}
      SelectProps={{
        ref: ref,
        native: true,
      }}
      inputProps={{ ref: ref, className: classes.input }}
      fullWidth
      {...{ ...props, helperText, InputLabelProps, color, variant, size }}
    />
  );
});

export default Select;
 */
