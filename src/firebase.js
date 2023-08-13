import firebase from "firebase/compat/app"; // Import the main Firebase module
import "firebase/compat/firestore"; // Import the Firestore module
import "firebase/compat/auth"; // Import the Authentication module

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

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };