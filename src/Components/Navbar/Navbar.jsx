import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "./../../assets/imgs/logo.png";
import basket from "./../../assets/imgs/NavBar/Union.png";
import ToggleIcon from "./../../assets/imgs/NavBar/Icon.png";
import CloseIcon from "./../../assets/imgs/NavBar/close.svg";
import { Link } from "react-router-dom";
import test from '../../assets/imgs/Products/Image-7.webp';
import { GoArrowLeft } from "react-icons/go";
import { GoX } from "react-icons/go";
export default function Navbar() {
  // Retrieve the active link from localStorage or set it to "Home" by default
  const [activeLink, setActiveLink] = useState(
    localStorage.getItem("activeLink") || "/"
  );

  // Update localStorage when the active link changes
  useEffect(() => {
    localStorage.setItem("activeLink", activeLink);
  }, [activeLink]);

  // State to control the sidebar menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the sidebar menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };






  const [openPopUp, setopenPopUp] = useState(false);
  function handlePopUp() {
    if (openPopUp === true) {
      setopenPopUp(false);
    } else {
      setopenPopUp(true);
    }
  }

  return (
    <>
      <nav>
        <div className="p-162">
          {/* Main nav container */}
          <div className={`MR-navContainer ${menuOpen ? "active" : ""}`}>
            {/* Left section with nav buttons */}
            <div className="MR-buttonContainer">
              <Link to="/" onClick={() => setActiveLink("/")}>
                <button
                  className={`text-btn-18 rounded-12 ${activeLink === "/" ? "activeLink" : "MR-notActive"
                    }`}
                >
                  Home
                </button>
              </Link>

              <Link to="/products" onClick={() => setActiveLink("/products")}>
                <button
                  className={`text-btn-18 rounded-12 ${activeLink === "/products" ? "activeLink" : "MR-notActive"
                    }`}
                >
                  Products
                </button>
              </Link>
            </div>

            {/* Logo section */}
            <Link to="/" onClick={() => setActiveLink("/")}>
              <img
                className={`MR-logo ${activeLink === "/"}`}
                src={logo}
                alt="logo"
              />
            </Link>

            {/* Right section with basket and contact buttons */}
            <div className="MR-buttonContainer2">
              <button className="MR-basketButton rounded-12" onClick={handlePopUp}>
                <img src={basket} alt="basket" />
              </button>
              <Link to="/contact" onClick={() => setActiveLink("/contact")}>
                <button
                  className={`MR-contactButton text-btn-18 rounded-12 ${activeLink === "/contact"
                    }`}
                >
                  Contact
                </button>
              </Link>
              {menuOpen && (
                <button className="MR-closeButton" onClick={toggleMenu}>
                  <img src={CloseIcon} alt="Close Menu" />
                </button>
              )}
            </div>
          </div>

          {/* Responsive nav for mobile */}
          <div className="MR-responsiveNav">
            <Link to="/" onClick={() => setActiveLink("/")}>
              <img
                className={`MR-logo2 ${activeLink === "/"}`}
                src={logo}
                alt="logo"
              />
            </Link>
            <div className="MR-responsiveNavButtonContainer">
              <button className="MR-basketButton rounded-12" onClick={handlePopUp}>
                <img src={basket} alt="basket" />
              </button>
              <button className="MR-toggleIcon" onClick={toggleMenu}>
                <img src={ToggleIcon} alt="Toggle Icon" />
              </button>
            </div>
          </div>
        </div>



        {
          openPopUp &&
          <>
            <div className="Af-popup-container rounded-20">
              <button className="Af-goBack" onClick={() => setopenPopUp(false)}><GoArrowLeft /></button>
              <div className="Af-popup-card-father rounded-20" >
                <div className="Af-popup-card">
                  <img src={test} alt="" />
                  <div className="Af-popup-card-desc">
                    <div className="Af-popup-name">
                      <h4>Timeless A-line Evening Dress</h4>
                      <p>$54.99</p>
                    </div>
                    <button className="Af-delete-product"><GoX /></button>
                  </div>
                </div>
                <div className="Af-popup-card">
                  <img src={test} alt="" />
                  <div className="Af-popup-card-desc">
                    <div className="Af-popup-name">
                      <h4>Timeless A-line Evening Dress</h4>
                      <p>$54.99</p>
                    </div>
                    <button className="Af-delete-product"><GoX /></button>
                  </div>
                </div>
                <div className="Af-popup-card">
                  <img src={test} alt="" />
                  <div className="Af-popup-card-desc">
                    <div className="Af-popup-name">
                      <h4>Timeless A-line Evening Dress</h4>
                      <p>$54.99</p>
                    </div>
                    <button className="Af-delete-product"><GoX /></button>
                  </div>
                </div>
                <div className="Af-popup-card">
                  <img src={test} alt="" />
                  <div className="Af-popup-card-desc">
                    <div className="Af-popup-name">
                      <h4>Timeless A-line Evening Dress</h4>
                      <p>$54.99</p>
                    </div>
                    <button className="Af-delete-product"><GoX /></button>
                  </div>
                </div>
                <div className="Af-popup-card">
                  <img src={test} alt="" />
                  <div className="Af-popup-card-desc">
                    <div className="Af-popup-name">
                      <h4>Timeless A-line Evening Dress</h4>
                      <p>$54.99</p>
                    </div>
                    <button className="Af-delete-product"><GoX /></button>
                  </div>
                </div>
                <div className="Af-popup-card">
                  <img src={test} alt="" />
                  <div className="Af-popup-card-desc">
                    <div className="Af-popup-name">
                      <h4>Timeless A-line Evening Dress</h4>
                      <p>$54.99</p>
                    </div>
                    <button className="Af-delete-product"><GoX /></button>
                  </div>
                </div>
              </div>

            </div>

            {/* <button  onClick={()=> setopenPopUp(false)}>x</button> */}
          </>

        }

      </nav>
    </>
  );
}
