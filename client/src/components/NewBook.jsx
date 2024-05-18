import React, { useState } from 'react'
import axios from 'axios';

function NewBook({ booksCount, setBooks }) {
    
    const [newBookData, setNewBookData] = useState({
        "idBooks": {booksCount},
        "name": "",
        "author": ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setNewBookData({
            ...newBookData,
            [name]: value
        });

    }

    const postNewBook = (data) => {
        axios.post("http://localhost:3001/", newBookData).then((res) =>{
            setBooks((prevBooks) => { return [...prevBooks, newBookData]});
            console.log(data);
        })
      }
    
    

  return (
    <div className = "newBook">
      <div className = "newBookTitle">New Book</div>
      <div className = "newBookInputs">
        <input placeholder = "Title" name = "name" value = {newBookData.name} onChange = {handleChange}/>
        <input placeholder = "Author"  name = "author" value = {newBookData.author} onChange = {handleChange}/>
      </div>
        <button type = "submit" onClick = {postNewBook}>Submit</button>

    </div>
  )
}

export default NewBook