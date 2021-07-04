import firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAMOUy53RcGMR0M0K-OvgM2OQxKVll3PeA',
  authDomain: 'jarvis-54933.firebaseapp.com',
  databaseURL: 'https://jarvis-54933-default-rtdb.firebaseio.com',
  projectId: 'jarvis-54933',
  storageBucket: 'jarvis-54933.appspot.com',
  messagingSenderId: '814217981517'
};

firebase.initializeApp(config);
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

export {
  auth,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider
};
