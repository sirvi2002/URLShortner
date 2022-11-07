const express = require('express');
const router = express.Router();
const shortURL = require('../models/shortURLs');
let universalCounter = 10000;

router.post('/', async (req, res) => {
    // console.log(req.body);
    // console.log(inputValue);
    try {
        let inputValue = req.body.realUrl;
        let characterSet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        let encoded = ""
        let base = characterSet.length;
        let num = universalCounter;
        while (num > 0) {
            r = Math.floor(num % base);
            num = Math.floor(num / base);
            encoded = (characterSet[r]) + encoded;
        }

        await shortURL.create({
                encodeURL: encoded,
                realURL: inputValue,
                counter: universalCounter
            })
            .then(() => {
                universalCounter = universalCounter + 1;
                res.status(201).json({
                    encodeURL: encoded,
                });
            })
            .catch((e) => {
                res.status(400).send({
                    status: false,
                    message: "Bad request",
                });
            });
        
    } catch (e) {
        res.status(500).send({
            status: false,
            message: "Internal Server Error"
        })
    }
});
module.exports = router;