import React from "react";
import DualItemList from "../../../generic/lists/DualItemList";
import ProjectLineDisplayContents from "../../display-contents/ProjectLineDisplayContents";
import RecordList from "../single-lists/RecordList";

const RecordsOnProjectsList = (props) => {
  let values;
  ({ values } = props);

  return (
    <DualItemList
      {...{
        values: values,
        SummaryComponent: ProjectLineDisplayContents,
        DetailsComponent: RecordList,
      }}
    />
  );
};

export default RecordsOnProjectsList;
