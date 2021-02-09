import React from "react";
import UserContext from "../../../contexts/custom/auth-contexts/UserContext";

const useSession = () => {
  const contextRtn = React.useContext(UserContext);
  const { user } = contextRtn;

  return { user, isSignedIn: !!user };
};

export default useSession;
