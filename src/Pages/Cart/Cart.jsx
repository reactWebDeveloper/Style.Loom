import "./cart.css"
import test from '../../assets/imgs/Products/Image-7.webp';
;
import { GoX } from "react-icons/go";
import { useState } from "react";
import Checkout from "./Checkout";
export default function Cart() {

  const [openPopUp, setopenPopUp] = useState(false);

  return (
    <>
      <div className="Af-popup-container p-162">
        <div className="Af-popup-card-father rounded-20">
          <div className="Af-popup-card">
            <div className="Af-popup-card-img-desc">
              <img className="rounded-20" src={test} alt="" />
              <div className="Af-popup-card-desc">
                <h4 className="text-48">Timeless A-line Evening Dress</h4>
                <p className="text-18">$54.99</p>
                <div className="Af-product-count">
                  <button>-</button>
                  <span className="text-18">2</span>
                  <button>+</button>
                </div>
              </div>
            </div>
            <button className="Af-delete-product"><GoX /></button>
          </div>

          <div className="Af-Payment-Section">
            <h3 className="text-24">total: 324535$</h3>
            <button className="rounded-12" onClick={() => setopenPopUp(true)}>Checkout</button>
          </div>
        </div>
        {openPopUp &&
        
        <Checkout />
      
    }
      </div>
      {/* {openPopUp &&
        
          <Checkout />
        
      } */}
    </>

  )
}
