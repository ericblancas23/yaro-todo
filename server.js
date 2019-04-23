const express = require('express');
const server = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

const db = require('./config/keys').mongoURI;

mongoose.connect(db)
.then(() => console,log('MongoDB connected'))
.catch((err) => console.log(err));

server.use(bodyParser.json());

server.listen(PORT, () => {
    console.log('server is working');
});

server.get('/', (req, res) => {
    console.log('Connected');
});