// import React from "react";
// import useCustomContext from "../../useCustomContext";
// import GenericContextProvider from "../../ContextProvider";

import CreateContextTrio from "../../CreateContextTrio";

export default CreateContextTrio({
  itemType: "customer",
  varType: "object",
});

// const Context = React.createContext();

// const Provider = ({ children }) => (
//   <GenericContextProvider {...{ children, Context, varType, itemType }} />
// );

// const useContext = () => useCustomContext({ Context, beforeAdd, beforeRemove });

// export { Context, Provider, useContext };
