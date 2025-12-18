import React, { useState } from 'react';
import Nav from './components/nav.jsx'
import Home from './pages/home.jsx';
import Footer from './components/footer.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Books from './pages/books.jsx';
import { books } from './data.js';
import BookInfo from './pages/bookinfo.jsx';
import Cart from './pages/cart.jsx';

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    const bookInCart = cart.find(item => item.id === book.id);
    if (bookInCart) {
      setCart(cart.map(item => 
        item.id === book.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  }

  function changeQuantity(book, quantity) {
    if (quantity === 0 || quantity === '0') {
      removeBook(book);
    } else {
      setCart(cart.map(item =>
        item.id === book.id
          ? { ...item, quantity: +quantity }
          : item
      ));
    }
  }

  function removeBook(book) {
    setCart(cart.filter(item => item.id !== book.id));
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity;
    });
    return counter;
  }

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart} cart={cart} />} />
          <Route path="/books" exact render={() => <Books books={books} initialBooks={books} />} />
          <Route path="/cart" render={() => <Cart cart={cart} changeQuantity={changeQuantity} removeBook={removeBook} />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
