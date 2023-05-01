import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBI_GQtnxnaWZNrZ31wcVj0oUQDbNqPpMs",
  authDomain: "login-page-7cc8a.firebaseapp.com",
  projectId: "login-page-7cc8a",
  storageBucket: "login-page-7cc8a.appspot.com",
  messagingSenderId: "370431537106",
  appId: "1:370431537106:web:e767dc702e8189c1afe20b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(uid)
    // const displayName = user.displayName;
    const email = user.email;
    // const photoURL = user.photoURL;
    // const emailVerified = user.emailVerified;
    document.getElementById("email").innerHTML = email;
    document.getElementById("uid").innerHTML = uid;
  } else {
    // User is signed out
    console.log('No UID found.')
  }
});