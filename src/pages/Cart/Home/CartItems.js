import React from 'react'

import { Link } from 'react-router-dom'

import styles from './Cart.module.css'
import image from '../../../Assets/product.jpg'

export default function CartItems() {
  return (
    <div className={styles.main}>
      <div className={styles["main-items"]}>
        <div className={styles["main-item"]}>
          <div className={styles["main-item__image"]}>
            <img src={image} alt=""></img>
          </div>
          <div>
            <h5>Converse training shoes</h5>
          </div>
          <p>$125.00</p>
          <div className={styles.quantity}>
            <button>-</button>
            <div><p>0</p></div>
            <button>+</button>
          </div>
          <div className={styles.delete}>
            <p>x</p>
          </div>
        </div>
        <div className={styles["main-item"]}>
          <div className={styles["main-item__image"]}>
            <img src={image} alt=""></img>
          </div>
          <div>
            <h5>Converse training shoes</h5>
          </div>
          <p>$125.00</p>
          <div className={styles.quantity}>
            <button>-</button>
            <div><p>0</p></div>
            <button>+</button>
          </div>
          <div className={styles.delete}>
            <p>x</p>
          </div>
        </div>
        <div className={styles["main-item"]}>
          <div className={styles["main-item__image"]}>
            <img src={image} alt=""></img>
          </div>
          <div>
            <h5>Converse training shoes</h5>
          </div>
          <p>$125.00</p>
          <div className={styles.quantity}>
            <button>-</button>
            <div><p>0</p></div>
            <button>+</button>
          </div>
          <div className={styles.delete}>
            <p>x</p>
          </div>
        </div>
        <Link to="/products">Continue Shopping</Link>
      </div>
      <div className={styles["main-total"]}>
        <h4>Cart Totals</h4>
        <div>
          <p>Subtotal</p>
          <p>$426.00</p>
        </div>
        <button>Proceed to checkout</button>
      </div>
    </div>
  )
}
