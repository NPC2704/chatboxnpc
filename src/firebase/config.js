import firebase from "firebase/compat/app";

import "firebase/compat/analytics";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAJGa3cScsKhZMb0Gxu_qchz-Y4C7DD2RU",
  authDomain: "chatreactjs-19e92.firebaseapp.com",
  databaseURL: "https://chatreactjs-19e92-default-rtdb.firebaseio.com",
  projectId: "chatreactjs-19e92",
  storageBucket: "chatreactjs-19e92.appspot.com",
  messagingSenderId: "193233299031",
  appId: "1:193233299031:web:a78bc3fa799cb3b8ac2512",
  measurementId: "G-9QHYXM9EMS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === "localhost") {
  // auth.useEmulator("http://localhost:9099");
  db.useEmulator("localhost", "8080");
}

export { db, auth };
export default firebase;
