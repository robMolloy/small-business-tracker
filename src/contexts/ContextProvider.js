import React from "react";
import Reducer from "../reducers/Reducer";
import mightyStorage from "../classes/mightyStorage";
import config from "../config";

const ContextProvider = (props) => {
  let itemType, Context;
  ({ itemType, Context } = props);

  const storageLocation = `${config.project.acronym}_${itemType}`;

  const initStorage = () => mightyStorage.getItem(storageLocation, {});
  // const setStorage = ;

  const [items, dispatch] = React.useReducer(Reducer, initStorage());

  React.useEffect(() => mightyStorage.setItem(storageLocation, items), [
    setStorage,
    items,
  ]);

  return (
    <Context.Provider value={{ items, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
