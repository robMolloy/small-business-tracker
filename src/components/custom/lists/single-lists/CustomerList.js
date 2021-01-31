import React from "react";
import CustomerLineDisplayContents from "../../display-contents/CustomerLineDisplayContents";
import ItemList from "../../../generic/lists/ItemList";

const CustomerList = (props) => {
  let values, Container;
  ({ values, Container = React.Fragment } = props);

  return (
    <ItemList
      {...{ values, Container, Component: CustomerLineDisplayContents }}
    />
  );
};

export default CustomerList;
