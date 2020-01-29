import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

// const settings = {timestampsInSnapshots: true};

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCgfnCnG7vcVPsD1dcEpsuWiZnLspCnGdU",
    authDomain: "wuhan2020-oversea.firebaseapp.com",
    databaseURL: "https://wuhan2020-oversea.firebaseio.com",
    projectId: "wuhan2020-oversea",
    storageBucket: "wuhan2020-oversea.appspot.com",
    messagingSenderId: "907909806454",
    appId: "1:907909806454:web:67c5d3585498f003596257",
    measurementId: "G-503BJLK3C3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

const firestore = firebase.firestore();

export const firestoreDb = firestore