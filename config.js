import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyD0oytLL6tN-Zh1tyaYmrQltIVsvnj2qUc",
  authDomain: "projecttaskk-d4b54.firebaseapp.com",
  projectId: "projecttaskk-d4b54",
  storageBucket: "projecttaskk-d4b54.appspot.com",
  messagingSenderId: "753197348171",
  appId: "1:753197348171:web:dc1ffd344edc0864bca4ce"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();