import React from 'react'
import HeroComponent from '../../Components/HeroComponent/HeroComponent'
import FAQComponent from '../../Components/FAQComponent/FAQComponent'
import StepsComponent from '../../Components/StepsComponent/StepsComponent'
import ProductComponent from '../../Components/ProductComponent/ProductComponent'
import TrendsSectionComponent from '../../Components/TrendsSectionComponent/TrendsSectionComponent'

export default function Home() {
  return (
    <div>
      <HeroComponent/>
      <TrendsSectionComponent />
      <StepsComponent />
      <ProductComponent/>
      <FAQComponent />
    </div>
  )
}