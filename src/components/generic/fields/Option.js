import React from "react";
import useTheme from "@material-ui/styles/useTheme";

const Option = (props) => {
  let value, children, disabled;
  ({ value, children, disabled, ...props } = props);

  const theme = useTheme();
  let style = {};

  if (disabled) {
    const { light, main } = theme.palette.grey;
    style = { background: light, color: main };
  }

  return (
    <option {...{ value, disabled, ...props }} style={style}>
      {children}
    </option>
  );
  // return <MenuItem {...{ value, ...props }}>{children}</MenuItem>;
};

export default Option;
