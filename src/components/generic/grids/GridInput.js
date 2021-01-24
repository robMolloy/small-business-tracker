import React, { forwardRef } from "react";
import Input from "../fields/Input";
import GridItem from "./GridItem";

const GridInput = forwardRef((props, ref) => {
  let grid;
  ({ grid = { xs: 12 }, ...props } = props);

  return (
    <GridItem {...grid}>
      <Input ref={ref} {...props} />
    </GridItem>
  );
});

export default GridInput;
