import React from "react";
import mightyStorage from "../classes/mightyStorage";
import config from "../config";

import ArrayReducer from "./ArrayReducer";
import NumberReducer from "./NumberReducer";
import ObjectReducer from "./ObjectReducer";

const ContextProvider = (props) => {
  let itemType, Context, children, varType, afterSetState;
  ({
    itemType,
    Context,
    children,
    varType,
    afterSetState = mightyStorage.setItem,
  } = props);

  let storageType = { object: {}, array: [], number: 0 }[varType];
  let Reducer = {
    object: ObjectReducer,
    array: ArrayReducer,
    number: NumberReducer,
  }[varType];

  const storageLocation = `${config.project.acronym}_${itemType}`;

  const initStorage = () => mightyStorage.getItem(storageLocation, storageType);
  const [items, dispatch] = React.useReducer(Reducer, initStorage());

  React.useEffect(() => {
    afterSetState(storageLocation, items);
  }, [storageLocation, afterSetState, items]);

  return (
    <Context.Provider value={{ items, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
