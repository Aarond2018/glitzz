import React, { useState } from 'react'

import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userActions } from '../../store/userSlice'

import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebase"

import Footer from '../../components/Footer/Footer'
import Header from '../../components/header/Header'

import styles from './ProductDetails.module.css'
import image from '../../Assets/product.jpg'
import { productActions } from '../../store/productSlice'

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [formInputs, setFormInputs] = useState({
    name: "",
    rating: 1,
    comment: ""
  })

  const params = useParams()
  const cart = useSelector(state => state.users.cart)
  const product = useSelector(state => state.products.data.find(p => p.id === params.pId))
  const dispatch = useDispatch()

  const quant = cart?.find(p => p?.id === product?.id)?.quantity


  const handleQuantityPlus = () => {
    if (!cart.find(item => item.id === product.id) ) {
      dispatch(userActions.addToCart({...product, quantity: 1})) 
    }
    dispatch(userActions.increaseQuantity(product.id))
  }

  const handleQuantityMinus = () => {
    if (!cart.find(item => item.id === product.id) ) {
      dispatch(userActions.addToCart({...product, quantity: 1})) 
    }
    dispatch(userActions.decreaseQuantity(product.id))
  }

  const handleAddToCart = e => {
    e.preventDefault()
    dispatch(userActions.addToCart({...product, quantity: 1})) 
  }

  const onInputChange = e => {
    console.log(e.target.id)
    setFormInputs({...formInputs, [e.target.id]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    const review = {
      ...formInputs,
      id: product.id
    }
    dispatch(productActions.addReview(review))
    updateFirebase(review)
    setFormInputs({
      name: "",
      rating: 1,
      comment: ""
    })
  }

  const updateFirebase = async (item) => {
    const itemRef = doc(db, "products", product.id);
    await updateDoc(itemRef, {
      reviews: [...product.reviews, item]
    });
  }

  return (
    <>
      <Header />

      <section className={`${styles.container} container`}>
        <div className={`${styles.subHeader}`}>
          <i className="fas fa-home"></i>
          <p>  {'>'} Details</p>
        </div>
        <div className={styles["product-main"]}>
          <div className={styles["product-img-wrapper"]}>
            <img src={product?.image} alt=""></img>
          </div>
          <div className={styles["product-overview"]}>
            <div>
              <h5>{product?.title}</h5>
              <p className={styles.price}>${product?.price}</p>
              <p className={styles.desc}>{product?.description}</p>
              <div className={styles.cta}>
                <div className={styles.quantity}>
                  <button onClick={handleQuantityMinus}>-</button> 
                  <div><p>{quant || 1}</p></div>
                  <button onClick={handleQuantityPlus}>+</button>
                </div>
                <button onClick={handleAddToCart} className={styles["add-cart"]}><i className="fas fa-shopping-bag"></i>Add to Cart</button>
              </div>
              <div className={styles.wish}>
                <i className="far fa-heart"></i><p>Add to Wishlist</p>
              </div>
            </div>
            
          </div>
        </div>
        <div className={styles["product-reviews"]}>
          <h5>Reviews</h5>
          <div className={styles.reviews}>
            {product?.reviews.length < 1 ? <h6>No Reviews yet..</h6>
            :
            product?.reviews.map(review => {
              return (
                <div className={styles.review}>
                  <p className={styles["review__name"]}>{review.name}</p>
                  <p className={styles.date}>{new Date().toLocaleDateString()}</p>
                  <p>{review.comment}</p>
                </div>
              )
            })
            }           
          </div>
          <form onSubmit={handleSubmit} className={styles["review-form"]}>
            <h5>Write a Customer Review</h5>
            <div className={styles["form-group"]}>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" onChange={onInputChange} value={formInputs.name}></input>
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="rating">Rating</label>
              <select id="rating" onChange={onInputChange} value={formInputs.rating}>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
              </select>
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="comment">Comment</label>
              <textarea id="comment" rows="5" onChange={onInputChange} value={formInputs.comment}></textarea>
            </div>
            <button type="submit">SUBMIT</button>
          </form>
        </div>

      </section> 

      <Footer />
    </>
  )
}
