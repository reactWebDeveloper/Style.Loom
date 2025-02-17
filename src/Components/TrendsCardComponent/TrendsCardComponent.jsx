import React from 'react'
import './TrendsCardComponent.css'

export default function TrendsCardComponent({data}) {
  return (
    <div className="AA-trends-card ">
        <img className="AA-bg" src={data.bg} alt="bg" />
        <picture>
          <source media='(max-width:1919px)' srcSet={data.iconsm}/>
          <img className="AA-icon" src={data.icon} alt="icon"/>
        </picture>
        <h4 className="AA-card-title text-24">{data.title}</h4>
        <p className='AA-card-desc text-18'>{data.desc}</p>
    </div>
  )
}
