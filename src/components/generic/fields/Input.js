import React from "react";
import { TextField } from "@material-ui/core/";
import makeStyles from "@material-ui/styles/makeStyles";

const Input = React.forwardRef((props = {}, ref) => {
  let helperText, InputLabelProps;
  // color,
  ({ helperText = "", InputLabelProps = {}, ...props } = props);
  let color = "mono";

  const classes = makeStyles((theme) => ({
    root: {},
    input: {},
    label: {},
    notUsed: { color: theme.palette[color].contrastText },
  }))();
  InputLabelProps.className = classes.label;

  return (
    <TextField
      color="primary"
      className={classes.root}
      fullWidth
      size="medium"
      inputRef={ref}
      inputProps={{ className: classes.input }}
      InputLabelProps={InputLabelProps}
      variant="filled"
      helperText={helperText}
      {...props}
    />
  );
});

export default Input;
