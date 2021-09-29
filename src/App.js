import React from 'react'

import {Switch, Route} from 'react-router-dom'

import './App.css';
import Home from './pages/home/Home'
import ContactPage from './pages/Contact/ContactPage';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/contact-us'>
        <ContactPage />
      </Route>
    </Switch>
  );
}

export default App;
