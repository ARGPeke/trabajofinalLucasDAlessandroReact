import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQyy-wzKcmhhAKoVtyJS1_hJA9HJz_jn8",
  authDomain: "proyectofinalreact-4a8ff.firebaseapp.com",
  projectId: "proyectofinalreact-4a8ff",
  storageBucket: "proyectofinalreact-4a8ff.appspot.com",
  messagingSenderId: "157693275553",
  appId: "1:157693275553:web:e24e96cda90df066ceefe0"
};

// Initialize Firebase
initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(<App />)
