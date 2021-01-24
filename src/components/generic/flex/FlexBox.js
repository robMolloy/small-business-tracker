import React from "react";
import { Box } from "@material-ui/core";

const FlexBox = (props = {}) => {
  let children, display;
  ({ children, display = "flex", ...props } = props);

  return <Box {...{ ...props, display }}>{children}</Box>;
};

export default FlexBox;
