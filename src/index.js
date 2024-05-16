import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDRu6ftPyE-VHJUnEBA5nb6_qRZyWccHQM",
  authDomain: "portfolio-511ba.firebaseapp.com",
  projectId: "portfolio-511ba",
  storageBucket: "portfolio-511ba.appspot.com",
  messagingSenderId: "452992870167",
  appId: "1:452992870167:web:85ee3ab5295e6c04d6f952",
  measurementId: "G-FP9V03KJZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
