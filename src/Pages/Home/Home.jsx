import React from 'react'
import '../../Components/HeroComponent/HeroComponent'
import '../../Components/FAQComponent/FAQComponent'
import '../../Components/StepsComponent/StepsComponent'
import '../../Components/ProductComponent/ProductComponent'
import '../../Components/ProductsSectionComponent/ProductsSectionComponent'
import '../../Components/TrendsSectionComponent/TrendsSectionComponent'

export default function Home() {
  return (
    <div>
      <HeroComponent/>
      <StepsComponent />
      <ProductsSectionComponent/>
      <FAQComponent />
      <TrendsSectionComponent />
    </div>
  )
}