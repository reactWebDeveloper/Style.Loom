import React from 'react'
import "./FooterComponent.css"
import logo from "../../assets/imgs/Footer/Logo.png"
// import { FaArrowRight } from "react-icons/fa";
import emailArrow from "../../assets/imgs/Footer/arrowIcon.png"
import { Link } from 'react-router-dom'
import SocialIconComponent from '../SocialIconComponent/SocialIconComponent'
import FooterLinksComponent from '../FooterLinksComponent/FooterLinksComponent'

export default function FooterComponent() {
  return (
    <footer className="p-162 border2">
      <div className="footerFirstPart">
        <img src={logo} alt="logo" />
        <SocialIconComponent />
      </div>
      <div className="footerSecondPart">
        <FooterLinksComponent />
        <div className="email">
          <h6> Subscribe to Newsletter </h6>
          <div className="emailInput">
            <input
              className="rounded-12 text-18"
              type="email"
              placeholder="Your Email" />
            {/* <FaArrowRight className="emailArrow" /> */}
            <button>
              <img src={emailArrow} />
            </button>
          </div>
        </div>
      </div>
      <div className="footerThirdPart text-18">
        <span> © 2024 StyleLoom. All rights reserved. </span>
        <div>
          <Link to={""}> Terms & Conditions </Link>
          <Link to={""}>  | Privacy Policy </Link>
        </div>
      </div>
    </footer>
  )
}
