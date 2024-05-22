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
    
    return pool.query("INSERT INTO library.books(id, name, author) VALUES (?, ?, ?)", [id, name, author]);

}

function SQLDelete(id){
    
    return pool.query(`DELETE FROM library.books WHERE id LIKE "${id}"`);
}

module.exports = { SQLFetch, SQLPost, SQLDelete };

