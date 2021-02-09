import React from "react";
import useSession from "../../firebase/auth/generic/useSession";
import signIn from "../../firebase/auth/generic/signIn";
import signOut from "../../firebase/auth/generic/signOut";

const Login = () => {
  const { isSignedIn } = useSession();

  return (
    <>
      You are currently signed {isSignedIn ? "in" : "out"}
      {!isSignedIn && <button onClick={() => signIn()}>SignInnn</button>}
      {isSignedIn && <button onClick={() => signOut()}>SignOut</button>}
    </>
  );
};

export default Login;
