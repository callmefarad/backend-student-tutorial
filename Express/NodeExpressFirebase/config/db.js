
require('dotenv').config();
require("firebase/firestore");
const firebase = require('firebase')


// const firebaseConfig = {
//     apiKey: process.env.API_KEY,
//     authDomain: process.env.AUTH_DOMAIN,
//     projectId: process.env.PROJECT_ID,
//     storageBucket: process.env.STORAGE_BUCKET,
//     messagingSenderId: process.env.MESSAGING_SENDER_ID,
//     appId: process.env.APP_ID,
//     measurementId: process.env.MEASUREMENT_ID
//   };
const firebaseConfig = {
  apiKey: "AIzaSyCVxldKuHiMb_CTeXfK7SVlT2Dl2FJPMF4",
  authDomain: "node-firestor-crud.firebaseapp.com",
  projectId: "node-firestor-crud",
  storageBucket: "node-firestor-crud.appspot.com",
  messagingSenderId: "94140966208",
  appId: "1:94140966208:web:b99b6775cfc4d5aa6306a5",
  measurementId: "G-PFWW23SJCZ"
};
firebase.initializeApp(firebaseConfig);

module.exports = firebase;