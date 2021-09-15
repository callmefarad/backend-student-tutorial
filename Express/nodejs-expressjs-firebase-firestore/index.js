const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config')
const router = require('./routes/student');


const app = express()

app.use(express.json());
app.use(cors());
app.use(bodyParser.json)


app.use('/api', router);

app.listen(config.port, () => {
    console.log('listening on url http://localhost:' + config.port);
})