
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged    } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyBZscEB8xbcOASVEIEQOVeWWgKjDtFJp9k",
  authDomain: "saylani-hackathon-faizan.firebaseapp.com",
  projectId: "saylani-hackathon-faizan",
  storageBucket: "saylani-hackathon-faizan.appspot.com",
  messagingSenderId: "934814103114",
  appId: "1:934814103114:web:c5c7e8b071236a42bc58b3",
  measurementId: "G-RVQQTH8ZFE"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("signin-submit").addEventListener('submit', (event) => {

    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("signInWithEmailAndPassword");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });


})



////////////////////////////////////////////////////////////////////

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      location.href = './index.html';
      // ...
    } else {
      // User is signed out
      // ...
    }
  });