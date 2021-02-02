import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import MUIButton from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      // color: "#FFFFFF"
    },
  };
});

const Button = (props = {}) => {
  let children, className, color, size;
  ({
    children,
    className = "",
    color = "default",
    size = "medium",
    ...props
  } = props);
  const classes = useStyles();

  return (
    <MUIButton
      variant="contained"
      className={`${classes.root} ${className}`}
      {...{ ...props, color, size }}
    >
      {children}
    </MUIButton>
  );
};

export default Button;
