import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const Tablet = (props = {}) => {
  let children, className, color, Top;
  ({ children, className = "", Top, color = "primary", ...props } = props);

  const classes = makeStyles((theme) => {
    return {
      root: {
        backgroundColor: theme.palette[color].main,
        color: theme.palette[color].contrastText,
        borderRadius: theme.spacing(2),
        textAlign: "left",
      },
      text: {
        padding: theme.spacing(2),
        paddingTop: 0,
      },
      top: { display: "flex", justifyContent: "center" },
    };
  })();

  return (
    <div className={`${classes.root} ${className}`}>
      <div className={classes.top}>{Top}</div>
      <div className={classes.text}>{children}</div>
    </div>
  );
};

export default Tablet;
