import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDF8WWrDu-ZeOdOGz3dN8ykVt4E_vBUAi0",
    authDomain: "slack-clone-c5b5a.firebaseapp.com",
    projectId: "slack-clone-c5b5a",
    storageBucket: "slack-clone-c5b5a.appspot.com",
    messagingSenderId: "713968498919",
    appId: "1:713968498919:web:99b7226507cd06cc6b8a42",
    measurementId: "G-DPP1XXG1J2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
