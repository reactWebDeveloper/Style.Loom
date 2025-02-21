import React from 'react'
import "./TestimonialsCard.css"

export default function TestimonialsCard({ data }) {
  return (
    <>
      <div className="ET-testimonialsCard">
        <img src={data.img} />
        <span> {data.txt} </span>
      </div>
    </>
  )
}
