import React from "react";
import RecItemLineDisplayContents from "../display-contents/RecItemLineDisplayContents";
import ItemList from "../../generic/lists/ItemList";

const RecItemList = (props) => {
  let values, Container;
  ({ values, Container = React.Fragment } = props);

  return (
    <ItemList
      {...{ values, Container, Component: RecItemLineDisplayContents }}
    />
  );
};

export default RecItemList;
