import React from "react";
import GridItem from "../../generic/grids/GridItem";

const CustomerLineDisplayContents = (props) => {
  let values;
  ({ values } = props);

  return (
    <>
      <GridItem>{`${values.cus_first_name} ${values.cus_last_name}`}</GridItem>
    </>
  );
};

export default CustomerLineDisplayContents;
