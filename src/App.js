import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './App.css'
import Collection from './Collection';
import Gadgets from './Gadgets';
import Navbar from './Navbar';
import Stock from './Stock';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route path="/">
            <Collection />
            <Gadgets />
          </Route>
          <Route path="/stock">
            <Stock />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
