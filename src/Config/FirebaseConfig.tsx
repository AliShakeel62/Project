// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAshiCoGpaHBrIjYVvjqo9uO-RbLYMtoMo",
  authDomain: "class-project-1-40265.firebaseapp.com",
  databaseURL: "https://class-project-1-40265-default-rtdb.firebaseio.com",
  projectId: "class-project-1-40265",
  storageBucket: "class-project-1-40265.appspot.com",
  messagingSenderId: "481358379271",
  appId: "1:481358379271:web:d90af6e8fbb84fe5e02da2",
  measurementId: "G-1WDZY3X68G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;