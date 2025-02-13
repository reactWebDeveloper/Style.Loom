import React from 'react'
import "./AdComponent.css"
import btnArrow from "../../assets/imgs/Icons/Icon-8.png"

export default function AdComponent() {
  return (
    <>
      <section className="adComponent rounded-20">
        <div className="adContent">
          <h4> Elevate your wardrobe </h4>
          <p className="text-18">
            Don't miss out – experience the epitome of fashion by clicking
            'Buy Now' and embrace a world of chic elegance delivered
            to your doorstep.Your style journey begins here.
          </p>
        </div>
        <button className="rounded-12 text-18">
          shop Now
          <img src={btnArrow} />
        </button>
      </section>
    </>
  )
}
