import React from "react";
import RecItemContext from "../../../../contexts/custom/single-contexts/RecItemContext";
import RecItemOptions from "./RecItemOptions";

const AllRecItemOptions = (props) => {
  let { items } = RecItemContext.useContext();

  return <RecItemOptions values={items} />;
};

export default AllRecItemOptions;
