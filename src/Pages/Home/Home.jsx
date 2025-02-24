import React from 'react'
import HeroComponent from '../../Components/HeroComponent/HeroComponent'
import FAQComponent from '../../Components/FAQComponent/FAQComponent'
import StepsComponent from '../../Components/StepsComponent/StepsComponent'
import TrendsSectionComponent from '../../Components/TrendsSectionComponent/TrendsSectionComponent'
import ProductsSectionComponent from '../../Components/ProductsSectionComponent/ProductsSectionComponent'
import TestimonialSection from './../../components/TestimonialSection/TestimonialSection'
import AdComponent from "../../Components/AdComponent/AdComponent"

export default function Home() {
  return (
    <>
      <HeroComponent />
      <TrendsSectionComponent />
      <StepsComponent />
      <ProductsSectionComponent />
      <TestimonialSection />
      <FAQComponent />
      <AdComponent />
    </>
  )
}