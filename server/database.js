const mysql = require('mysql2');


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '6428',
    database: 'world'
}).promise()


function SQLFetch(){
    
    return pool.query("SELECT * FROM library.books;");

}

function SQLPost(id, name, author){
    
    return pool.query("INSERT INTO library.books(idBooksddd, name, author) VALUES (?, ?, ?)", [id, name, author]);

}

module.exports = { SQLFetch, SQLPost };

