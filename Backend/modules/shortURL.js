const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    // try {
    //     await questionModel.create(
    //         {
    //             questionName: req.body.questionName,
    //             questionUrl: req.body.questionUrl
    //         }
    //     ).then(() => {
    //         res.status(201).send({
    //             status: true,
    //             message : "Question Added Succesfully"
    //         })
    //     }).catch((err) => {
    //         res.status(400).send({
    //             status: false,
    //             message:"Bad Request"
    //         })
    //     })
    // } catch (e)
    // {
    //     res.status(500).send({
    //         status: false,
    //         message : "Internal Server Error"
    //     })
    // }
    console.log(req.body);
});
module.exports = router;