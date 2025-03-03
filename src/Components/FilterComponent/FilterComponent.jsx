import React from "react";
import "./FilterComponent.css";
import { useEffect, useState } from "react";
import img from "./../../assets/imgs/Vector.svg";
import Accordion from "react-bootstrap/Accordion";

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
    { label: "Casual", checked: true },
    { label: "Business casual", checked: false },
    { label: "Bohemian", checked: true },
    { label: "Minimalist", checked: true },
    { label: "Uniqlo", checked: true },
    { label: "Zara", checked: false },
    { label: "Gucci", checked: true },
    { label: "Mango", checked: true },
    { label: "Ralph Lauren", checked: false },
    { label: "Calvin Klein", checked: false },
    { label: "Rachel Pally", checked: false },
  ];

  const colors = [
    { label: "red", checked: true },
    { label: "orange", checked: true },
    { label: "yellow", checked: true },
    { label: "green", checked: true },
    { label: "blue", checked: true },
    { label: "purple", checked: true },
    { label: "pink", checked: true },
    { label: "brown", checked: true },
    { label: "gray", checked: true },
    { label: "black", checked: true },
    { label: "white", checked: true },
  ];

  const sizes = [
    { label: "2XS", class: "" },
    { label: "XS", class: "" },
    { label: "S", class: "" },
    { label: "M", class: "active" },
    { label: "L", class: "" },
    { label: "XL", class: "" },
    { label: "2XL", class: "" },
    { label: "3XL", class: "" },
  ];

  return (
    <div className="AA-filter-comp">
      <div className="AA-filter-title">
        <img src={img} alt="icon" />
        <h3 className="text-24">All Categories</h3>
      </div>

      <Accordion defaultActiveKey={["0", "1", "2", "3"]} flush alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="text-18">BRAND</Accordion.Header>
          <Accordion.Body className="acc-body-custom">
            <div className="AA-inputs">
              <input
                type="text"
                placeholder="Search"
                className="search-input text-18"
              />
              <button className="search-button">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="text-18">MODEL</Accordion.Header>
          <Accordion.Body>
            <div className="options-container">
              {styles.map((style) => (
                <div className="option-row" key={style.label}>
                  <input
                    type="checkbox"
                    id={style.label.toLowerCase().replace(" ", "-")}
                    checked={style.checked}
                  />
                  <label className="text-18" htmlFor={style.label.toLowerCase().replace(" ", "-")}>
                    {style.label}
                  </label>
                </div>
              ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="text-18">COLOR</Accordion.Header>
          <Accordion.Body className="acc-body-custom">
            {colors.map((color, index) => (
              <button
                key={index}
                className={`color-btn ${color.label || ""}`}
              ></button>
            ))}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className="text-18">SIZE</Accordion.Header>
          <Accordion.Body className="acc-body-custom">
            {sizes.map((size, index) => (
              <button className={`size-btn text-btn-18 ${size.class}`}>{size.label}</button>
            ))}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header className="text-18">PRICE</Accordion.Header>
          <Accordion.Body className="acc-body-custom">
            <div className="price-inputs">
              <input
                type="number"
                id="min-price"
                value={minPrice}
                min="200"
                max="500"
                onChange={handleMinChange}
                className="text-18"
              />
              <span>—</span>
              <input
                type="number"
                id="max-price"
                value={maxPrice}
                min="200"
                max="500"
                onChange={handleMaxChange}
                className="text-18"
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
              <span className="text-18">Min ${minPrice}</span>
              <span className="text-18">Max ${maxPrice}</span>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
