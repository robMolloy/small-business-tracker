import React from "react";
import useCustomContext from "./useCustomContext";
import GenericContextProvider from "./ContextProvider";

const CreateContextTrio = (props) => {
  let itemType, varType;
  ({ itemType, varType } = props);

  const Context = React.createContext();

  const Provider = ({ children }) => (
    <GenericContextProvider {...{ children, Context, varType, itemType }} />
  );

  const useContext = () => useCustomContext({ Context });

  return { Context, Provider, useContext };
};

export default CreateContextTrio;
