import React from 'react'
import "./FooterComponent.css"
import logo from "../../assets/imgs/Footer/Logo.png"
import emailArrow from "../../assets/imgs/Footer/arrowIcon.png"
import { Link } from 'react-router-dom'
import SocialIconComponent from '../SocialIconComponent/SocialIconComponent'
import FooterLinksComponent from '../FooterLinksComponent/FooterLinksComponent'
import TestimonialsComponent from '../TestimonialsComponent/TestimonialsComponent'

export default function FooterComponent() {
  return (
    <footer>
      <TestimonialsComponent />
      <div className="footerParts">
        <div className="footerFirstPart border2">
          <img src={logo} className="logo" alt="logo" />
          <SocialIconComponent />
        </div>
        <div className="footerSecondPart border2">
          <FooterLinksComponent />
          <div className="email">
            <h6> Subscribe to Newsletter </h6>
            <div className="emailInput centring">
              <input
                className="rounded-12 text-18"
                type="email"
                placeholder="Your Email" />
              <button>
                <img src={emailArrow} />
              </button>
            </div>
          </div>
        </div>
        <div className="footerThirdPart border2 text-18">
          <span> © 2024 StyleLoom. All rights reserved. </span>
          <div>
            <Link to={""}> Terms & Conditions </Link>
            <Link to={""}>  | Privacy Policy </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
