import React from "react";
import mightyStorage from "../classes/mightyStorage";
import config from "../config";

import ArrayReducer from "./ArrayReducer";
import NumberReducer from "./NumberReducer";
import ObjectReducer from "./ObjectReducer";

const storageTypeSelector = { object: {}, array: [], number: 0 };
const reducerSelector = {
  object: ObjectReducer,
  array: ArrayReducer,
  number: NumberReducer,
};

const ContextProvider = (props) => {
  let itemType, Context, children, varType, afterSetState;
  ({
    itemType,
    Context,
    children,
    varType,
    afterSetState = mightyStorage.setItem,
  } = props);

  let storageType = storageTypeSelector[varType];
  let Reducer = reducerSelector[varType];

  const storageLocation = `${config.project.acronym}_${itemType}`;

  const initStorage = () => mightyStorage.getItem(storageLocation, storageType);
  console.log(itemType, initStorage());
  const [items, dispatch] = React.useReducer(Reducer, initStorage());

  React.useEffect(() => {
    afterSetState(storageLocation, items);
  }, [storageLocation, afterSetState, items]);

  return (
    <Context.Provider value={{ items, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
