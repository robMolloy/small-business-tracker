import React from "react";
import ContextProvider from "./ContextProvider";

export const ContactContext = React.createContext();

const ContactContextProvider = () => {
  return <ContextProvider Context={Context} itemType="contact" />;
};

export default ContactContextProvider;
