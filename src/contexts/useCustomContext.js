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

  const fetchAll = (payload) => {
    dispatch({ type: "FETCH_ALL", payload });
  };

  const addToState = (payload) => {
    dispatch({ type: "ADD_TO_STATE", payload });
  };

  const removeFromState = (payload) => {
    dispatch({ type: "REMOVE_FROM_STATE", payload });
  };

  const addRemoveState = (payload) => {
    dispatch({ type: "ADD_REMOVE_STATE", payload });
  };

  const refresh = (payload) => {
    dispatch({ type: "REFRESH", payload });
  };

  return {
    items,
    remove,
    add,
    fetchAll,
    addToState,
    refresh,
    removeFromState,
    addRemoveState,
  };
};

export default useCustomContext;
