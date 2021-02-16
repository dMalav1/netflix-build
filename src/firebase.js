// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBIUoh6CQbnj-YSyubOn6Mcu1pZknpB55U",
  authDomain: "netflix-clone-c7d4e.firebaseapp.com",
  projectId: "netflix-clone-c7d4e",
  storageBucket: "netflix-clone-c7d4e.appspot.com",
  messagingSenderId: "320512517990",
  appId: "1:320512517990:web:4736a58bca0f73a22f4aa7",
  measurementId: "G-CN08WFVT05",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }; //can be many
export default db; //export default  should be one
