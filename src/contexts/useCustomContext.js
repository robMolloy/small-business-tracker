import React from "react";

const useCustomContext = (props) => {
  let Context, beforeAdd, beforeRemove;
  ({ Context, beforeAdd = (rtn) => rtn, beforeRemove = (rtn) => rtn } = props);

  const contextReturn = React.useContext(Context);
  const { items, dispatch } = contextReturn;

  const remove = (payload) => {
    payload = beforeRemove(payload);
    dispatch({ type: "REMOVE", payload });
  };

  const add = (payload) => {
    payload = beforeAdd(payload);
    dispatch({ type: "ADD", payload });
  };

  return { items, remove, add };
};

export default useCustomContext;
