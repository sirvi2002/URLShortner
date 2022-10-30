const express = require('express');
const router = express.Router();

const shortURL = require('./shortURL.js');

// router.get('/', (req, res) => {
//     res.send("This api is reserved for Quora Clone");
// })

router.use('/shorturl', shortURL);
// router.use('/answers', answerRouter);
// router.use('/replies', repliesRouter);
// router.use('/users', usersRouter);

module.exports = router