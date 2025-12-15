import Landing from './components/landing.jsx';
import Nav from './components/nav.jsx'
import Highlights from './components/highlights.jsx';
import Featured from './components/featured.jsx';
import Discounted from './components/discounted.jsx';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
    </div>
  );
}

export default App;
