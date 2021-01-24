import React, { forwardRef } from "react";
import Text from "../text/Text";
import GridItem from "./GridItem";

const GridInput = (props) => {
  let children, grid;
  ({ children, grid = { xs: 12 }, ...props } = props);

  return (
    <GridItem {...grid}>
      <Text {...props}>{children}</Text>
    </GridItem>
  );
};

export default GridInput;
