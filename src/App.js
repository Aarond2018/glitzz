import React from 'react'

import {Switch, Route} from 'react-router-dom'

import './App.css';
import Home from './pages/home/Home'
import ContactPage from './pages/Contact/ContactPage';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';

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
      <Route exact path='/signin'>
        <SignIn />
      </Route>
      <Route exact path='/signup'>
        <SignUp />
      </Route>
    </Switch>
  );
}

export default App;
