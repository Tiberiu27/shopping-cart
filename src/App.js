import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Shop from './components/Shop';
import Homepage from './components/Homepage';
import ItemDetail from './components/ItemDetail';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail}/>
          <Route path="/checkout" exact component={Checkout}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
