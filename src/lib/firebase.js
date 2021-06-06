import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from '../seed'
const config = {
  authDomain:process.env.REACT_APP_AuthDomain,
projectId:process.env.REACT_APP_POJECT_ID,
storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
messagingSenderId:process.env.REACT_APP_MESSAGEING_SENDER,
appId:process.env.REACT_APP_APP_ID

};


  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
 const firebase = Firebase.initializeApp(config);
 const { FieldValue } = Firebase.firestore;
//here is where i want to call  seetfile (only Once!)
// seedDatabase(firebase);

export { firebase, FieldValue };
