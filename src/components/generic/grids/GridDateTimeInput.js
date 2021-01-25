import React, { forwardRef } from "react";
import DateTimeInput from "../fields/DateTimeInput";
import GridItem from "./GridItem";

const GridInput = forwardRef((props, ref) => {
  let grid;
  ({ grid = { xs: 12 }, ...props } = props);

  return (
    <GridItem {...grid}>
      <DateTimeInput ref={ref} {...props} />
    </GridItem>
  );
});

export default GridInput;
