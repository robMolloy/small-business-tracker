const Reducer = (state, action = {}) => {
  const { payload, type } = action;
  switch (type) {
    case "ADD":
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
