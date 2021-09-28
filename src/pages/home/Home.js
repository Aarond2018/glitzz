import React from 'react'

import  Header from '../../components/header/Header'
import Carousel from '../../components/Carousel/Carousel'

import styles from './home.module.css'
import menImage from '../../Assets/men.jpg'

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <section className={`${styles.container} container`}>
        <div className={styles.features}>
          <div className={styles.feature}>
            <i class="fas fa-headset"></i>
            <div>
              <h3>Customer Support 24/7</h3>
              <p>Instant access to perfect support</p>
            </div>
          </div>
          <div className={styles.feature}>
            <i class="fas fa-shield-alt"></i>
            <div>
              <h3>100% Secure payment</h3>
              <p>We ensure secure payment</p>
            </div>
          </div>
          <div className={styles.feature}>
            <i class="fas fa-shipping-fast"></i>
            <div>
              <h3>Free shipping & Return</h3>
              <p>Free shipping on orders over $99</p>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles["category-section"]} container`}>
        <h4>Our Categories</h4>
        <div className={styles.categories}>
          <div className={styles.category}>
            <img src={menImage} alt=""></img>
            <div>
              <p>Men's Fashion</p>
            </div>
          </div>
          <div className={styles.category}>
            <img src={menImage} alt=""></img>
            <div>
              <p>Men's Fashion</p>
            </div>
          </div>
          <div className={styles.category}>
            <img src={menImage} alt=""></img>
            <div>
              <p>Men's Fashion</p>
            </div>
          </div>
          <div className={styles.category}>
            <img src={menImage} alt=""></img>
            <div>
              <p>Men's Fashion</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
