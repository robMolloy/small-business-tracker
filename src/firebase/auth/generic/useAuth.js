import React from "react";
import { firebase } from "../../../alt-config/firebase";

const useAuth = () => {
  const [state, setState] = React.useState(() => {
    const user = firebase.auth().currentUser;
    const initializing = !user;
    const isLoggedIn = !!user;

    return { initializing, user, isLoggedIn };
  });

  const onChange = (user) => {
    setState({ initializing: false, user, isLoggedIn: !!user });
  };

  React.useEffect(() => {
    // listen for auth state changes
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange);

    // unsubscribe to the listener when unmounting
    return () => unsubscribe();
  }, []);

  return state;
};

export default useAuth;
