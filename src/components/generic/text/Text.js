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
    error,
    lineHeight,
    fontWeight,
    indentLeft,
    indentRight,
    before;

  ({
    children,
    className = "",
    align = "left",
    xsOverride = [],
    gutterBottom = 0,
    Component = "p",
    underline = false,
    error = false,
    lineHeight = 4,
    fontWeight = "normal",
    indentLeft = 0,
    indentRight = 0,
    before = "",
    ...props
  } = props);

  const classes = makeStyles((theme) => ({
    root: {
      textAlign: align,
      fontWeight: fontWeight,
      borderBottom: underline ? `1px solid ${theme.palette.grey.main}` : "none",
      margin: 0,
      marginBottom: theme.spacing(gutterBottom),
      marginLeft: `${theme.spacing(indentLeft)}px`,
      marginRight: `${theme.spacing(indentRight)}px`,
      lineHeight: `${theme.spacing(lineHeight)}px`,
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
      {before}
      {children}
    </Component>
  );
};

export default Text;
