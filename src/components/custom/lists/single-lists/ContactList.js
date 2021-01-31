import React from "react";
import ItemList from "../../../generic/lists/ItemList";
import ContactLineDisplayContents from "../../display-contents/ContactLineDisplayContents";

const ContactList = (props) => {
  let values, Container;
  ({ values, Container = React.Fragment } = props);

  return (
    <ItemList
      {...{ values, Container, Component: ContactLineDisplayContents }}
    />
  );
};
//
export default ContactList;
