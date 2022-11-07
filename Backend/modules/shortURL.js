const express = require('express');
const router = express.Router();

let universalCounter = 10000;

router.post('/', async (req, res) => {
    // console.log(req.body);
    let inputValue = req.body.realUrl;
    // console.log(inputValue);

    try {
        let characterSet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        encoded = ""
        let base = characterSet.length;
        let num = universalCounter;
        while (num > 0) {
            r = Math.floor(num % base);
            num = Math.floor(num / base);
            encoded = (characterSet[r]) + encoded;
        }
        let encodedURL = ({ encodeURI: encoded });
        res.json(encodedURL);
        universalCounter=universalCounter+1;
    } catch (e)
    {
        res.status(500).send({
            status: false,
            message : "Internal Server Error"
        })
    }
});
module.exports = router;