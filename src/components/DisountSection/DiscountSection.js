import React from 'react'

import styles from './DiscountSection.module.css'

export default function DiscountSection() {
  return (
    <div className={styles.discountSection}>
      <div className={styles.overlay}>
        <h4>Extra <span><i className="far fa-star"></i>30% off<i className="far fa-star"></i></span></h4>
        <h1>Discount Sale</h1>
        <p>Free Shipping on orders over $99</p>
        <a href="./products">Shop now</a>
      </div>
    </div>
  )
}
