import React, { useState } from 'react'
import './ProductsSectionComponent.css'
import { productsData } from '../../Data/productsData.jsx';
import ProductComponent from '../ProductComponent/ProductComponent.jsx';
export default function ProductsSectionComponent() {
  const [activeTab, setActiveTab] = useState('Women');
  const handleTabClick = (category) => {
    setActiveTab(category);
  }
  const filteredProducts = 
        activeTab == 'All' ? [...productsData.womenProductsData, ...productsData.kidsProductsData, ...productsData.menProductsData]
        : activeTab == "Women" ? productsData.womenProductsData
        : activeTab == "Men" ? productsData.menProductsData
        : productsData.kidsProductsData;
  return (
    <div className='p-162 es-main-products-container'>
      <section className='es-products-section border1 d-flex flex-column'>
        <div className="es-upper d-flex flex-column">
          <div className="es-title"></div>
          <ul className="es-tabs d-flex">
            {['All', 'Men', 'Women', 'Kids'].map((category) => (
              <li className={`es-tab border1 text-18 ${activeTab == category ? 'es-active-tab' : ""}`} 
                  onClick={() => handleTabClick(category)}>
                  {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="es-products d-flex flex-wrap">
          {filteredProducts.map((product) => (
            <ProductComponent
              img={product.img}
              title={product.title}
              category={product.category}
              fit={product.fit}
              price={product.price}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
