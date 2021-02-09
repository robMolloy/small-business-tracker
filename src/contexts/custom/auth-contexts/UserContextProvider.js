import React from "react";
import useAuth from "../../../firebase/auth/generic/useAuth";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  // const { user, isLoggedIn } = useAuth();
  const { user } = useAuth();

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
