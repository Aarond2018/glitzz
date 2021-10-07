import React from 'react'

import { useDispatch } from 'react-redux'
import { userActions } from '../../store/userSlice'

import { Link } from 'react-router-dom'

import styles from './ProductCard.module.css' 

export default function ProductCard(props) {
  const dispatch = useDispatch()

  const handleAddToCart = (e) => {
    e.preventDefault()
    dispatch(userActions.addToCart({...props.product, quantity: 1}))

  }
  
  return (
    <Link to={`/product/${props.product.id}`} className={styles.product}>
      <div className={styles["product-part1"]}>
        <img src={props.product.image} alt=""></img>
        <div className={styles.icons}>
          <div className={styles.icon}><i className="far fa-heart"></i></div>
          <div className={styles.icon} onClick={handleAddToCart}><i className="fas fa-shopping-bag"></i></div>
        </div>
        <div className={styles.button}><p>View Product</p></div>
      </div>
      <div className={styles["product-part2"]}>
        <h6>{props.product.title.slice(0, 20) + "..."}</h6>
        <p>${props.product.price}</p>
      </div>
  </Link>
  )
}
