import React from "react";
import ContextProvider from "../ContextProvider";

const RecordContext = React.createContext();

export const RecordContextProvider = (props) => {
  return (
    <ContextProvider Context={RecordContext} itemType="record" {...props} />
  );
};

export default RecordContext;
