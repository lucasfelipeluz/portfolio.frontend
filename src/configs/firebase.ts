import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDbTGrOfjYudklnVqsC4qvZ3yZdnYvVZTI',
  authDomain: 'portfolio-3660f.firebaseapp.com',
  projectId: 'portfolio-3660f',
  storageBucket: 'portfolio-3660f.appspot.com',
  messagingSenderId: '719984304926',
  appId: '1:719984304926:web:906e663b6ff83003dd1f0f',
  measurementId: 'G-9HF5PTB31Q',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebaseApp.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebaseApp, firebaseAuth, googleAuthProvider };
