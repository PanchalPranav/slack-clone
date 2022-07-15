import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC1yYeKexmg4zHX5fWfiZfOpCTlP_0Ear0",
    authDomain: "slack-clone-d3d69.firebaseapp.com",
    projectId: "slack-clone-d3d69",
    storageBucket: "slack-clone-d3d69.appspot.com",
    messagingSenderId: "935991388270",
    appId: "1:935991388270:web:210591df723ec7e3445e7f"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db }; 
