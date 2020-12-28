import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDCfOZLr8_AdCeEqvmcCTULgr6obDR9npI",
  authDomain: "facebook-clone-40520.firebaseapp.com",
  projectId: "facebook-clone-40520",
  storageBucket: "facebook-clone-40520.appspot.com",
  messagingSenderId: "280467655091",
  appId: "1:280467655091:web:930787cbe685283d4463c6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
