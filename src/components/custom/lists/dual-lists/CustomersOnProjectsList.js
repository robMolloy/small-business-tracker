import React from "react";

import DualItemList from "../../../generic/lists/DualItemList";

import ProjectLineDisplayContents from "../../display-contents/ProjectLineDisplayContents";
import CustomerList from "../single-lists/CustomerList";

const CustomersOnProjectsList = (props) => {
  let values;
  ({ values } = props);

  return (
    <DualItemList
      {...{
        values: values,
        SummaryComponent: ProjectLineDisplayContents,
        DetailsComponent: CustomerList,
      }}
    />
  );
};

export default CustomersOnProjectsList;
