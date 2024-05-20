var { nanoid } = require('nanoid');
var express = require('express');
var router = express.Router();
var { SQLFetch, SQLPost, SQLDelete } = require('../database.js');
var booksCount;

router.get('/', async function(req, res, next) {
    const result = await SQLFetch();

    res.json(result[0]);
});

router.post('/', async(req, res) => {
    if(req.body.type == "DELETE"){
       await SQLDelete(req.body.id)
    } else if(req.body.type == "ADD"){
        await SQLPost(nanoid(), req.body.name, req.body.author);
    }
    res.json("Post complete.")
})


module.exports = router;
