import Firebase from 'fitebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
apiKey: "AIzaSyBXbLzdhzXDAKkTeZnKFeu2UFaMIfYOXjw",
authDomain: "orr-o-gram.firebaseapp.com",
projectId: "orr-o-gram",
storageBucket: "orr-o-gram.appspot.com",
messagingSenderId: "489144342309",
appId: "1:489144342309:web:c5f80ae4580e6b3233accc"
};
const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
//here is where i want to call  seetfile (only Once!)
//seadatabase(firebae)

export {firebase, FieldValue }
