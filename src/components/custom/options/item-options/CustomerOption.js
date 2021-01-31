import React from "react";
import ItemOptions from ".";
import CustomerLineDisplayContents from "../../display-contents/CustomerLineDisplayContents";

const CustomerOptions = (props) => {
  let values;
  ({ values } = props);

  return (
    <ItemOptions
      values={values}
      DisplayContents={CustomerLineDisplayContents}
    />
  );
};

export default CustomerOptions;
