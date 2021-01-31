import React from "react";
import ItemOptions from ".";
import ContactLineDisplayContents from "../../display-contents/ContactLineDisplayContents";

const ContactOptions = (props) => {
  let values;
  ({ values } = props);

  return (
    <ItemOptions values={values} DisplayContents={ContactLineDisplayContents} />
  );
};

export default ContactOptions;
