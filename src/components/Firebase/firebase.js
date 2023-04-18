import "firebase/compat/database";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyA4qixnDFrK9XVTAE-4RgcYJumOuRsQ_3U",
  authDomain: "health-wise-577ba.firebaseapp.com",
  projectId: "health-wise-577ba",
  storageBucket: "health-wise-577ba.appspot.com",
  messagingSenderId: "654837204932",
  appId: "1:654837204932:web:b5816d9a067124d18b4691",
  measurementId: "G-S7PC7CKPGK",
};

//configuring the firebase database and exporting it to be used in the react app
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
