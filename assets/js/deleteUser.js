import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, deleteUser } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

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

const deleteBtn = document.querySelector('#delete-btn');

deleteBtn.addEventListener('click', e => {
  e.preventDefault();
  auth.signOut();
  window.alert("Are you sure? Clicking 'OK' will delete user account!")
  console.log('User account deleted!');
  window.location.href="../../user-deleted.html"; 
})

deleteUser(user).then(() => {
    // User deleted.
  }).catch((error) => {
    // An error ocurred
  });