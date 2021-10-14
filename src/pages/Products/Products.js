import React from 'react'

import { useSelector } from 'react-redux'
import { NavLink, Switch, Route, Redirect, useHistory } from 'react-router-dom'

import Footer from '../../components/Footer/Footer'
import Header from '../../components/header/Header'
import ProductCard from '../../components/ProductCard/ProductCard'
import CategoryProducts from './CategoryProducts'

import styles from './Products.module.css'

export default function Products() {
  const history = useHistory()

  const products = useSelector(state => state.products.data)

  const women = "women's clothing"
  const men = "men's clothing"

  const handleSelectChange = e => {

    if (e.target.value === "All Products") {
      history.push("/products")
    } else {
      history.push(`/products/${e.target.value}`)
    }
  }

  return (
    <>
      <Header />

      <section className="container">
        <div className={`${styles.subHeader} container`}>
          <i className="fas fa-home"></i> 
          <p> {'>'} Products</p>
        </div>

        <section className={styles.display}>
          <div></div>
          <h1>Glitzz Shop</h1>
        </section>

        <select className={styles.select} onChange={handleSelectChange}>
          <option value="All Products">All Products</option>
          <option value="men's clothing">men's clothing</option>
          <option value="women's clothing">women's clothing</option>
          <option value="electronics">electronics</option>
          <option value="jewelery">jewelery</option>
        </select>

        <div className={styles.main}>
          <ul>
            <li className={styles.allProducts}><NavLink to="/products">All Products</NavLink></li>
            <li><NavLink to={`/products/${men}`} activeClassName={styles.activeLink}>Men's Clothing</NavLink></li>
            <li><NavLink to={`/products/${women}`} activeClassName={styles.activeLink}>Women's Clothing</NavLink></li>
            <li><NavLink to="/products/electronics" activeClassName={styles.activeLink}>Electronics</NavLink></li>
            <li><NavLink to="/products/jewelery" activeClassName={styles.activeLink}>Jewelery</NavLink></li>
          </ul>
          <div className={styles.products}>
            
              <Route exact path="/products">
                {products.map(product => {
                  return <ProductCard key={product.id} product={product}/>
                })}
              </Route>
              <Route exact path="/products/:cName">
                <CategoryProducts />
              </Route>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
