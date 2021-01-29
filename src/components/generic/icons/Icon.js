import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";

const Icon = React.forwardRef((props, ref) => {
  let Component, className;
  ({ Component, className, ...props } = props);

  const classes = makeStyles(() => ({ root: { cursor: "pointer" } }))();

  return (
    <Component
      className={`${className} ${classes.root}`}
      {...{ ...props, ref }}
    />
  );
});

export default Icon;
