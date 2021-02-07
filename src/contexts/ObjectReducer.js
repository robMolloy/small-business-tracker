//  import db from "../alt-config/firebase";

const Reducer = (state, action = {}, itemType) => {
  const { payload, type } = action;
  let ids;

  switch (type) {
    case "SET":
      return payload;

    case "ADD":
      // const batch = db.batch();
      // Object.entries(payload).forEach(([id, itm]) => {
      //   db.collection(`sbt_${itemType}`).doc(id).set(itm);
      // });
      // batch.commit();
      return { ...state, ...payload };

    case "REMOVE":
      ids = Array.isArray(payload) ? payload : [payload];

      ids.forEach((id) => delete state[id]);
      return { ...state };

    case "ADD_REMOVE_STATE":
      const { add, remove } = payload;

      ids = Array.isArray(payload) ? remove : [remove];
      ids.forEach((id) => delete state[id]);

      // console.log(state);
      return { ...state, ...add };

    default:
      return { ...state };
  }
};

export default Reducer;
