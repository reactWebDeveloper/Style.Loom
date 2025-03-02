import React from 'react'
import './ProductDetailsComponent.css'
import shopIcon from './../../assets/imgs/Icons/shopIcon.png'
import addToCart from './../../assets/imgs/Icons/Icon-9.png'
import womanLeft from './../../assets/imgs/Products/Image-14.webp'
import womanTop from './../../assets/imgs/Products/Image-15.webp'
import womanBottom from './../../assets/imgs/Products/Image-16.webp'
import materials from './../../assets/imgs/Products/Image-17.webp'
import star from './../../assets/imgs/Icons/Shape-3.png'
export default function ProductDetailsComponent() {
  return (
    <div className='ProductDetailsComponent p-162 border2'>
      <div className="detailsHeader p-80">
        <div className="headerLeft">
          <h2 className='text-48 '>Elegant Evening Gown</h2>
          <p>Fitted bodice, flowing skirt <span className='text-18'>In stock</span></p>
        </div>
        <div className="headerright centring">
          <button className='addToCartBTN'><img src={addToCart}/>Add To Cart</button>
          <button className='showNowBTN'><img src={shopIcon}/>Shop Now</button>
        </div>
      </div>
      <div className="detailsImages border2">
        <div className="detailsleft">
          <img src={womanLeft} className='womanTochingFace'/>
        </div>
        <div className="detailsRight">
          <img src={womanTop} className='sheIsNotTochingFace'/>
          <img src={womanBottom} className='sheIsNotTochingFace'/>
        </div>
      </div>
      <div className="detailsLower border2">
        <div className="lowerLeft">
          <h3 className='border-btm-2 p-50-80'>Materials, Care and origin</h3>
          <div className="joinLife border-btm-2 p-50-80">
            <h4 className='h4-sm-title'>Join Life</h4>
            <p className='text-18'>Tracing its roots back to ancient Greek draped garments, has evolved through centuries, 
              often crafted from luxurious fabrics like silks, satins, and velvets.
            </p>
          </div>
          <div className="materials border-btm-2 p-50-80">
            <div className="materialsText">
              <h4 className='h4-sm-title'>Materials</h4>
              <p className='text-18'>Flowing from Grecian folds to glittering silks, the evening gown has graced centuries in luxury.</p>
            </div>
            <img src={materials}/>
          </div>
          <div className="emptySpace">
            
          </div>
        </div>
        <div className="lowerRight">
          <div className="lowerRigth-featuers border-btm-2 p-50-80">
            <h3>Features</h3>
            <ul className='featuers-list text-18'>
              <li>Distressed detailing for a rugged look</li>
              <li>Button-up front closure with engraved metal buttons</li>
              <li>Two chest pockets with buttoned flaps</li>
              <li>Two side pockets for added functionality</li>
              <li>Adjustable buttoned cuffs for a personalized fit</li>
              <li>Back waist tabs for customizable styling</li>
            </ul>
          </div>
          <div className="lowerRight-price border-btm-2 p-50-80">
            <h4 className='h4-sm-title'>price</h4>
            <div className="price-container">
              <div className="price-value">
                <h3 id='price'>$89.99</h3>
                <span className='text-18'>( MRP incl. of all taxes )</span>
              </div>
              <button className='addToCartBTN'><img src={addToCart}/>Add To Cart</button>
            </div>
          </div>
          <div className="lowerRight-sizes border-btm-2 p-50-80">
            <h4 className='h4-sm-title'>Available Sizes</h4>
            <div className="sizes-container">
              <button className='sizeBtn text-18'>S</button>
              <button className='sizeBtn text-18'>M</button>
              <button className='sizeBtn text-18'>L</button>
              <button className='sizeBtn text-18'>XL</button>
            </div>
          </div>
          <div className="lowerRight-ratings-titile border-btm-2 p-50-80">
            <h4 className='h4-sm-title'>Ratings & Review</h4>
          </div>
          <div className="lowerRight-ratings p-50-80">
            <div className="ratings-val-num">
              <h3 className='ratingValue'>4.8</h3>
              <div className="stars centring">
                <img src={star} className='starShape'/>
                <img src={star} className='starShape'/>
                <img src={star} className='starShape'/>
                <img src={star} className='starShape'/>
                <img src={star} className='starShape'/>
              </div>
              <h5 className='ratingsNumber'>49 Ratings</h5>
            </div>
            <div className="ratings-bars">
              <div className="rating-bar">
                <img src={star} className='starShape'/>
                <span>05</span>
                <div className="progress-rating">
                  <div className="progress-value"></div>
                </div>
              </div>
              <div className="rating-bar">
                <img src={star} className='starShape'/>
                <span>04</span>
                <div className="progress-rating">
                  <div className="progress-value"></div>
                </div>
              </div>
              <div className="rating-bar">
                <img src={star} className='starShape'/>
                <span>03</span>
                <div className="progress-rating">
                  <div className="progress-value"></div>
                </div>
              </div>
              <div className="rating-bar">
                <img src={star} className='starShape'/>
                <span>02</span>
                <div className="progress-rating">
                  <div className="progress-value"></div>
                </div>
              </div>
              <div className="rating-bar">
                <img src={star} className='starShape'/>
                <span>01</span>
                <div className="progress-rating">
                  <div className="progress-value"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
