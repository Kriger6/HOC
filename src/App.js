import Nav from '././components/Nav/index';
import About from '././components/About/index';
import ProductsList from '././components/ProductsList/index';
import Home from '././components/Home/index'
import Product from '././components/Product/index'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/ProductsList" exact component={ProductsList} />
          <Route path="/ProductsList/:id" component={Product} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
