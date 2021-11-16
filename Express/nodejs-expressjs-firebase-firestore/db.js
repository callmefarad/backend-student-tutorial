require('dotenv').config();
// const firebase = require('firebase');
const firebase = require('firebase/app').default;

// require('firebase/firestore')
// const config = require('./config')



const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGE_SENDER_ID,
    appId: process.env.APP_ID
};

const app = firebase.initializeApp(firebaseConfig);

module.exports = app;