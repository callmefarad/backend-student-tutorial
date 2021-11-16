const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
const router = require('./routes/student');
const port = process.env.port;


const app = express()

app.use(express.json());
app.use(cors());
// app.use(bodyParser.json)

app.get('/', (req, res) => {
    res.send("Student API")
})
app.use('/api', router);

app.listen(port, () => {
    console.log('listening on url http://localhost:' + port);
})