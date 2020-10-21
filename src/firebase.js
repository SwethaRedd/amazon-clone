import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYCd0141P066zRSSOBnX9FN6tzjg49gkM",
  authDomain: "clone-4b8e2.firebaseapp.com",
  databaseURL: "https://clone-4b8e2.firebaseio.com",
  projectId: "clone-amazon",
  storageBucket: "clone-amazon.appspot.com",
  messagingSenderId: "692896337696",
  appId: "1:692896337696:web:168aebc20a25c6932fd145",
  measurementId: "G-EXSBCC6P64"
};

// 1. initialize the app with firebase config
const firebaseApp = firebase.initializeApp(firebaseConfig);

// 2. initialize db
const db = firebaseApp.firestore();

// 3. initialize auth
const auth = firebase.auth(); // this gives us a variable , that we can use to handle all the signing in and everything like that.


export {db, auth};