var express = require('express');
var router = express.Router();
var { SQLFetch, SQLPost } = require('../database.js');


/* GET home page. */
router.get('/', async function(req, res, next) {
    const result = await SQLFetch();
    res.json(result[0]);
});
router.post('/', async(req, res) => {
    const newpost = req.body;
    await SQLPost(newpost.id, newpost.name, newpost.author);
    res.json("2")
})

module.exports = router;
