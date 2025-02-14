import React from 'react'
import './TrendsSectionComponent.css'
import {StoredTrendsData} from "../../Data/TrendsData";
import TrendsCardComponent from "../TrendsCardComponent/TrendsCardComponent";

export default function TrendsSectionComponent() {
  return (
    <section className='p-162'>
         <div className='border2 rounded-12 AA-trends-cards'>
            {StoredTrendsData.map((e, index) => {
                return (
                    <TrendsCardComponent key={index} data={e} />
                );
            })}  
        </div>
    </section>
  )
}
