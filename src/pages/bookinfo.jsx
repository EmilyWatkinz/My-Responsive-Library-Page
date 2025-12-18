import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Rating from '../components/ui/rating';
import Price from '../components/ui/price';
import Book from '../components/ui/book';
import BookInfoSkeleton from '../components/ui/bookInfoSkeleton';

const BookInfo = ({ books, addToCart, cart }) => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const book = books.find(book => +book.id === +id);
    const recommendedBooks = books.filter(b => b.rating === book.rating && b.id !== book.id);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, [id]);

    function bookInCart() {
        return cart.find(item => item.id === book.id);
    }

    if (loading) {
        return <BookInfoSkeleton />;
    }

    return (
        <div id="books__body">
        <main id="books_main">
            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <Link to="/books" className="book__link">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </Link>
                        <Link to="/books" className="book__link">
                        <h2 className="book__selected--title--top">Books
                        </h2>
                        </Link>
                    </div>
                    <div className="book__selected">
                        <figure className="book__selected--figure">
                            <img src={book.url} alt="" className="book__selected--img" />
                        </figure>
                        <div className="book__selected--description">
                            <h2 className="book__selected--title">
                                {book.title}
                            </h2>
                            <Rating rating={book.rating} />
                            <div className="book__selected--price">
                                <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                            </div>
                            <div className="book__summary">
                                <h3 className="book__summary--title">Summary</h3>
                                <p className="book__summary--para">{book.description}</p>
                            </div>
                            <button className="btn" onClick={() => addToCart(book)}>
                                {bookInCart() ? 'Added to Cart' : 'Add to Cart'}
                            </button>
                        </div>
                    </div>
                    {recommendedBooks.length > 0 && (
                        <div className="book__selected--recommended">
                            <h2 className="book__selected--title--top">
                                Recommended Books
                            </h2>
                            <div className="books">
                                {recommendedBooks.map(book => (
                                    <Book book={book} key={book.id} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
        </div>
    )
}

export default BookInfo;