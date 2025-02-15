import React from 'react'
import "./AdComponent.css"
import vector from "../../assets/imgs/Ad/Vector.webp"

export default function AdComponent() {
  return (
    <>
      <section className="adComponent">
        <div className="adContent rounded-20">
          <div className="adText" >
            <h4> Elevate your wardrobe </h4>
            <p className="text-18">
              Don't miss out – experience the epitome of fashion by clicking
              'Buy Now' and embrace a world of chic elegance delivered
              to your doorstep.Your style journey begins here.
            </p>
          </div>
          <button>
            shop now
          </button>
          <img src={vector} />
        </div>
      </section>
    </>
  )
}
