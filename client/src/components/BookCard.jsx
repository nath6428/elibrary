import '../styles/BookCard.css';

export default function BookCard({ book }){
    
    return <div className = "bookCard">
        <div>{book.name}</div>
        <div>{book.author}</div>
    </div>
}