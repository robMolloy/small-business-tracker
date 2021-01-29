import React from "react";
import GridItem from "../../generic/grids/GridItem";

const ProjectLineDisplayContents = (props) => {
  let values;
  ({ values } = props);

  return (
    <>
      <GridItem xs={3}>{values.prj_address_1} </GridItem>
      <GridItem xs={3}>{`(${values.prj_acronym})`}</GridItem>
      <GridItem xs={4}></GridItem>
      <GridItem xs={2}></GridItem>
    </>
  );
};

export default ProjectLineDisplayContents;
