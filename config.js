import * as firebase from 'firebase';
import { exp } from 'react-native-reanimated';
// Import the functions you need from the SDKs you need
require ('@firebase/firestore');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjp7h63QTf1HKNA5djqTX80JJLqFSC5FU",
  authDomain: "willy-app-72ca7.firebaseapp.com",
  databaseURL:"https://console.firebase.google.com/project/undefined/firestore/data/",
  projectId: "willy-app-72ca7",
  storageBucket: "willy-app-72ca7.appspot.com",
  messagingSenderId: "939503404612",
  appId: "1:939503404612:web:470f492fcf48d24b1d1e11"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();