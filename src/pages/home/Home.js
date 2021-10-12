import React, { useState, useEffect } from 'react'

import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

import  Header from '../../components/header/Header'
import Carousel from '../../components/Carousel/Carousel'
import ProductCard from '../../components/ProductCard/ProductCard'

import styles from './home.module.css'
import menImage from '../../Assets/men.jpg'
import DiscountSection from '../../components/DisountSection/DiscountSection'
import Footer from '../../components/Footer/Footer'

export default function Home(props) {
  const [scrollBar, setScrollBar] = useState(false)

  const reduxProducts = useSelector(state => state.products.data)

  const products = reduxProducts.slice(0, 8)
  

  const handleScroll = () => {
    window.scrollY > 100 ? setScrollBar(true) : setScrollBar(false)
  }

  window.addEventListener('scroll', handleScroll)

  const handleScrollToTop = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', handleScroll)
     
    }
  })

  return (
    <>
      <Header />
      <Carousel />
      <section className={`${styles.container} container`}>
        <div className={styles.features}>
          <div className={styles.feature}>
            <i className="fas fa-headset"></i>
            <div>
              <h3>Customer Support 24/7</h3>
              <p>Instant access to perfect support</p>
            </div>
          </div>
          <div className={styles.feature}>
            <i className="fas fa-shield-alt"></i>
            <div>
              <h3>100% Secure payment</h3>
              <p>We ensure secure payment</p>
            </div>
          </div>
          <div className={styles.feature}>
            <i className="fas fa-shipping-fast"></i>
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

      <section>
        <DiscountSection />
      </section>

      <section className={`${styles["featured-container"]} container`}>
        <h4>Our Featured</h4>
        <div className={styles.products}>
          {products.map(product => {
            return <ProductCard key={product.id} product={product} />
          })}
        </div>
        <div className={styles["moreProducts-btn"]}>
          <Link to="/products">See More ...</Link>
        </div>
      </section>

      <Footer />
      <div onClick={handleScrollToTop} className={!scrollBar ? styles.scrollBtn : `${styles.scrollBtn} ${styles.displayBar}`}>
        <i className="fas fa-arrow-up"></i>
      </div>
    </>
  )
}
