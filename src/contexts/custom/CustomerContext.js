import React from "react";
import ContextProvider from "./ContextProvider";

export const CustomerContext = React.createContext();

const CustomerContextProvider = () => {
  return <ContextProvider Context={Context} itemType="customer" />;
};

export default CustomerContextProvider;
