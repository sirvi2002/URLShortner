const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 5000;
const router = require('./routes');

app.use(cors());
//middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));


//cors 
app.use((req, res, next) => {
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "*");
    next();
});

//mongoose connection
mongoose.connect('mongodb://localhost/shortURLs', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Error connecting to MongoDB", err));

//routes
app.use('/', router)

//server listening
app.listen(process.env.PORT || PORT, () => {
    console.log(`Listening on port no ${PORT}`);
});