import firebase from "firebase";
import "firebase/auth";
import "firebase/database";

const config = {
    apiKey: "AIzaSyDbAWEcvhEYypD-9rnS4rkC2sQskKsbRqo",
    authDomain: "learning-react-base.firebaseapp.com",
    databaseURL: "https://learning-react-base-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "learning-react-base",
    storageBucket: "learning-react-base.appspot.com",
    messagingSenderId: "38303539237",
    appId: "1:38303539237:web:12054b6301911331435fcc"
};

firebase.initializeApp(config);