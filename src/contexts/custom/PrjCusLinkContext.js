import React from "react";
import ContextProvider from "./ContextProvider";

export const PrjCusLinkContext = React.createContext();

const PrjCusLinkContextProvider = () => {
  return <ContextProvider Context={Context} itemType="prjCusLink" />;
};

export default PrjCusLinkContextProvider;
