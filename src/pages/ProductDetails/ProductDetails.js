import React, { useState } from 'react'

import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Footer from '../../components/Footer/Footer'
import Header from '../../components/header/Header'

import styles from './ProductDetails.module.css'
import image from '../../Assets/product.jpg'

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);

  const params = useParams()
  const product = useSelector(state => state.products.data.find(p => p.id === params.pId))

  const handleQuantityPlus = () => {
    setQuantity(q => q + 1)
  }

  const handleQuantityMinus = () => {
    quantity <= 1 ? setQuantity(1) : setQuantity(q => q - 1)
  }

  return (
    <>
      <Header />

      <section className={`${styles.container} container`}>
        <div className={`${styles.subHeader}`}>
          <i class="fas fa-home"></i>
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
                  <div><p>{quantity}</p></div>
                  <button onClick={handleQuantityPlus}>+</button>
                </div>
                <button className={styles["add-cart"]}><i className="fas fa-shopping-bag"></i>Add to Cart</button>
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
            <div className={styles.review}>
              <p className={styles["review__name"]}>Jeevan</p>
              <p>2021-09-09</p>
              <p>Excellent product, I love it</p>
            </div>
            <div className={styles.review}>
              <p className={styles["review__name"]}>Jeevan</p>
              <p>2021-09-09</p>
              <p>Excellent product, I love it</p>
            </div>
          </div>
          <form className={styles["review-form"]}>
            <h5>Write a Customer Review</h5>
            <div className={styles["form-group"]}>
              <label for="rating">Rating</label>
              <select id="rating">
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
              </select>
            </div>
            <div className={styles["form-group"]}>
              <label for="comment">Comment</label>
              <textarea id="comment" rows="5"></textarea>
            </div>
            <button type="submit">SUBMIT</button>
          </form>
        </div>

      </section> 

      <Footer />
    </>
  )
}
