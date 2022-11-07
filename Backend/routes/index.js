const express = require('express');

const router = express.Router();

const shortURL = require('../modules/shortURL');



// router.get('/', (req, res) => {
//     res.send("This api is reserved for URL calling Clone");
// })

router.use('/shorturl', shortURL);

module.exports = router