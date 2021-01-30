import React from "react";
import RecordContext from "../../../contexts/custom/RecordContext";
import RecordOptions from "./RecordOptions";

const AllRecordOptions = (props) => {
  let { items } = RecordContext.useContext();

  return <RecordOptions values={items} />;
};

export default AllRecordOptions;
