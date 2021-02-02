import React from "react";
import GridItem from "../grids/GridItem";
import IconButton from "./IconButton";
import AddToListIcon from "../icons/AddToListIcon";
import ButtonPrimary from "./ButtonPrimary";

const MultiformButtonBar = (props) => {
  let addProps, submitProps, middle;
  ({
    addProps = {},
    submitProps = {},
    middle = <GridItem xs={8}></GridItem>,
  } = props);

  return (
    <>
      <GridItem xs={2}>
        <IconButton {...addProps}>
          <AddToListIcon />
        </IconButton>
      </GridItem>
      {middle}
      <GridItem xs={2}>
        <ButtonPrimary type="submit" {...submitProps}>
          Submit
        </ButtonPrimary>
      </GridItem>
    </>
  );
};

export default MultiformButtonBar;
