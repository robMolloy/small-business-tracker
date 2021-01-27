import React from "react";
import ContextProvider from "../ContextProvider";

const ContactContext = React.createContext();

export const ContactContextProvider = (props) => {
  return (
    <ContextProvider Context={ContactContext} itemType="contact" {...props} />
  );
};

export default ContactContext;
