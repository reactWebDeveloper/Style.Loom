import React from 'react'
import FAQComponent from '../../Components/FAQComponent/FAQComponent'
import ProductsSectionComponent from '../../Components/ProductsSectionComponent/ProductsSectionComponent'
import StepsComponent from '../../components/StepsComponent/StepsComponent'

export default function Home() {
  return (
    <div>
      <StepsComponent />
      <ProductsSectionComponent/>
      <FAQComponent />
      
    </div>
  )
}