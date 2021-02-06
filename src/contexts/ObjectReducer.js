import db from "../alt-config/firebase";

const Reducer = (state, action = {}, itemType) => {
  const { payload, type } = action;
  switch (type) {
    case "ADD":
      console.log(state, action, itemType);

      const batch = db.batch();
      Object.entries(payload).forEach(([id, itm]) => {
        db.collection(`sbt_${itemType}`).doc(id).set(itm);
      });
      batch.commit();

      return { ...state, ...payload };

    case "REMOVE":
      let ids = Array.isArray(payload) ? payload : [payload];

      ids.forEach((id) => delete state[id]);
      return { ...state };

    default:
      return { ...state };
  }
};

export default Reducer;
