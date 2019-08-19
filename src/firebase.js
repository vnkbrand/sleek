import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


var firebaseConfig = {
  apiKey: "AIzaSyBlgpsKahSxkgGQF4phoKZsWDL0D5K2HJg",
  authDomain: "sleek-93c86.firebaseapp.com",
  databaseURL: "https://sleek-93c86.firebaseio.com",
  projectId: "sleek-93c86",
  storageBucket: "sleek-93c86.appspot.com",
  messagingSenderId: "849182812976",
  appId: "1:849182812976:web:f8946eafb2341e35"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;