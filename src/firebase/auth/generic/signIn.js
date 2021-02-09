import { firebase } from "../../../alt-config/firebase";

const signIn = (email = "test@thenetninja.co.uk", password = "test1234") => {
  console.log(email, password);

  // const signIn = (email, password) => {
  return new Promise((res, rej) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        res([true, userCredential]);
      })
      .catch((error) => {
        rej([false, error.message]);
      });
  });
};

export default signIn;
