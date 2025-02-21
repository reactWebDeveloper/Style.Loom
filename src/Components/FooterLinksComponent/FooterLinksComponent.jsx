import React from 'react'
import { Link } from 'react-router-dom'
import "./FooterLinksComponent.css"
import { FooterLinksData } from '../../Data/FooterLinksData'

export default function FooterLinksComponent() {
  return (
    <>
      <div className="footerLinks">
        {
          FooterLinksData.map((e, index) => (
            <div className="ET-links" key={index}>
              <h6> {e.title} </h6>
              <ul>
                <li> <Link> {e.link1} </Link> </li>
                <li> <Link> {e.link2} </Link> </li>
                <li> <Link> {e.link3} </Link> </li>
                <li> <Link> {e.link4} </Link> </li>
              </ul>
            </div>
          ))
        }
      </div>
    </>
  )
}
