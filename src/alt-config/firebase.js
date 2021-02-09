import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvmIPVOSWyLkgSxLKX7b_LlXjgfU5IF_0",
  authDomain: "sbt-test-1197e.firebaseapp.com",
  projectId: "sbt-test-1197e",
  storageBucket: "sbt-test-1197e.appspot.com",
  messagingSenderId: "106285138970",
  appId: "1:106285138970:web:ccc3eb727a1c2e8d883da3",
};

const actionCodeSettings = {
  handleCodeInApp: true,
  url: "https://romolo.co.uk/projects/sites/sbt/",
  iOS: {
    bundleId: "com.romolo.ios",
  },
  android: {
    packageName: "com.romolo.android",
    installApp: true,
    minimumVersion: "12",
  },
  dynamicLinkDomain: "romolo.page.link",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

window.db = db;

export { firebase, actionCodeSettings };
export default db;
