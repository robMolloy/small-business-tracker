import React from "react";
import Option from "../../generic/fields/Option";

const ItemOptions = (props) => {
  let values, DisplayContents;
  ({ values, DisplayContents } = props);

  return Object.entries(values).map(([id, item]) => (
    <Option key={id} value={id}>
      {DisplayContents({ values: item })}
    </Option>
  ));
};

export default ItemOptions;
