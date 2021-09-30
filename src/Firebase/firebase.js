// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtCUZuHZD7hQiziRB2vTu9Nk3gSnR8WMY",
  authDomain: "glitzz-4de3c.firebaseapp.com",
  projectId: "glitzz-4de3c",
  storageBucket: "glitzz-4de3c.appspot.com",
  messagingSenderId: "360149460584",
  appId: "1:360149460584:web:72e9925838a36101bebddd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()

export default app;