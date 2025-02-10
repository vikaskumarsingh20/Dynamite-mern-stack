// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1S7khmEPwdWs3jDGioCDeCbz9e77OQZE",
  authDomain: "dynamite-95389.firebaseapp.com", // ✅ Correct this
  projectId: "dynamite-95389",
  storageBucket: "dynamite-95389.appspot.com", // ✅ Change this
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup };
