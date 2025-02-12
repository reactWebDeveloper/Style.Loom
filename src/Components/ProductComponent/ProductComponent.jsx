import React from 'react'
import './ProductComponent.css'

export default function ProductComponent({img, title, price, fit, category}) {
  return (
    <div>
      <div className="es-product-card d-flex flex-column">
        <div className="es-product-img">
          <img src={img} alt={title} className='img-fluid' />
        </div>
        <div className="es-product-card-row d-flex justify-content-between">
          <div className="es-category"><span>{category}</span></div>
          <button type='button' className='es-card-btn'>Shop Now</button>
        </div>
        <div className="es-product-title">{title}</div>
        <div className="es-product-details d-flex text-18">
          <div className="es-product-fit "><span>Fit.</span>{fit}</div>
          <div className="es-product-price"><span>Price.</span>${price}</div>
        </div >
      </div>
    </div>
  )
}
