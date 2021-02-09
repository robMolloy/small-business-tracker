import { firebase } from "../../../alt-config/firebase";

const signOut = () => {
  firebase.auth().signOut();
};

export default signOut;
