import React from 'react'

import { useSelector } from 'react-redux'

import Footer from '../../components/Footer/Footer'
import Header from '../../components/header/Header'
import ProductCard from '../../components/ProductCard/ProductCard'

import styles from './Products.module.css'

export default function Products() {
  const products = useSelector(state => state.products.data)

  return (
    <>
      <Header />

      <section className="container">
        <div className={`${styles.subHeader} container`}>
          <i className="fas fa-home"></i> 
          <p> {'>'} Products</p>
        </div>

        <div className={styles.products}>
          {products.map(product => {
            return <ProductCard key={product.id} product={product}/>
          })}
        </div>
      </section>

      <Footer />
    </>
  )
}
