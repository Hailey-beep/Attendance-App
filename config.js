 import firebase from "firebase";

var firebaseConfig = {
  
  //Insert database Config
 
  };
  // Initialize Firebase
  if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  }
//initialize your database

  export default firebase.database()
