import React from "react";
import PrjCusLinkContext from "../../../../contexts/custom/single-contexts/PrjCusLinkContext";
import PrjCusLinkOptions from "./PrjCusLinkOptions";

const AllPrjCusLinkOptions = (props) => {
  let { items } = PrjCusLinkContext.useContext();

  return <PrjCusLinkOptions values={items} />;
};

export default AllPrjCusLinkOptions;
