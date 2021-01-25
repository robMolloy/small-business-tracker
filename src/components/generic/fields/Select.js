import React, { forwardRef } from "react";
import MUISelect from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import { makeStyles } from "@material-ui/core/styles";
import Option from "./Option";

import { v4 as uuid } from "uuid";

const useStyles = makeStyles((theme) => {
  return {
    formControl: { width: "100%" },
    label: {
      // backgroundColor: theme.palette.,
      // padding: "2px 5px",
      // marginLeft: "-4px",
    },
    helperText: { color: theme.palette.error.main },
  };
});

const Select = forwardRef((props, ref) => {
  let id, variant, option1, children, name, label, helperText, error;

  ({
    id = uuid(),
    variant = "filled",
    option1 = <Option disabled value={""}></Option>,
    children,
    name,
    label,
    helperText,
    error,
    ...props
  } = props);

  const classes = useStyles();

  return (
    <FormControl className={classes.formControl} variant={variant}>
      <InputLabel
        htmlFor={id}
        className={`${classes.label} ${error ? "Mui-error" : ""}`}
      >
        {label}
      </InputLabel>
      <MUISelect native inputProps={{ name, id }} {...{ ...props, ref, error }}>
        {option1}
        {children}
      </MUISelect>
      {!!helperText && (
        <FormHelperText className={classes.helperText}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
});

export default Select;
