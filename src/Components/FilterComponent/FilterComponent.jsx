import React from 'react'
import './FilterComponent.css'
import { useEffect, useState } from 'react';
import img from './../../assets/imgs/Vector.svg'
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

export default function FilterComponent() {
  const [minPrice, setMinPrice] = useState(60);
  const [maxPrice, setMaxPrice] = useState(450);

  const handleMinChange = (e) => {
    const value = parseInt(e.target.value);
    if (value <= maxPrice) {
      setMinPrice(value);
    }
  };

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= minPrice) {
      setMaxPrice(value);
    }
  };
  const styles = [
    { label: 'Casual', checked: true },
    { label: 'Business casual', checked: false },
    { label: 'Bohemian', checked: true },
    { label: 'Minimalist', checked: true },
    { label: 'Uniqlo', checked: true },
    { label: 'Zara', checked: false },
    { label: 'Gucci', checked: true },
    { label: 'Mango', checked: true },
    { label: 'Ralph Lauren', checked: false },
    { label: 'Calvin Klein', checked: false },
    { label: 'Rachel Pally', checked: false }
  ];
  return (
    <div className='AA-filter-comp'>
      <div className='AA-filter-title'>
        <img src={img} alt="icon" />
        <h3 className='text-24'>All Categories</h3>
      </div>

      

      <Accordion defaultActiveKey={['0','1','2','3']} flush alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>BRAND</Accordion.Header>
          <Accordion.Body className="color-buttons">
          <div className='AA-inputs'>
            <input type="text" placeholder="Search" className="search-input" />
            <button className="search-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </button>
          </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>MODEL</Accordion.Header>
          <Accordion.Body >
          <div className="options-container">
        {/* Casual */}
        <div className="option-row">
          <input type="checkbox" id="casual" checked />
          <label htmlFor="casual">Casual</label>
        </div>
        <div className="option-row">
          <input type="checkbox" id="business-casual" />
          <label htmlFor="business-casual">Business casual</label>
        </div>

        {/* Bohemian */}
        <div className="option-row">
          <input type="checkbox" id="bohemian" checked />
          <label htmlFor="bohemian">Bohemian</label>
        </div>

        {/* Minimalist */}
        <div className="option-row">
          <input type="checkbox" id="minimalist" checked />
          <label htmlFor="minimalist">Minimalist</label>
        </div>

        {/* Uniqlo */}
        <div className="option-row">
          <input type="checkbox" id="uniqlo" checked />
          <label htmlFor="uniqlo">Uniqlo</label>
        </div>

        {/* Zara */}
        <div className="option-row">
          <input type="checkbox" id="zara" />
          <label htmlFor="zara">Zara</label>
        </div>

        {/* Gucci */}
        <div className="option-row">
          <input type="checkbox" id="gucci" checked />
          <label htmlFor="gucci">Gucci</label>
        </div>

        {/* Mango */}
        <div className="option-row">
          <input type="checkbox" id="mango" checked />
          <label htmlFor="mango">Mango</label>
        </div>

        {/* Ralph Lauren */}
        <div className="option-row">
          <input type="checkbox" id="ralph-lauren" />
          <label htmlFor="ralph-lauren">Ralph Lauren</label>
        </div>

        {/* Calvin Klein */}
        <div className="option-row">
          <input type="checkbox" id="calvin-klein" />
          <label htmlFor="calvin-klein">Calvin Klein</label>
        </div>

        {/* Rachel Pally */}
        <div className="option-row">
          <input type="checkbox" id="rachel-pally" />
          <label htmlFor="rachel-pally">Rachel Pally</label>
        </div>
      </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>COLOR</Accordion.Header>
          <Accordion.Body className="color-buttons">
            <button class="color-btn red"></button>
            <button class="color-btn orange"></button>
            <button class="color-btn yellow"></button>
            <button class="color-btn green"></button>
            <button class="color-btn blue active"></button>
            <button class="color-btn purple"></button>
            <button class="color-btn pink"></button>
            <button class="color-btn brown"></button>
            <button class="color-btn gray"></button>
            <button class="color-btn black"></button>
            <button class="color-btn white"></button>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>SIZE</Accordion.Header>
          <Accordion.Body className="size-buttons">
            <button class="size-btn">2XS</button>
            <button class="size-btn">XS</button>
            <button class="size-btn">S</button>
            <button class="size-btn active">M</button>
            <button class="size-btn">L</button>
            <button class="size-btn">XL</button>
            <button class="size-btn">2XL</button>
            <button class="size-btn">3XL</button>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>PRICE</Accordion.Header>
          <Accordion.Body className="size-buttons">
          <div className="price-inputs">
            <input
              type="number"
              id="min-price"
              value={minPrice}
              min="200"
              max="500"
              onChange={handleMinChange}
            />
            <span>—</span>
            <input
              type="number"
              id="max-price"
              value={maxPrice}
              min="200"
              max="500"
              onChange={handleMaxChange}
            />
          </div>
      <div className="slider-container">
        <input
          type="range"
          id="min-range"
          min="200"
          max="500"
          value={minPrice}
          step="1"
          onChange={handleMinChange}
        />
        <input
          type="range"
          id="max-range"
          min="200"
          max="500"
          value={maxPrice}
          step="1"
          onChange={handleMaxChange}
        />
      </div>
        <div class="price-labels">
          <span>Min ${minPrice}</span>
          <span>Max ${maxPrice}</span>
        </div>

          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    {/* <div class="AA-colors AA-divider">
      <h3 className='text-24'>COLOR</h3>
      <div class="color-buttons">
        <button class="color-btn red"></button>
        <button class="color-btn orange"></button>
        <button class="color-btn yellow"></button>
        <button class="color-btn green"></button>
        <button class="color-btn blue active"></button>
        <button class="color-btn purple"></button>
        <button class="color-btn pink"></button>
        <button class="color-btn brown"></button>
        <button class="color-btn gray"></button>
        <button class="color-btn black"></button>
        <button class="color-btn white"></button>
      </div>
      </div> */}
      {/* <div class="size-selector AA-divider">
        <h3 className='text-24'>SIZE</h3>
        <div class="size-buttons">
          <button class="size-btn">2XS</button>
          <button class="size-btn">XS</button>
          <button class="size-btn">S</button>
          <button class="size-btn active">M</button>
          <button class="size-btn">L</button>
          <button class="size-btn">XL</button>
          <button class="size-btn">2XL</button>
          <button class="size-btn">3XL</button>
        </div>
      </div> */}
      <div class="price-slider AA-divider">
        <h3 className='text-24'></h3>
              </div>

    </div>


  )
}
