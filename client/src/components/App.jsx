import axios from "axios";
import BookCard from "./BookCard";
import '../styles/App.css'
const { useState, useEffect } = require('react');

export default function App() {
  
  var [books, setBooks] = useState(["D"]);

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
    <div className = "newBook">
      <div className = "newBookTitle">New Book</div>
      <div className = "newBookInputs">
        <input placeholder = "Title"/>
        <input placeholder = "Author"/>
      </div>
        <button type = "submit">Submit</button>

    </div>
    </div>

}