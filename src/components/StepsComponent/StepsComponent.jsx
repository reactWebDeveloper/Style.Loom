import React from 'react'
import './StepsComponent.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import star from './../../assets/imgs/Vector.png'
import {stepsData} from './../../Data/stepsData'
function StepsComponent() {
  return (
    <div className='p-162 StepsComponent'>
        <div className="stepComponentContainer">
          <div className="titleContaine">
            <TitleComponent title={"Navigating the StyleLoom Fashion Journey."} desc={"At StyleLoom, we've designed a straightforward shopping experience to make fashion accessible."}
            img={star} fullImage={true}/>
          </div>
          {/* <div className='borderTest'></div> */}
          <div className="steps">
            {stepsData.map((data, index) => {
              return (
                <div className="step" key={index}>
                  <span>{data.stepCount}</span>
                  <h4>{data.title}</h4>
                  <p>{data.desc}</p>
                </div>
            );
          })}
</div>
        </div>
    </div>
  )
}

export default StepsComponent

{/* <div className="step">
<span>Step 01</span>
<h4>Discover Trends</h4>
<p>Explore our curated collection of over 1000 styles, spanning global fashion trends.</p>
</div> */}