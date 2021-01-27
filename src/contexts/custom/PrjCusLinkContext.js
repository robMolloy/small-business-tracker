import React from "react";
import ContextProvider from "../ContextProvider";

const PrjCusLinkContext = React.createContext();

export const PrjCusLinkContextProvider = (props) => {
  return (
    <ContextProvider
      Context={PrjCusLinkContext}
      itemType="prjCusLink"
      {...props}
    />
  );
};

export default PrjCusLinkContext;
