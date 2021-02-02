import React from "react";

import GridContainer from "./GridContainer";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const FlexibleGrid = (props = {}) => {
  let array, className, alignItems, justify, wrap;
  ({
    array,
    className = "",
    alignItems = "center",
    justify = "space-between",
    wrap,
    ...props
  } = props);

  const classes = makeStyles((theme) => ({ root: {} }))();

  return (
    <GridContainer
      className={`${classes.root} ${className}`}
      {...{ alignItems, justify, wrap }}
      {...props}
    >
      {array.map((child, j) => (
        <Grid item key={j}>
          {child}
        </Grid>
      ))}
    </GridContainer>
  );
};

export default FlexibleGrid;
