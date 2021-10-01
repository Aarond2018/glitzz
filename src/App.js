import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux';
import { productActions } from './store/productSlice'

import {Switch, Route} from 'react-router-dom'
import { db } from './Firebase/firebase'
import { collection, addDoc, getDocs, doc } from "firebase/firestore";

import './App.css';
import Home from './pages/home/Home'
import ContactPage from './pages/Contact/ContactPage';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const arr = [];

    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    /* console.log(doc.id, " => ", doc.data()); */
    
    arr.push({
      id: doc.id,
      ...doc.data()
    })
    
    });
    
    dispatch(productActions.add(arr))
  }

 /*  const add = async (data) => {
     await data.map(d => {
      try {
        const docRef = addDoc(collection(db, "products"), {
          title: d.title,
          price: d.price,
          description: d.description,
          category: d.category,
          image: d.image,
          rating: d.rating.rate,
          reviews: []
        });
        console.log("Document written with ID: ", docRef.id);
      
      } catch (e) {
        console.error("Error adding document: ", e);
      }
     })
  } */

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
