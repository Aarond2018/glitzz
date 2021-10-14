import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import ProductCard from '../../components/ProductCard/ProductCard'

export default function CategoryProducts() {
  const params = useParams()
  const products = useSelector(state => state.products.data)
  const filteredProds = products.filter(prod => prod.category === params.cName)

  return (
    <>
      {filteredProds.map(product => {
        return  <ProductCard key={product.id} product={product}/>
      })}
    </>
  )
}
