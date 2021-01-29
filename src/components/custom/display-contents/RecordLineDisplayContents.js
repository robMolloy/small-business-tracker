import React from "react";
import GridItem from "../../generic/grids/GridItem";

const RecordLineDisplayContents = (props) => {
  let values;
  ({ values } = props);
  return (
    <>
      <GridItem xs={4}>{values.rec_timestamp_planned_start}</GridItem>
      <GridItem
        xs={4}
      >{`${values.rec_duration_qty} ${values.rec_duration_unit}}`}</GridItem>
      <GridItem xs={4}>{values.rec_total}</GridItem>
    </>
  );
};

export default RecordLineDisplayContents;
