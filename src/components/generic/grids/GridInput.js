import React, { forwardRef } from "react";
import Input from "../fields/Input";
import GridItem from "./GridItem";

const GridInput = forwardRef((props, ref) => {
  let grid;
  ({ grid, ...props } = props);

  return (
    <GridItem {...grid}>
      <Input ref={ref} {...props} />
    </GridItem>
  );
});

export default GridInput;
