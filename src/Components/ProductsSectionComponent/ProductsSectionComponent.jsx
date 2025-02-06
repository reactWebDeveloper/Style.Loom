import React from 'react'
import './ProductsSectionComponent.css'
import {productsData} from '../../Data/productsData.jsx';
import ProductComponent from '../ProductComponent/ProductComponent.jsx';
export default function ProductsSectionComponent() {
  return (
    <div className='p-162 es-main-products-container'>
      <section className='es-products-section border1 d-flex flex-column'>
        <div className="es-upper d-flex flex-column">
          <div className="es-title"></div>
          <ul className="es-tabs d-flex">
            <li className="es-tab border1 text-18">All</li>
            <li className="es-tab border1 text-18">Men</li>
            <li className="es-tab es-active-tab border1 text-18">Women</li>
            <li className="es-tab border1 text-18">Kids</li>
          </ul>
        </div>
        <div className="es-products">
        {productsData.map((product) => {
          <ProductComponent img={product.img} title={product.title} category={product.category} fit={product.fit} price={product.price}/>
        })}
     
        </div>
      </section>
    </div>
  )
}
