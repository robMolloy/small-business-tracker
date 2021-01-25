import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import clsx from "clsx";

const Text = (props = {}) => {
  let children,
    className,
    align,
    xsOverride,
    gutterBottom,
    Component,
    underline,
    error;

  //
  ({
    children,
    className = "",
    align = "left",
    xsOverride = [],
    gutterBottom = false,
    Component = "p",
    underline = false,
    error = false,
    ...props
  } = props);

  const classes = makeStyles((theme) => ({
    root: {
      textAlign: align,

      borderBottom: underline ? `1px solid ${theme.palette.grey.main}` : "none",
      margin: 0,
      marginBottom: gutterBottom ? theme.spacing(2) : 0,
    },
    error: { color: theme.palette.error.main },
  }))();

  const xsClasses = xsOverride.map((opt) => `xs-style-${opt}`).join(" ");

  const newClasses = clsx(
    className,
    classes.root,
    xsClasses,
    error && classes.error
  );

  return (
    <Component className={newClasses} {...props}>
      {children}
    </Component>
  );
};

export default Text;
