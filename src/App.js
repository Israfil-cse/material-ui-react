import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import NotFund from './Component/NotFund/NotFund';
import DynamicData from './Component/DynamicData/DynamicData';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/details/:id">
              <DynamicData></DynamicData>
          </Route>
          <Route path="*">
            <NotFund></NotFund>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
