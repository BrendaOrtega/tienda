
import * as firebase from 'firebase';

// Initialize Firebase
let config = {
    apiKey: "AIzaSyC1fUdJQshJeopZ6_BQFArwxE5DbXeZdGk",
    authDomain: "e-commerce-b0a76.firebaseapp.com",
    databaseURL: "https://e-commerce-b0a76.firebaseio.com",
    projectId: "e-commerce-b0a76",
    storageBucket: "e-commerce-b0a76.appspot.com",
    messagingSenderId: "762521478850"
};

  // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyCgEBgWpBbzOAJGuS5pWDIBCAaJ7LUfV88",
  //   authDomain: "hackaton-b4fd1.firebaseapp.com",
  //   databaseURL: "https://hackaton-b4fd1.firebaseio.com",
  //   projectId: "hackaton-b4fd1",
  //   storageBucket: "hackaton-b4fd1.appspot.com",
  //   messagingSenderId: "360798458585"
  // };

firebase.initializeApp(config);

export default firebase;