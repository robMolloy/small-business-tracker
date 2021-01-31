import React from "react";
import ItemOptions from ".";
import RecordLineDisplayContents from "../../display-contents/RecordLineDisplayContents";

const RecordOptions = (props) => {
  let values;
  ({ values } = props);

  return (
    <ItemOptions values={values} DisplayContents={RecordLineDisplayContents} />
  );
};

export default RecordOptions;
