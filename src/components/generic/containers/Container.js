import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIContainer from "@material-ui/core/Container";
import config from "../../../config";

const useStyles = makeStyles((theme) => ({ root: {} }));

const Container = (props = {}) => {
  let children, className, wide, maxWidth;
  ({ children, className = "", wide = true, ...props } = props);
  const classes = useStyles();

  maxWidth = wide ? config.display.maxWidth : config.display.smallPanelMaxWidth;

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
