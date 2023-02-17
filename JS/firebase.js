// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
// AUTENTICACIÓN
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
//FIRESTORE
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgMxhFergMXMAEKYLReRtal7ynDKbayo0",
  authDomain: "data-map-1d3bd.firebaseapp.com",
  projectId: "data-map-1d3bd",
  storageBucket: "data-map-1d3bd.appspot.com",
  messagingSenderId: "63606150386",
  appId: "1:63606150386:web:7a8b74fc0cbf91f583ac6b",
  measurementId: "G-33JCNX47PD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const autz = getAuth(app);
export const db = getFirestore(app);