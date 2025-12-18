import Nav from './components/nav.jsx'
import Home from './pages/home.jsx';
import Footer from './components/footer.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Books from './pages/books.jsx';
import { books } from './data.js';
import BookInfo from './pages/bookinfo.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books/:id" render={() => <BookInfo books={books} />} />
          <Route path="/books" exact render={() => <Books books={books} initialBooks={books} />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
