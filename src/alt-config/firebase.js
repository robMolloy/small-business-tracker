import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvmIPVOSWyLkgSxLKX7b_LlXjgfU5IF_0",
  authDomain: "sbt-test-1197e.firebaseapp.com",
  projectId: "sbt-test-1197e",
  storageBucket: "sbt-test-1197e.appspot.com",
  messagingSenderId: "106285138970",
  appId: "1:106285138970:web:ccc3eb727a1c2e8d883da3",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

window.db = db;

export default db;
