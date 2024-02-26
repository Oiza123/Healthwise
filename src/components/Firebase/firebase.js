import "firebase/compat/database";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyA2KThu8F-rGqp5yh4NAipQd3IGoGGBpjs",
  authDomain: "health-wise-f5b51.firebaseapp.com",
  projectId: "health-wise-f5b51",
  storageBucket: "health-wise-f5b51.appspot.com",
  messagingSenderId: "912536736933",
  appId: "1:912536736933:web:e770f73848fc991d75a94c",
};

//configuring the firebase database and exporting it to be used in the react app
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
