import { firebase } from "../../../alt-config/firebase";

const createUser = (email, password) => {
  return new Promise((res, rej) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        res([true, userCredential]);
      })
      .catch((error) => {
        rej([false, error.message]);
      });
  });
};

export default createUser;
