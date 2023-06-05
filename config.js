import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {const firebaseConfig = {
  apiKey: "AIzaSyASFK_I2AWAqED-flF0NxKerMpHcHNRd6g",
  authDomain: "votecomnosco.firebaseapp.com",
  databaseURL: "https://votecomnosco-default-rtdb.firebaseio.com",
  projectId: "votecomnosco",
  storageBucket: "votecomnosco.appspot.com",
  messagingSenderId: "438093618520",
  appId: "1:438093618520:web:dda2e2cf4db8ea8a98d92d"
};

};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
