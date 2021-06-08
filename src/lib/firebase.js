import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from '../seed'
const config = {};
// Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;Í
export { firebase, FieldValue };
