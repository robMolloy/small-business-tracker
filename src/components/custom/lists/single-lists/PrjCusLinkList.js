import React from "react";
import PrjCusLinkLineDisplayContents from "../../display-contents/PrjCusLinkLineDisplayContents";
import ItemList from "../../../generic/lists/ItemList";

const PrjCusLinkList = (props) => {
  let values, Container;
  ({ values, Container = React.Fragment } = props);

  return (
    <ItemList
      {...{ values, Container, Component: PrjCusLinkLineDisplayContents }}
    />
  );
};

export default PrjCusLinkList;
