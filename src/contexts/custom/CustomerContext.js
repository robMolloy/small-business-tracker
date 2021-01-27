import React from "react";
import ContextProvider from "../ContextProvider";

const CustomerContext = React.createContext();

export const CustomerContextProvider = (props) => {
  return (
    <ContextProvider Context={CustomerContext} itemType="customer" {...props} />
  );
};

export default CustomerContext;
