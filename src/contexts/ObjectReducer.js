import db from "../alt-config/firebase";

const Reducer = async (state, action = {}, itemType) => {
  const { payload, type } = action;
  let ids;

  console.log(type, itemType, state, payload);

  switch (type) {
    case "ADD":
      const batch = db.batch();
      Object.entries(payload).forEach(([id, itm]) => {
        db.collection(`sbt_${itemType}`).doc(id).set(itm);
      });
      batch.commit();

      return { ...state, ...payload };

    case "REMOVE":
      ids = Array.isArray(payload) ? payload : [payload];

      ids.forEach((id) => delete state[id]);
      return { ...state };

    case "REMOVE_FROM_STATE":
      ids = Array.isArray(payload) ? payload : [payload];

      ids.forEach((id) => delete state[id]);
      return { ...state };

    case "ADD_TO_STATE":
      // console.log(state);
      return { ...state, ...payload };

    case "ADD_REMOVE_STATE":
      const { add, remove } = payload;

      ids = Array.isArray(payload) ? remove : [remove];
      ids.forEach((id) => delete state[id]);

      // console.log(state);
      return { ...state, ...add };

    case "FETCH_ALL":
      const newState = {};
      // const snapshot = await db.collection(`sbt_${itemType}`).get();
      // snapshot.docs.forEach((doc) => (newState[doc.id] = doc.data()));
      return newState;

    case "REFRESH":
      return { ...state };

    default:
      console.log("default - I thought this was never called ????????????????");
      return { ...state };
  }
};

export default Reducer;
