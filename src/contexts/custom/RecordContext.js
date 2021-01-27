import React from "react";
import ContextProvider from "./ContextProvider";

export const RecordContext = React.createContext();

const RecordContextProvider = () => {
  return <ContextProvider Context={Context} itemType="record" />;
};

export default RecordContextProvider;
