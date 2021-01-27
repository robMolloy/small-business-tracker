const IntReducer = (state, action = {}) => {
  const { payload, type } = action;

  switch (type) {
    case "ADD":
      return state + payload;

    case "REMOVE":
      return state - payload;

    default:
      return state;
  }
};

export default IntReducer;
