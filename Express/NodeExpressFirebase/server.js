require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 2021
const host = process.env.HOST
const router = require('./router/router')

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', router);
// app.get('/', (req, res) => {
//     res.json({message: 'Footballer API'})
// })
app.listen(port, ()=>{
    console.log(`Server is listening to port: ${port} on this host: ${host}`);
});




















// apiKey: "AIzaSyCVxldKuHiMb_CTeXfK7SVlT2Dl2FJPMF4",
//   authDomain: "node-firestor-crud.firebaseapp.com",
//   projectId: "node-firestor-crud",
//   storageBucket: "node-firestor-crud.appspot.com",
//   messagingSenderId: "94140966208",
//   appId: "1:94140966208:web:b99b6775cfc4d5aa6306a5",
//   measurementId: "G-PFWW23SJCZ"