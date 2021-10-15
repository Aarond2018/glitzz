import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/header/Header'
import ProductCard from '../../components/ProductCard/ProductCard'

import styles from "./SearchPage.module.css"

export default function SearchPage() {
  const location = useLocation()
  const products = useSelector(state => state.products.data)
  
  const queryParams = new URLSearchParams(location.search)
  let searchedProducts = []

  if(queryParams.get("value").trim() !== "") {
    searchedProducts = products.filter(product => product.title.toLowerCase().includes(queryParams.get("value").toLowerCase()))
  } else {
    searchedProducts = []
  }
  
  return (
    <>
      <Header />
      
      <div className={`${styles.container} container`}>
        <h4>Search result</h4>
        <div className={styles.products}>
          {searchedProducts.length === 0 ? <h5>No Product(s) matched your search...</h5> : 
            searchedProducts.map(product => {
              return (
                <ProductCard key={product.id} product={product}/>
              )
            })
          }
        </div>
      </div>

      <Footer />
    </>
  )
}
