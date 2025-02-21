import React from 'react'
import FAQComponent from '../../Components/FAQComponent/FAQComponent'
import ProductsSectionComponent from '../../Components/ProductsSectionComponent/ProductsSectionComponent'
import StepsComponent from '../../components/StepsComponent/StepsComponent'
import HeroComponent from '../../Components/HeroComponent/HeroComponent'
import AdComponent from '../../Components/AdComponent/AdComponent'

export default function Home() {
  return (
    <div>
      <HeroComponent/>
      <StepsComponent />
      <ProductsSectionComponent/>
      <FAQComponent />
      <AdComponent />
    </div>

  )
}