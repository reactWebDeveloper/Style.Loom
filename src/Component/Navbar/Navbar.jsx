import React, { useState } from "react";
import "./Navbar.css";
import logo from "./../../assets/imgs/logo.png";
import basket from "./../../assets/imgs/NavBar/Union.png";
import ToggleIcon from "./../../assets/imgs/NavBar/Icon.png";
import CloseIcon from "./../../assets/imgs/NavBar/close.svg"; 

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className="p-162">
                <div className={`MR-navContainer ${menuOpen ? "active" : ""}`}>
                    <div className="MR-buttonContainer">
                        <button className="MR-homeButton text-btn-18">Home</button>
                        <button className="MR-productButton text-btn-18">Products</button>
                    </div>
                    
                    <div>
                        <img className="MR-logo" src={logo} alt="logo" />
                    </div>
                    
                    <div className="MR-buttonContainer2">
                        <button className="MR-basketButton">
                            <img src={basket} alt="basket" />
                        </button>
                        <button className="MR-contactButton text-btn-18">Contacts</button>
                        {menuOpen && (
                        <button className="MR-closeButton" onClick={toggleMenu}>
                            <img src={CloseIcon} alt="Close Menu" />
                        </button>
                    )}
                    </div>
                </div>

                <div className="MR-responsiveNav">
                    <div>
                        <img className="MR-logo2" src={logo} alt="logo" />
                    </div>
                    <button className="MR-toggleIcon" onClick={toggleMenu}>
                        <img src={ToggleIcon} alt="Toggle Icon" />
                    </button>
                </div>
            </nav>
        </>
    );
}
