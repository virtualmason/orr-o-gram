import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed'


const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
//here is where i want to call  seetfile (only Once!)
// seedDatabase(firebase);

export {firebase, FieldValue }
