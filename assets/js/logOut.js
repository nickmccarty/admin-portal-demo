import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBI_GQtnxnaWZNrZ31wcVj0oUQDbNqPpMs",
  authDomain: "login-page-7cc8a.firebaseapp.com",
  projectId: "login-page-7cc8a",
  storageBucket: "login-page-7cc8a.appspot.com",
  messagingSenderId: "370431537106",
  appId: "1:370431537106:web:e767dc702e8189c1afe20b"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

const logoutBtn = document.querySelector('#logout-btn');

logoutBtn.addEventListener('click', e => {
  e.preventDefault();
  auth.signOut()
  console.log('User signed out!');
  window.location.href="sign-off.html"; 
})

auth.onAuthStateChanged(user => {
    if (user) {
      console.log(user.email + " is logged in!");
    } else {
      console.log('User is logged out!');
    }
  });