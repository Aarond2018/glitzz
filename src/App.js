import React from 'react'

import {Switch, Route} from 'react-router-dom'

import './App.css';
import Home from './pages/home/Home'
import ContactPage from './pages/Contact/ContactPage';
import ProductDetails from './pages/ProductDetails/ProductDetails';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/contact-us'>
        <ContactPage />
      </Route>
      <Route exact path='/product'>
        <ProductDetails />
      </Route>
    </Switch>
  );
}

export default App;
