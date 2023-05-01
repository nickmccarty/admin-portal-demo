import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

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

const submitButton = document.getElementById("submit");
const signupButton = document.getElementById("sign-up");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const main = document.getElementById("main");
const createacct = document.getElementById("create-acct")

const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById("confirm-password-signup");
const createacctbtn = document.getElementById("create-acct-btn");

const returnBtn = document.getElementById("return-btn");

var email, password, signupEmail, signupPassword, confirmSignupEmail, confirmSignUpPassword;

createacctbtn.addEventListener("click", function() {
  var isVerified = true;

  signupEmail = signupEmailIn.value;
  confirmSignupEmail = confirmSignupEmailIn.value;
  if(signupEmail != confirmSignupEmail) {
      window.alert("Email fields do not match. Try again.")
      isVerified = false;
  }

  signupPassword = signupPasswordIn.value;
  confirmSignUpPassword = confirmSignUpPasswordIn.value;
  if(signupPassword != confirmSignUpPassword) {
      window.alert("Password fields do not match. Try again.")
      isVerified = false;
  }
  
  if(signupEmail == null || confirmSignupEmail == null || signupPassword == null || confirmSignUpPassword == null) {
    window.alert("Please fill out all required fields.");
    isVerified = false;
  }
  
  if(isVerified) {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      window.alert("Account created succesfully! Click 'OK' to log in.")
      location.reload()
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      window.alert("Error occurred. Try again.");
    });
  }
});

submitButton.addEventListener("click", function() {
  email = emailInput.value;
  console.log(email);
  password = passwordInput.value;
  console.log(password);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Login successful!");
      window.alert("Log-in successful! Click 'OK' to be redirected to profile page.");
      window.location.href="profile-page.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error occurred. Try again.");
      window.alert("Error occurred. Try again.");
    });
});

signupButton.addEventListener("click", function() {
    main.style.display = "none";
    createacct.style.display = "block";
});

returnBtn.addEventListener("click", function() {
    main.style.display = "block";
    createacct.style.display = "none";
});

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// const submitButton = document.getElementById("submit");
// const signupButton = document.getElementById("sign-up");
// const emailInput = document.getElementById("email");
// const passwordInput = document.getElementById("password");
// const main = document.getElementById("main");
// const createacct = document.getElementById("create-acct")

// const signupEmailIn = document.getElementById("email-signup");
// const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
// const signupPasswordIn = document.getElementById("password-signup");
// const confirmSignUpPasswordIn = document.getElementById("confirm-password-signup");
// const createacctbtn = document.getElementById("create-acct-btn");

// const returnBtn = document.getElementById("return-btn");

// var email, password, signupEmail, signupPassword, confirmSignupEmail, confirmSignUpPassword;

// createacctbtn.addEventListener("click", function() {
//   var isVerified = true;

//   signupEmail = signupEmailIn.value;
//   confirmSignupEmail = confirmSignupEmailIn.value;
//   if(signupEmail != confirmSignupEmail) {
//       window.alert("Email fields do not match. Try again.")
//       isVerified = false;
//   }

//   signupPassword = signupPasswordIn.value;
//   confirmSignUpPassword = confirmSignUpPasswordIn.value;
//   if(signupPassword != confirmSignUpPassword) {
//       window.alert("Password fields do not match. Try again.")
//       isVerified = false;
//   }
  
//   if(signupEmail == null || confirmSignupEmail == null || signupPassword == null || confirmSignUpPassword == null) {
//     window.alert("Please fill out all required fields.");
//     isVerified = false;
//   }
  
//   if(isVerified) {
//     createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
//       .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
//       window.alert("Account created succesfully! Click 'OK' to log in.")
//       location.reload()
//       // ...
//     sendEmailVerification(auth.currentUser)
//       .then(() => {
//       // Email verification sent!
//       window.alert("Success! Account created. Email verification sent.");
//     // ...
//       });
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       window.alert("Error occurred. Try again.");
//     });
//   }
// });

// submitButton.addEventListener("click", function() {
//   email = emailInput.value;
//   console.log(email);
//   password = passwordInput.value;
//   console.log(password);

//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       console.log("Success! Welcome back!");
//       window.alert("Log-in successful! Click 'OK' to be redirected to profile page.");
//       window.location.href="../../profile-page.html";   
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log("Error occurred. Try again.");
//       window.alert("Error occurred. Try again.");
//     });
// });

// signupButton.addEventListener("click", function() {
//     main.style.display = "none";
//     createacct.style.display = "block";
// });

// returnBtn.addEventListener("click", function() {
//     main.style.display = "block";
//     createacct.style.display = "none";
// });
