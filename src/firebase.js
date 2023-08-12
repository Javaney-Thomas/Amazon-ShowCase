import { auth, db } from "./firebase";
import firebase from './firebase';
//iort firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8zRGdDsGKxs6O-UZoCcGd0tFxx7Om5CE",
  authDomain: "clone-b3542.firebaseapp.com",
  projectId: "clone-b3542",
  storageBucket: "clone-b3542.appspot.com",
  messagingSenderId: "19225431782",
  appId: "1:19225431782:web:6576f5cb0abdb789bd3527",
  measurementId: "G-MX6JQGHZN2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//const db = firebaseApp.firestore(); //firestore is the real-time db in fb
//const auth = firebase.auth(); //gives us a variable to handle sign-ins etc


export { db, auth };
