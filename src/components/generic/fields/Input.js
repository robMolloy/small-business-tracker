import React from "react";
import { TextField } from "@material-ui/core/";
import makeStyles from "@material-ui/styles/makeStyles";
import config from "../../../config";

const Input = React.forwardRef((props = {}, ref) => {
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
      className={classes.root}
      inputRef={ref}
      inputProps={{ className: classes.input }}
      fullWidth
      {...{
        ...props,
        helperText,
        InputLabelProps,
        color,
        variant,
        size,
      }}
    />
  );
});

export default Input;
