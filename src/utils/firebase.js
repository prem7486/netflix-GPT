// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgLANI_Qo_Qk4vqaLHpWpA1hJXrvYAk5w",
  authDomain: "netflixgpt-befe3.firebaseapp.com",
  projectId: "netflixgpt-befe3",
  storageBucket: "netflixgpt-befe3.appspot.com",
  messagingSenderId: "1062419677768",
  appId: "1:1062419677768:web:b931007f250c9b323bce7d",
  measurementId: "G-J5NGG3FTNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();