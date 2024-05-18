var express = require('express');
var router = express.Router();
var { SQLFetch, SQLPost } = require('../database.js');
var booksCount;

router.get('/', async function(req, res, next) {
    const result = await SQLFetch();

    res.json(result[0]);
});

router.post('/', async(req, res) => {
    const newpost = req.body;
    await SQLPost(newpost.idBooksddd, newpost.name, newpost.author);
    res.json("Post complete.")
})

module.exports = router;
