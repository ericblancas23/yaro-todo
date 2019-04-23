const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = process.env.PORT || 9000;

const db = require('./config/keys').mongoURI;

mongoose.connect(db)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log('server is working');
});

app.get('/', (req, res) => {
    res.send('Connected');
});