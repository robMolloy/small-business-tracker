import React from "react";
import GridItem from "../../generic/grids/GridItem";

const PrjCusLinkLineDisplayContents = (props) => {
  let values;
  ({ values } = props);

  return (
    <>
      <GridItem xs={6}>{values.pcl_cus_id}</GridItem>
      <GridItem xs={6}>{values.pcl_prj_id}</GridItem>
    </>
  );
};

export default PrjCusLinkLineDisplayContents;
