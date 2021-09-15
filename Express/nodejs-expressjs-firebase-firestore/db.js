const firebase = require('firebase');
const config = require('./config');


const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGE_SENDER_ID,
    appId: process.env.APP_ID
}
// const db = firebase.initializeApp(config.firebaseConfig);
const db = firebase.initializeApp(firebaseConfig);

module.exports = db;