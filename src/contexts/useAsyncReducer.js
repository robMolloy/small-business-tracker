import React from "react";

function useAsyncReducer(reducer, initState, itemType = "") {
  const [state, setState] = React.useState(initState);

  const dispatchState = async (action) =>
    setState(await reducer(state, action, itemType));

  return [state, dispatchState];
}

export default useAsyncReducer;
