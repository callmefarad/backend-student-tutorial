// // 'use strict';
// const dotenv = require('dotenv').config();
// const assert = require('assert');

// const {
//     PORT,
//     HOST,
//     HOST_URL,
//     API_KEY,
//     AUTH_DOMAIN,
//     PROJECT_ID,
//     STORAGE_BUCKET,
//     MESSAGE_SENDER_ID,
//     APP_ID,
// } = process.env;

// assert(PORT, 'port is required');
// assert(HOST, 'host is required');

// module.exports = {
//     port: PORT,
//     host: HOST,
//     url: HOST_URL,
//     firebaseConfig: {
//         apiKey: API_KEY,
//         authDomain: AUTH_DOMAIN,
//         projectId: PROJECT_ID,
//         storageBucket: STORAGE_BUCKET,
//         messagingSenderId: MESSAGE_SENDER_ID,
//         appId: APP_ID
//     }
// }