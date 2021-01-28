import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIContainer from "@material-ui/core/Container";
import config from "../../../config";

const useStyles = makeStyles((theme) => ({ root: {} }));

const Container = (props = {}) => {
  let children, className, maxWidth;
  ({
    children,
    className = "",
    maxWidth = config.display.maxWidth,
    ...props
  } = props);
  const classes = useStyles();

  return (
    <MUIContainer
      className={`${className} ${classes.root}`}
      maxWidth={maxWidth}
      {...props}
    >
      {children}
    </MUIContainer>
  );
};

export default Container;
