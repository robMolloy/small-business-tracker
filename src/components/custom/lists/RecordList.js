import React from "react";
import ItemList from "../../generic/lists/ItemList";
import RecordLineDisplayContents from "../display-contents/RecordLineDisplayContents";

const RecordList = (props) => {
  let values, Container;
  ({ values, Container = React.Fragment } = props);

  return (
    <ItemList
      {...{ values, Container, Component: RecordLineDisplayContents }}
    />
  );
};

export default RecordList;
