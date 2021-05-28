import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyCOp4BxO9VOATAB22wPJDyOFUhj-lh9f2c",
//   authDomain: "amz-clone-b9eab.firebaseapp.com",
//   databaseURL: "https://amz-clone-b9eab.firebaseio.com",
//   projectId: "amz-clone-b9eab",
//   storageBucket: "amz-clone-b9eab.appspot.com",
//   messagingSenderId: "287079566892",
//   appId: "1:287079566892:web:f06f6fd05fd1b491a30b89",
//   measurementId: "G-W8LZDEYFJQ",
// };


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVb2IHJFhZLiqAerBLlaGo3QHWc4oreOA",
  authDomain: "clone-e8776.firebaseapp.com",
  projectId: "clone-e8776",
  storageBucket: "clone-e8776.appspot.com",
  messagingSenderId: "721572676899",
  appId: "1:721572676899:web:0c4d9ba0744387e58f7896",
  measurementId: "G-VDHPCHZRD3"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
