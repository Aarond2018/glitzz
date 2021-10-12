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
  if (cart) {
    cart.length !== 0 ? totalPrice = cart.map(p => p.price * p.quantity).reduce((a, b) => a + b) : totalPrice = 0;
  }
  else {
    return
  }
  const handleDelete = (id) => {
    dispatch(userActions.removeFromCart(id))
  }

  const handleIncrement = id => {
    dispatch(userActions.increaseQuantity(id))
  }

  const handleDecrement = id => {
    dispatch(userActions.decreaseQuantity(id))
  }

 
  return (
    <div className={styles.main}>
      <div className={styles["main-items"]}>
      {cart.length === 0 ? 
        <p>No Items in Cart</p> : 
        cart.map(item => {
          return (
              <div key={item.id} className={styles["main-item"]}>
                <div className={styles["main-item__image"]}>
                  <img src={item.image} alt=""></img>
                </div>
                <div>
                  <h5>{item.title}</h5>
                </div>
                <p>${item.price}</p>
                <div className={styles.quantity}>
                  <button onClick={() => handleDecrement(item.id)}>-</button>
                  <div><p>{item.quantity}</p></div>
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                </div>
                <div className={styles.delete} onClick={() => handleDelete(item.id)}>
                  <i className="far fa-trash-alt"></i>
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
