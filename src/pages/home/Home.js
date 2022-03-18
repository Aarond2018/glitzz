import React, { useState, useEffect } from 'react'

import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

import  Header from '../../components/header/Header'
import Carousel from '../../components/Carousel/Carousel'
import ProductCard from '../../components/ProductCard/ProductCard'

import styles from './home.module.css'
import DiscountSection from '../../components/DisountSection/DiscountSection'
import Footer from '../../components/Footer/Footer'
import menImage from '../../Assets/men.jpg'
import womenImage from '../../Assets/women.jpg'
import electronicsImage from '../../Assets/electronics.jpg'
import jeweleryImage from '../../Assets/jewelery.jpg'

export default function Home(props) {
  const [scrollBar, setScrollBar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setScrollBar(true) : setScrollBar(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const reduxProducts = useSelector(state => state.products.data)

  const products = reduxProducts.slice(0, 8)

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth"
    })
  }

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
              <Link to="/products/men's clothing">Men's Clothing</Link>
            </div>
          </div>
          <div className={styles.category}>
            <img src={womenImage} alt=""></img>
            <div>
              <Link to="/products/women's clothing">Women's Clothing</Link>
            </div>
          </div>
          <div className={styles.category}>
            <img src={electronicsImage} alt=""></img>
            <div>
              <Link to="/products/electronics">Electronics</Link>
            </div>
          </div>
          <div className={styles.category}>
            <img src={jeweleryImage} alt=""></img>
            <div>
              <Link to="/products/jewelery">Jewelery</Link>
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
