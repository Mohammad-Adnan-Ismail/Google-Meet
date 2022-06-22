// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA1W7AsJ7TqOW74WMmgXJAc1J9Tm-CYZ4",
  authDomain: "g-meet-bdf4e.firebaseapp.com",
  projectId: "g-meet-bdf4e",
  storageBucket: "g-meet-bdf4e.appspot.com",
  messagingSenderId: "801020641832",
  appId: "1:801020641832:web:0cf32b9148d38552caab1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;