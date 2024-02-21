// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNv2gujvuDrFLMvShBLmYjiGa-kYQQKHA",
  authDomain: "langdem-b465c.firebaseapp.com",
  projectId: "langdem-b465c",
  storageBucket: "langdem-b465c.appspot.com",
  messagingSenderId: "548743816034",
  appId: "1:548743816034:web:6a448c9459fcef4dce023b",
  measurementId: "G-SYYMCF7M3B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initFirebase = ()=>{
  return app;
}