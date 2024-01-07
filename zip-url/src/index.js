import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = 
{
  apiKey: "AIzaSyBwpK_SlM5god4tAaPAeD5xPYFX5tB55to",
  authDomain: "zipurl-3d497.firebaseapp.com",
  databaseURL: "https://zipurl-3d497-default-rtdb.firebaseio.com",
  projectId: "zipurl-3d497",
  storageBucket: "zipurl-3d497.appspot.com",
  messagingSenderId: "622646774605",
  appId: "1:622646774605:web:0da8b664c000fda3b50504",
  measurementId: "G-7HZ9G9KQ3C"
};

initializeApp(firebaseConfig);
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();