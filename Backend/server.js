const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
const cors = require('cors');

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


//routes
app.use('/', router)

//server listening
app.listen(process.env.PORT || PORT, () => {
    console.log(`Listening on port no ${PORT}`);
});