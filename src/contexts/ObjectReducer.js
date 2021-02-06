import db from "../alt-config/firebase";

const Reducer = async (state, action = {}, itemType) => {
  const { payload, type } = action;
  switch (type) {
    case "ADD":
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

    case "FETCH_ALL":
      const newState = {};
      const snapshot = await db.collection(`sbt_${itemType}`).get();
      snapshot.docs.forEach((doc) => (newState[doc.id] = doc.data()));
      return newState;

    default:
      console.log("default - I thought this was never called ????????????????");
      return { ...state };
  }
};

export default Reducer;
