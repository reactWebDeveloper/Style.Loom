import React from 'react'
import "./ClientsSliderCard.css"

export default function ClientsSliderCard({ data }) {
  return (
    <>
      <div className="ET-ClientsSliderCard">
        <img src={data.img} />
        <span> {data.txt} </span>
      </div>
    </>
  )
}
