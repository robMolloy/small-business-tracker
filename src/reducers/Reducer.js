const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, ...action.items };

    case "REMOVE":
      delete state[action.id];
      return { ...state };

    default:
      return { ...state };
  }
};

export default Reducer;
