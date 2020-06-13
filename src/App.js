import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Time from './views/Time';
import Data from './views/Data';
import Currency from './views/Currency';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/time" component={Time}></Route>
        <Route exact path="/data" component={Data}></Route>
        <Route exact path="/currency" component={Currency}></Route>
      </Switch>
          
    </div>
    </Router>
    
  );
}

export default App;
