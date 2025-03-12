import React, { useState } from 'react'
import './ProductsSectionComponent.css'
import ProductsComponent from '../ProductsComponent/ProductsComponent.jsx'
import CategorySelectComponent from '../CategorySelectComponent/CategorySelectComponent.jsx'
import TitleComponent from '../TitleComponent/TitleComponent.jsx';
import titleImg from "../../assets/imgs/AbstractDesign.png";

export default function ProductsSectionComponent() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className='p-162 es-main-products-container'>
      <section className='es-products-section border1 d-flex flex-column'>
        <div className="es-upper d-flex flex-column">
          <div className="es-title">
            <TitleComponent title={'Elevate Your Style with Our Latest Collection'} desc={'Each piece is crafted to enhance your fashion statement.'} fullImage={false} img={titleImg}/>
          </div>
          <CategorySelectComponent onCategoryChange={setActiveTab} tab={activeTab} />
        </div>
        <ProductsComponent tab={activeTab} />
      </section>
    </div>
  )
}
