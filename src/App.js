import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import {
  Home 
} from './pages';

import './App.css';

export default function App(){
  return(
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/expect">
          A page to show what to expect
        </Route>
        <Route path="/stories">
          A page to show the stories of success.
        </Route>
      </Switch>
    </Router>
  )
}