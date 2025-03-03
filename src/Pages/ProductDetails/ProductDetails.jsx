import React from 'react'
import ProductDetailsComponent from '../../components/ProductDetailsComponent/ProductDetailsComponent'
import { useLocation } from 'react-router-dom'

export default function ProductDetails() {
  const location = useLocation();
  const {state} = location;
  return (
    <div>
      <ProductDetailsComponent product={state}/>
    </div>
  )
}
