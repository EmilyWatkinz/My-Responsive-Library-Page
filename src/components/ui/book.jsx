import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';
import DeepWork from '../../assets/deep work.jpeg';

const Book = ({ book }) => {
    return (
        <div className="book">
                            <a href="">
                                <figure className="book__img--wrapper">
                                    <img src={book.url} alt="" />
                                </figure>
                            </a>
                            <div className="book__title">
                                <a href="/" className="book__title--link">
                                {book.title}
                                </a>
                            </div>
                            <div className="book__ratings">
                               {
                                [...Array(Math.floor(book.rating))].map((_, index) => (
                                    <FontAwesomeIcon icon={faStar} key={index} />
                                ))
                               }
                               {
                                book.rating % 1 !== 0 && <FontAwesomeIcon icon={faStarHalfAlt} />   
                               }
                            </div>
                            <div className="book__price">
                                {book.salePrice ? (
                                <>
                                <span className="book__price--normal">${book.originalPrice.toFixed(2)}</span>
                                ${book.salePrice.toFixed(2)}
                                </>
                                ) : (
                                 <>${ book.originalPrice.toFixed(2) }</>
                                )}
                             </div>
                        </div>
    )
}

export default Book;