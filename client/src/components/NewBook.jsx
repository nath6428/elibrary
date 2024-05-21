import React, { useState } from 'react'
import axios from 'axios';
import { nanoid } from 'nanoid';

function NewBook({ setBooks }) {
    
    const [newBookData, setNewBookData] = useState({
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

    const postNewBook = () => {
      
      if(newBookData.name !== "" && newBookData.author !== ""){
        axios.post("http://localhost:3001/", {...newBookData, type: "ADD"}).then((res) =>{
          setBooks((prevBooks) => { return [...prevBooks, newBookData]});
        })
      }
     
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