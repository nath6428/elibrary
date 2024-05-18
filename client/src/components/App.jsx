import axios from "axios";
import BookCard from "./BookCard";
import '../styles/App.css'
import NewBook from "./NewBook";
const { useState, useEffect } = require('react');

export default function App() {
  
  var [books, setBooks] = useState([""]);

  useEffect(() => {
    axios.get("http://localhost:3001/").then((res) => {
        setBooks(res.data);
    })
  }, [])
  

  return <div className = "main">
    <div className = "title">
      Local Library
    </div>
    <div className = "bookCards">
      {books.map((book) => {
            return <BookCard key={book.idBooks} book = {book} />
          })}
    </div>
    <NewBook booksCount = {books.length} setBooks = {setBooks} />
    
    </div>

}