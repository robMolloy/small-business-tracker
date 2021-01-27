const Reducer = (state, action = {}) => {
  const { payload, type } = action;
  switch (type) {
    case "ADD":
      return [...state, ...payload];

    case "REMOVE":
      let indexes = Array.isArray(payload) ? payload : [payload];

      indexes.forEach((index) => delete state[index]);
      return [...state];

    default:
      return [...state];
  }
};

export default Reducer;
