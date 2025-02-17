import React from 'react'
import './TrendsSectionComponent.css'
import {StoredTrendsData} from "../../Data/TrendsData";
import TrendsCardComponent from "../TrendsCardComponent/TrendsCardComponent";
import { useEffect, useState } from 'react';

export default function TrendsSectionComponent() {

  const [showLastThreeCards, setShowLastThreeCards] = useState(false);

  // State to track the current screen size
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768); // Adjust breakpoint as needed

    // Function to toggle the visibility of the last three cards
    const toggleLastThreeCards = () => {
      setShowLastThreeCards(!showLastThreeCards);
    };
  
    // Function to handle window resize and update screen size state
    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 768); // Adjust breakpoint as needed
      };
  
      // Add event listener for window resize
      window.addEventListener("resize", handleResize);
  
      // Cleanup the event listener on component unmount
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  

  return (
    <section className='p-162'>
      <div className='border2 rounded-12'>
        <div className='AA-trends-cards'>
              {StoredTrendsData.slice(0, -3).map((e, index) => {
                  return (
                      <TrendsCardComponent key={index} data={e} />
                  );
              })}  
              {(showLastThreeCards || !isSmallScreen) && StoredTrendsData.slice(-3).map((e, index) => {
                  return (
                      <TrendsCardComponent key={index} data={e} />
                  );
              })}  
          </div>
          {isSmallScreen &&
            <button className="AA-view-all-btn" onClick={toggleLastThreeCards}>
              {showLastThreeCards ? "Hide" : " View All"}
            </button>
          }
      </div>
    </section>
  )
}
