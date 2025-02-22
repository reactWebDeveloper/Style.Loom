import React from 'react'
import FilterComponent from './../../Components/FilterComponent/FilterComponent'
import Hero2Component from './../../Components/Hero2Component/Hero2Component'
import { useEffect, useState } from 'react';
import './ProductsCategory.css'

export default function ProductsCategory() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768); // Adjust breakpoint as needed

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
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
    <div className='p-162'>
      <Hero2Component />
      {isSmallScreen && <button className="toggle-button" onClick={toggleFilterVisibility}>
        {isFilterVisible ? 'Hide Filters' : 'Show Filters'}
      </button>}
      <div className='AA-row'>
        <div className={`filter-list ${isFilterVisible ? 'visible' : 'hidden'} ${isSmallScreen ? 'list' : ''}`}>
          <FilterComponent />
        </div>
        <FilterComponent />
        <FilterComponent />

      </div>
      
    </div>
  )
}
