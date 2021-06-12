import Nav from '././components/Nav/index';
import About from '././components/About/index';
import Products from '././components/Products/index';
import Home from '././components/Home/index'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Products" component={Products} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
