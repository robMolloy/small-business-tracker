import React from "react";
import db from "../alt-config/firebase";
import useSession from "../firebase/auth/generic/useSession";

const useCustomContext = (props) => {
  let Context, itemType, beforeAdd, beforeRemove;
  ({
    Context,
    itemType,
    beforeAdd = (rtn) => rtn,
    beforeRemove = (rtn) => rtn,
  } = props);

  const contextReturn = React.useContext(Context);
  const { items, dispatch } = contextReturn;

  const { uid } = useSession();

  const alwaysBeforeAdd = (payload) => {
    Object.entries(payload).forEach(([id, itm]) => {
      itm.uid = uid;
      payload[id] = itm;
    });
    return payload;
  };

  const remove = (payload) => {
    payload = beforeRemove(payload);
    dispatch({ type: "REMOVE", payload });
  };

  const addToState = (payload) => {
    payload = beforeAdd(payload);
    dispatch({ type: "ADD", payload });
  };

  const set = (payload) => {
    dispatch({ type: "SET", payload });
  };

  const add = (payload) => {
    payload = alwaysBeforeAdd(payload);

    const batch = db.batch();
    Object.entries(payload).forEach(([id, itm]) => {
      db.collection(`sbt_${itemType}`).doc(id).set(itm);
    });
    batch.commit();

    addToState(payload);
  };

  const addRemoveState = (payload) => {
    payload = beforeAdd(payload);
    dispatch({ type: "ADD_REMOVE_STATE", payload });
  };

  return { items, remove, add, addRemoveState, set };
};

export default useCustomContext;
