import React from 'react'
import './ProductComponent.css'
import { Link } from 'react-router-dom'

export default function ProductComponent({img, title, price, fit, category, id}) {
  const productData ={
    proImg: img,
    proTitle: title,
    proPrice: price,
    proFit: fit,
    proCateg: category,
    proId: id
  }
  return (
      <div className="es-product-card d-flex flex-column" id={id}>
        <div className="es-product-img">
          <img src={img} alt={title} className='img-fluid' />
        </div>
        <div className="es-product-card-row d-flex justify-content-between">
          <div className="es-category"><span>{category}</span></div>
          <button type='button' className='es-card-btn'>Shop Now</button>
        </div>
        <Link to={'/productDetails'} state={productData}>
          <div className="es-product-title">{title}</div>
        </Link>
        <div className="es-product-details d-flex text-18">
          <div className="es-product-fit "><span>Fit.</span>{fit}</div>
          <div className="es-product-price"><span>Price.</span>${price}</div>
        </div >
      </div>
  )
}
