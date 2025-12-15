import Nav from './components/nav.jsx'
import Home from './pages/home.jsx';
import Footer from './components/footer.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Books from './pages/books.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact component={Books} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
