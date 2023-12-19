// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyhurhuZ0RJX-BeH3vu-h02gBmApLZW7Y",
  authDomain: "pullspolls.firebaseapp.com",
  projectId: "pullspolls",
  storageBucket: "pullspolls.appspot.com",
  messagingSenderId: "200567855348",
  appId: "1:200567855348:web:946fd6402adfdf178ca6a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;