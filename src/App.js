import React, { useEffect, useState, Suspense } from 'react'

import { useDispatch } from 'react-redux';
import { productActions } from './store/productSlice'
import { userActions } from './store/userSlice'

import {Switch, Route} from 'react-router-dom'
import { db } from './Firebase/firebase'
import { collection, addDoc, getDocs, doc } from "firebase/firestore";

import './App.css';
/* import Home from './pages/home/Home'
import ContactPage from './pages/Contact/ContactPage';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Home/Cart' */
import Loader from './components/Loader/Loader'

const Home = React.lazy(() => import('./pages/home/Home'))
const ContactPage = React.lazy(()=>import('./pages/Contact/ContactPage'))
const ProductDetails = React.lazy(()=>import('./pages/ProductDetails/ProductDetails'))
const SignIn = React.lazy(()=>import('./pages/SignIn/SignIn'))
const SignUp = React.lazy(()=>import('./pages/SignUp/SignUp'))
const Products = React.lazy(()=>import('./pages/Products/Products'))
const Cart = React.lazy(()=>import('./pages/Cart/Home/Cart'))


function App() {
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch(); 
  
  //persist the redux data through the saved Cookie
  if (document.cookie.includes("userData")) {
    const d = document.cookie.split('; ').find(row => row.startsWith('userData=')).split('=')[1];

    if (!JSON.parse(d).email === "") {
      dispatch(userActions.signIn(JSON.parse(d)))
    }
  }

  useEffect(() => {
    //on load, checks if there is a cookie data already, if not initializes the cookie data for not yet logged in users
    if (!document.cookie.includes("userData")) {
      const userData = {"uID":"","name":"","cart":[],"record":[],"email":""}
      document.cookie = `userData=${JSON.stringify(userData)}`
    }
    
    //on refresh gets the cart from local storage or initializes it to be an empty array
    const cart = JSON.parse(localStorage.getItem('cart')) || []

    getProducts()
    dispatch(userActions.reformatCart(cart))
   
  }, [])

  const getProducts = async () => {
    setLoading(true)
    const arr = [];

    //Get the products from firebase and push into an array
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    /* console.log(doc.id, " => ", doc.data()); */
    
    arr.push({
      id: doc.id,
      ...doc.data()
    })
    
    });
    //send the gotten data to the redux store
    dispatch(productActions.add(arr))

    setLoading(false)
  }

 /*  //send data to firebase
    const add = async (data) => {
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
          <Suspense fallback={<Loader />}>
            {!loading ? <Home /> : <Loader />} 
          </Suspense>
        </Route>
        <Route exact path='/contact-us'>
          <Suspense fallback={<Loader />}>
            <ContactPage />
          </Suspense>
        </Route>
        <Route exact path='/products'>
          <Suspense fallback={<Loader />}>
            {!loading ? <Products /> : <Loader />}
          </Suspense>
        </Route>
        <Route exact path='/product/:pId'>
          <Suspense fallback={<Loader />}>
            {!loading ? <ProductDetails /> : <Loader />}
          </Suspense>
        </Route>
        <Route exact path='/signin'>
          <Suspense fallback={<Loader />}>
            <SignIn />
          </Suspense>
        </Route>
        <Route exact path='/signup'>
          <Suspense fallback={<Loader />}>
            <SignUp />
          </Suspense>
        </Route>
        <Route path='/cart'>
          <Suspense fallback={<Loader />}>
            {!loading ? <Cart /> : <Loader />}
          </Suspense>
        </Route>
      </Switch>
  );
}

export default App;
