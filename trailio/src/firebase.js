import firebase from 'firebase';

const config = {
   apiKey: "AIzaSyDrpC3FtrIXLp-H2LIbAacjwn__Jsg3OKY",
   authDomain: "trail-tracker-70d44.firebaseapp.com",
   projectId: "trail-tracker-70d44",
   storageBucket: "trail-tracker-70d44.appspot.com",
   messagingSenderId: "15165320253",
   appId: "1:15165320253:web:6722e76dcb3723a49a8e54"
 };
 // Initialize Firebase
firebase.initializeApp(config);

export default firebase;