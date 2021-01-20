import React from "react";
import { TextField } from "@material-ui/core/";
import makeStyles from "@material-ui/styles/makeStyles";

const Input = React.forwardRef((props = {}, ref) => {
  let helperText, color;
  ({ helperText = "", color = "mono", ...props } = props);

  const classes = makeStyles((theme) => ({
    poot: {
      //   backgroundColor: `${theme.palette[color].main}`,
    },
    input: {
      //   backgroundColor: `${theme.palette[color].main}`,
      color: theme.palette[color].contrastText,
      //   "&:focus": { backgroundColor: `${theme.palette[color].main}` },
    },
    label: {
      // zIndex: "1",
      color: theme.palette[color].contrastText,
    },
  }))();

  return (
    <TextField
      color="primary"
      className={classes.poot}
      fullWidth
      size="medium"
      inputRef={ref}
      inputProps={{ className: classes.input }}
      InputLabelProps={{ className: classes.label }}
      variant="filled"
      helperText={helperText}
      {...props}
    />
  );
});

export default Input;
