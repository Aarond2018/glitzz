import React from 'react'

import styles from './ProductCard.module.css'
import productImg from  '../../Assets/product.jpg'

export default function ProductCard() {
  return (
    <div className={styles.product}>
      <div className={styles["product-part1"]}>
        <img src={productImg} alt=""></img>
        <div className={styles.icons}>
          <div className={styles.icon}><i className="far fa-heart"></i></div>
          <div className={styles.icon}><i className="fas fa-shopping-bag"></i></div>
        </div>
        <div className={styles.button}><p>View Product</p></div>
      </div>
      <div className={styles["product-part2"]}>
        <h6>Fashion Electric wrist wat...</h6>
        <p>$270.99</p>
      </div>
  </div>
  )
}
