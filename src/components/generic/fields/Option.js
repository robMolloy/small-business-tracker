import React from "react";
// import MenuItem from "@material-ui/core/MenuItem";

const Option = (props) => {
  let value, children;
  ({ value, children, ...props } = props);

  // return <option {...{ value, ...props }}>{children}</option>;
  return <option {...{ value, ...props }}>{children}</option>;
};

export default Option;
