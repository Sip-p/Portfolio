// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvjeQ-tTMysfzmYA2z7v_2j8TodRgBr4M",
  authDomain: "portfolio-c1082.firebaseapp.com",
  projectId: "portfolio-c1082",
  storageBucket: "portfolio-c1082.firebasestorage.app",
  messagingSenderId: "25620972323",
  appId: "1:25620972323:web:06c7fa02d24db123be8296",
  measurementId: "G-FTVJB7K59B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const analytics = getAnalytics(app);
export {app,auth}