import React from "react";
import UserContext from "../../../contexts/custom/auth-contexts/UserContext";

const useSession = () => {
  const contextRtn = React.useContext(UserContext);
  const { user } = contextRtn;

  const isSignedIn = !!user;
  const uid = user?.uid ?? false;
  const email = user?.email ?? false;
  const emailVerified = user?.emailVerified ?? false;
  const isVerifiedSignIn = isSignedIn && emailVerified;
  const isUnverifiedSignIn = isSignedIn && !emailVerified;

  return {
    user,
    uid,
    isSignedIn,
    email,
    emailVerified,
    isVerifiedSignIn,
    isUnverifiedSignIn,
  };
};

export default useSession;
