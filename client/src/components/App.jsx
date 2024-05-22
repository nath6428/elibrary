import axios from "axios";
import BookCard from "./BookCard";
import '../styles/App.css'
import NewBook from "./NewBook";
import React, { useState, useEffect } from 'react';
export default function App() {
  
  var [books, setBooks] = useState([]);

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
        {books.length === 0 ? <p className = "emptyMessage">No Books Found!</p> : books.map((book) => {
          return <BookCard key={book.id} book = {book} setBooks = {setBooks} />
            })}
    </div>
        <NewBook setBooks = {setBooks} />
    </div>

      }
