import React from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import "./ContactInfoComponent.css"
import vector from "../../assets/imgs/Vector2.webp"

function ContactInfoComponent() {
  return (
    <>
      <section className="ContactInfoComponent p-162">
        <div className="border2">
          <TitleComponent
            title={"Your Partner in Every Step of Your Fashion Journey."}
            desc={"24/7 Assistance for Seamless Shopping and Unmatched Customer Satisfaction"}
            img={vector}
            fullImage={true}
          />
        </div>
        <h2 className="ContactInfoTitle border2"> contact information </h2>
      </section>
    </>
  )
}

export default ContactInfoComponent
