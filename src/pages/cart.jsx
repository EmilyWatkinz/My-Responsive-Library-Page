import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, changeQuantity, removeBook }) => {
    const total = () => {
        let price = 0;
        cart.forEach(item => {
            price += (item.salePrice || item.originalPrice) * item.quantity;
        });
        return price.toFixed(2);
    };

    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="cart__title">Cart</h2>
                        </div>
                        <div className="cart">
                            <div className="cart__header">
                                <span className="cart__book">Book</span>
                                <span className="cart__quantity">Quantity</span>
                                <span className="cart__total">Price</span>
                            </div>
                            <div className="cart__body">
                                {cart.map((book) => {
                                    return (
                                        <div className="cart__item" key={book.id}>
                                            <div className="cart__book">
                                                <img src={book.url} className="cart__book--img" alt="" />
                                                <div className="cart__book--info">
                                                    <span className="cart__book--title">
                                                        {book.title}
                                                    </span>
                                                    <span className="cart__book--price">
                                                        ${(book.salePrice || book.originalPrice).toFixed(2)}
                                                    </span>
                                                    <button className="cart__book--remove" onClick={() => removeBook(book)}>
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="cart__quantity">
                                                <input 
                                                    type="number" 
                                                    min={0} 
                                                    max={99}
                                                    value={book.quantity}
                                                    className="cart__input"
                                                    onChange={(e) => changeQuantity(book, e.target.value)}
                                                />
                                            </div>
                                            <div className="cart__total">
                                                ${((book.salePrice || book.originalPrice) * book.quantity).toFixed(2)}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            {cart.length === 0 && (
                                <div className="cart__empty">
                                    <img src="https://i.imgur.com/dCdflKN.png" alt="" className="cart__empty--img" />
                                    <h2>Your cart is empty</h2>
                                    <Link to="/books">
                                        <button className="btn">Browse books</button>
                                    </Link>
                                </div>
                            )}
                        </div>
                        {cart.length > 0 && (
                            <div className="total">
                                <div className="total__item total__sub-total">
                                    <span>Subtotal</span>
                                    <span>${total()}</span>
                                </div>
                                <div className="total__item total__tax">
                                    <span>Tax</span>
                                    <span>${(total() * 0.1).toFixed(2)}</span>
                                </div>
                                <div className="total__item total__price">
                                    <span>Total</span>
                                    <span>${(parseFloat(total()) + parseFloat(total()) * 0.1).toFixed(2)}</span>
                                </div>
                                <button className="btn btn__checkout no-cursor" onClick={() => alert('Checkout functionality not implemented yet')}>
                                    Proceed to checkout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Cart;
