import React from "react";
import DualItemList from "../../../generic/lists/DualItemList";
import RecordLineDisplayContents from "../../display-contents/RecordLineDisplayContents";
import RecItemList from "../single-lists/RecItemList";

const RecItemsOnRecordsList = (props) => {
  let values;
  ({ values } = props);

  return (
    <DualItemList
      {...{
        values: values,
        SummaryComponent: RecordLineDisplayContents,
        DetailsComponent: RecItemList,
      }}
    />
  );
};

export default RecItemsOnRecordsList;
