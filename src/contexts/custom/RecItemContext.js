import React from "react";
import ContextProvider from "./ContextProvider";

export const RecItemContext = React.createContext();

const RecItemContextProvider = () => {
  return <ContextProvider Context={Context} itemType="recItem" />;
};

export default RecItemContextProvider;
