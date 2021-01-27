import React from "react";
import ContextProvider from "../ContextProvider";

const RecItemContext = React.createContext();

export const RecItemContextProvider = (props) => {
  return (
    <ContextProvider Context={RecItemContext} itemType="recItem" {...props} />
  );
};

export default RecItemContext;
