import React from "react";
import ItemOptions from ".";
import PrjCusLinkLineDisplayContents from "../../display-contents/PrjCusLinkLineDisplayContents";

const PrjCusLinkOptions = (props) => {
  let values;
  ({ values } = props);

  return (
    <ItemOptions
      values={values}
      DisplayContents={PrjCusLinkLineDisplayContents}
    />
  );
};

export default PrjCusLinkOptions;
