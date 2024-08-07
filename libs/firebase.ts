// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU1hMHThF8zKegaAKxUZCdoEekLGwo6Cc",
  authDomain: "e-shop-with-next.firebaseapp.com",
  projectId: "e-shop-with-next",
  storageBucket: "e-shop-with-next.appspot.com",
  messagingSenderId: "294054014422",
  appId: "1:294054014422:web:9247c24269c7a0968ac877",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
