import React from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import "./ContactInfoComponent.css"
import vector from "../../assets/imgs/Vector2.webp"
import { ContactInfoData } from '../../Data/ContactInfoData'
import TrendsCardComponent from '../TrendsCardComponent/TrendsCardComponent'

function ContactInfoComponent() {
  return (
    <>
      <section className="ContactInfoComponent p-162">
        <div className="ContactInfoTitleComponent">
          <TitleComponent
            title={"Your Partner in Every Step of Your Fashion Journey."}
            desc={"24/7 Assistance for Seamless Shopping and Unmatched Customer Satisfaction"}
            img={vector}
            fullImage={true}
          />
        </div>
        <h2 className="ContactInfoTitle">
          contact information
        </h2>
        <div className="contactInfo">
          {ContactInfoData.map((e, index) => {
            return (
              <TrendsCardComponent key={index} data={e} />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default ContactInfoComponent
