import React, { useState } from 'react'
import '../ProductsSectionComponent/ProductsSectionComponent.css'
import './ProductsPageComponent.css'
import { productsData } from '../../Data/productsData.jsx';
import titleImg from "../../assets/imgs/AbstractDesign.png"
import TitleComponent from '../TitleComponent/TitleComponent.jsx';
import ProductComponent from '../ProductComponent/ProductComponent.jsx';

export default function ProductsPageComponent() {
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
          <div className="es-title">
            <TitleComponent title={'Elevate Your Style with Our Latest Collection'} desc={'Each piece is crafted to enhance your fashion statement.'} fullImage={false} img={titleImg}/>
          </div>
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
          {filteredProducts.map((product, index) => (
            <ProductComponent
              id={index}
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
