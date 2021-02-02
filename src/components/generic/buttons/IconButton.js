import React from "react";
import Button from "./Button";

const IconButton = (props = {}) => {
  let children, color, style;
  ({
    children,
    color = "secondary",
    style = { minWidth: 0 },
    ...props
  } = props);

  return (
    <Button fullWidth {...{ ...props, color, style }}>
      {children}
    </Button>
  );
};

export default IconButton;
