import React, { useState } from 'react';
import Book from '../components/ui/book.jsx';

const Books = ({ books, initialBooks }) => {
    const [booksState, setBooks] = useState(initialBooks);
    
    function filterBooks(filter) {
        console.log(filter);
        if (filter === 'LOW_TO_HIGH') {
            const sortedBooks = [...booksState].sort((a, b) => 
                (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)
            );
            setBooks(sortedBooks);
        } else if (filter === 'HIGH_TO_LOW') {
            const sortedBooks = [...booksState].sort((a, b) => 
                (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)
            );
            setBooks(sortedBooks);
        } else if (filter === 'RATING') {
            const sortedBooks = [...booksState].sort((a, b) => b.rating - a.rating);
            setBooks(sortedBooks);
        }
    }
    
    return (
     <div id="books__body">
        <main id="books_main">
            <section>
                <div className="books__container">
                    <div className="row">
                        <div className="books__header">
                            <h2 className="section__title books__header--title">All Books</h2>
                            <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterBooks(event.target.value)}>
                                <option value="DEFAULT" disabled>Sort</option>
                                <option value="LOW_TO_HIGH">Price: Low to High</option>
                                <option value="HIGH_TO_LOW">Price: High to Low</option>
                                <option value="RATING">Rating</option>
                            </select>
                        </div>
                        <div className="books">
                            {booksState.map((book) => (
                             <Book book={book} key={book.id} />
                             ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
     </div>
    )
}

export default Books;