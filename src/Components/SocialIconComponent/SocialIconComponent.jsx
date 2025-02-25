import React from 'react'
import "./SocialIconComponent.css"
import icon1 from "../../assets/imgs/Footer/Icon-1.png"
import icon2 from "../../assets/imgs/Footer/Icon-2.png"
import icon3 from "../../assets/imgs/Footer/Icon-3.png"
import icon4 from "../../assets/imgs/Footer/Icon-4.png"

const icons = [
  {
    icon: icon1,
    alt: "Instagram icon"
  },
  {
    icon: icon2,
    alt: "Dribble icon"
  },
  {
    icon: icon3,
    alt: "Twitter icon"
  },
  {
    icon: icon4,
    alt: "Behance icon"
  },
]
export default function SocialIconComponent() {
  return (
    <>
      <div className="ET-socialIcons">
        {icons.map((e, index) => (
          <div className="ET-socialFooterIcon rounded-12" key={index}>
            <a href="#">
              <img src={e.icon} alt={e.alt} />
            </a>
          </div>
        ))
        }
      </div>
    </>
  )
}
