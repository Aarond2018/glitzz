import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'
import { userActions } from '../../../store/userSlice'

import styles from './Cart.module.css'

export default function CartItems() {
  const dispatch = useDispatch()

  const cart = useSelector(state => state.users.cart)
  let totalPrice;
  
  //Get the total price of items in the cart
  cart.length !== 0 ? totalPrice = cart.map(p => p.price).reduce((a, b) => a + b) : totalPrice = 0;
  
  const handleDelete = (id) => {
    dispatch(userActions.removeFromCart(id))
  }
 
  return (
    <div className={styles.main}>
      <div className={styles["main-items"]}>
      {cart.length === 0 ? 
        <p>No Items in Cart</p> : 
        cart.map(item => {
          return (
              <div className={styles["main-item"]}>
                <div className={styles["main-item__image"]}>
                  <img src={item.image} alt=""></img>
                </div>
                <div>
                  <h5>{item.title}</h5>
                </div>
                <p>${item.price}</p>
                <div className={styles.quantity}>
                  <button>-</button>
                  <div><p>0</p></div>
                  <button>+</button>
                </div>
                <div className={styles.delete} onClick={() => handleDelete(item.id)}>
                  <i class="far fa-trash-alt"></i>
                </div>
              </div>
          )
        })
      }
      <Link to="/products">Continue Shopping</Link>
      </div>
      <div className={styles["main-total"]}>
        <h4>Cart Totals</h4>
        <div>
          <p>Subtotal</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
        <button>Proceed to checkout</button>
      </div>
    </div>
  )
}
