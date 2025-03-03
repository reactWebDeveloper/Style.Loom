import React from 'react'
import './FilterToggleComponent.css'
import CloseIcon from "./../../assets/imgs/NavBar/close.svg";
import FilterComponent from './../../Components/FilterComponent/FilterComponent'

export default function FilterToggleComponent ({ isFilterVisible, toggleFilterVisibility, isSmallScreen }) {
  
  return (
    <>
      {isSmallScreen && (
        <button className="AA-closeButton" onClick={toggleFilterVisibility}>
          <img src={CloseIcon} alt="Close Menu" />
        </button>
      )}
      <FilterComponent />
    </>
  );
};

