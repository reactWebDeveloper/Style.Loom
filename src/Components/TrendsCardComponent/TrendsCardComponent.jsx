import React from 'react'
import './TrendsCardComponent.css'

export default function TrendsCardComponent({data}) {
  return (
    <div className="AA-trends-card ">
        <img className="AA-bg" src={data.bg} alt="bg" />
        <img className="AA-icon" src={data.icon} alt="icon"/>
        <h4 className="AA-card-title">{data.title}</h4>
        <p className='AA-card-desc'>{data.desc}</p>
    </div>
  )
}
