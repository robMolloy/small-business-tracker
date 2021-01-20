import React from "react";

import MUIBox from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Container from "../containers/Container";

const Section = (props = {}) => {
  let children, className, withContainer, color;
  ({
    children,
    className = "",
    withContainer = false,
    color = "mono",
    ...props
  } = props);

  const Component = withContainer ? Container : React.Fragment;

  const classes = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
      color: theme.palette?.[color]?.contrastText ?? "#000000",
      backgroundColor: theme.palette?.[color]?.main ?? "#FFFFFF",
    },
  }))();

  // console.log(useTheme());

  return (
    <MUIBox className={`${classes.root} ${className}`} {...props}>
      <Component>{children}</Component>
    </MUIBox>
  );
};

export default Section;
