import '../styles/BookCard.css';
import axios from 'axios';

export default function BookCard({ book, setBooks }){
    
    const handleDelete = () => {
        axios.post("http://localhost:3001/", {...book, type: "DELETE"}).then((res) => {
            setBooks((prevBooks) => {return prevBooks.filter((b) => {return b !== book})})
    })
    }


    return <div className = "bookCard">
        <button className = "deleteButton" onClick = {handleDelete}>x</button>
        <div className = "bookName">{book.name}</div>
        <div>{book.author}</div>
    </div>
}