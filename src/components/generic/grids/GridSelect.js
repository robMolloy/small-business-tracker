import React, { forwardRef } from "react";
import Select from "../fields/Select";
import GridItem from "./GridItem";

const GridSelect = forwardRef((props, ref) => {
  let grid, children;
  ({ grid, children, ...props } = props);

  return (
    <GridItem {...grid}>
      <Select ref={ref} {...props}>
        {children}
      </Select>
    </GridItem>
  );
});

export default GridSelect;
