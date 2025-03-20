import "./cart.css"
import './Checkout.css'
import test from '../../assets/imgs/Products/Image-7.webp';
import visa from '../../assets/imgs/checkout/visa.svg'
import paypal from '../../assets/imgs/checkout/paypal.svg'
import mastercard from '../../assets/imgs/checkout/mastercard.svg'
import applepay from '../../assets/imgs/checkout/applepay.svg'
import { GoX } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { useState } from "react";
import Swal from 'sweetalert2'
export default function Cart() {

  const [openPopUp, setopenPopUp] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  let showAlert = () =>{
    Swal.fire({
      title: "<strong>Payment Done</strong>",
      icon: "success",
      html: `
        your purchase info has been saved,you will recieve a message within the next 3 hours.
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        OK
      `,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: `
        cancel
      `,
      cancelButtonAriaLabel: "Thumbs down"
    });
  }
  const validateData = () => {
    let validData = true;
    // 1-Validate the name

    let nameField = document.querySelector('#name');
    let errorName = document.getElementById('errorName');
    let name = nameField.value;

    const validationResult = validateName(name);
    if (!validationResult.isValid) {
        errorName.style.display = 'block';
        errorName.innerText = validationResult.message;
        validData = false;

    } else {
        errorName.style.display = 'none';
        errorName.innerText = '';
        validData = true;
    }

    // 2-Validate the Payment method 
    let paymentMethod = document.querySelector('.Af-payment-container > h2');

    if(!selectedPayment){
      validData = false;
      paymentMethod.style.color = 'red';
      }
        else{
        paymentMethod.style.color = '';
        validData = true;
      }

    // 3-Validate the card number
      let cardNumber = document.getElementById('cardNumber');
      let cNum = cardNumber.value.trim();
      let wrongNumber = document.getElementById('wrongNumber');


      let validationCNum = validateCardNumber(cNum);
      if(validationCNum.isValid){
        validData = true;
        wrongNumber.innerText = '';
        wrongNumber.style.display = 'none';
      }
      else{
        validData = false;
        wrongNumber.style.display = 'block';
        wrongNumber.innerText =validationCNum.message;
      }

      // 4- validate the CVV
      let cvv = document.getElementById('cvv');
      let cvvNumber = cvv.value.trim();
      let wrongCvv = document.getElementById('wrongCvv');

      let validationCvv = validateCvv(cvvNumber);
      if(validationCvv.isValid){
        validData = true;
        wrongCvv.innerText = '';
        wrongCvv.style.display = 'none';
      }
      else {
        validData = false;
        wrongCvv.innerText = validationCvv.message;
        wrongCvv.style.display = 'block';
      }

      // 5-validate the date 
      let dateInput = document.getElementById('expDate');
      let dateValue = dateInput.value;//should not contain strings, should be in the form mm/yy , should not be empty
      let wrongDate = document.getElementById('wrongDate');

      let validationDate = validateDate(dateValue);

      if(validationDate.isValid){
        validData = true;
        wrongDate.style.display = 'none';
        wrongDate.innerText = ''
      }
      else{
        validData = false;
        wrongDate.style.display = 'block';
        wrongDate.innerText = validationDate.message
      }

      // 6-if everything is fine then display the popup and hide the form
      if(validData){
        setopenPopUp(false);
        showAlert();
      }
      
};

// a function to validate the name , returns object 
const validateName = (name) => {
  if (name.trim() === '') {
      return { isValid: false, message: 'You should enter your name' };
  }
  let nameArray = name.split('');
  for (let i = 0; i < nameArray.length; i++) {
      if (!isNaN(Number(nameArray[i])) && nameArray[i] !== ' ') {
          return { isValid: false, message: "The name can't contain numbers" };
      }
  }

  return { isValid: true, message: '' };
};

// a function to validate the card number

const validateCardNumber = (cNum) => {
  // if card number was not 16 digits
  if(cNum.length != 16){
    return{isValid:false,message:"card number should be 16 digits"};
  }
  // if card number was empty
  if(cNum === ''){
    return{isValid : false , message : "Enter your card number"};
  }
  // if card number contains spaces or strings
  let cNumArray = cNum.split('');
  for(let i =0 ; i < cNumArray.length ;i++){
    if(cNumArray[i] == ' '){
      return{isValid : false , message : "card number can't contain empty space"};
    }
    else if(isNaN(Number(cNumArray[i]))){
      return {isValid: false , message:"card number can't contain letters"};
    }
  }

  return {isValid : true , message:''}
}

// a function to validate cvv number

let validateCvv = (cvvNum) => {
  if(cvvNum.length == 0 || cvvNum.length <3 ){
    return {isValid: false, message:"Enter you cvv number,must be 3 digits."};
  }
  for(let i = 0 ; i < cvvNum.length ; i++){
    if(isNaN(Number(cvvNum[i]))){
      return {isValid: false, message:"Cvv number can't contain letters."}
    }
  }
  return {isValid: true, message:""};

}

  // a function to validate the date 
  let validateDate = (dateValue) => {
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;

    if(dateValue.length == 0){
      return{isValid:false,message:'enter the expiry date.'}
    }
    else if(!regex.test(dateValue)){
      return{isValid:false,message:"enter a valid date in the form 'MM/YY'."}
    }
    for(let i =0 ; i < dateValue.length ; i++){
      if(isNaN(Number(dateValue[i])) && dateValue[i] != '/'){
        return {isValid: false, message:"Invalid date."}
      }
    }
    return{isValid:true,message:''}
  }
  const paymentMethods = [
    { id: 'visa', name: 'Visa', image: visa },
    { id: 'mastercard', name: 'MasterCard', image: mastercard },
    { id: 'paypal', name: 'PayPal', image: paypal },
    { id: 'applepay', name: 'applepay', image: applepay }

  ];

  return (
    <>
    
      <div className="Af-cart-container p-162">
        <div className="Af-cart-card-father rounded-20">
          <div className="Af-cart-card">
            <div className="Af-cart-card-img-desc">
              <img className="rounded-20" src={test} alt="" />
              <div className="Af-cart-card-desc">
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
          {openPopUp &&
        <div className="Af-checkOut-Payment">
          <button className="Af-GoArrowLeft" onClick={() => setopenPopUp(false)}><GoArrowLeft /> </button>
          <label className="text-24">Name</label>
          <input type="text" placeholder="name" id="name" />
          <p id="errorName">the name can't has a number</p>
          <div className="Af-payment-container">
            <h2 className="text-24">Choose Payment Method</h2>
            <div className="Af-payment-options">
              {paymentMethods.map((method) => (
                <button key={method.id} onClick={() => setSelectedPayment(method.image)}>
                  <img src={method.image} alt={method.name} width="50" />
                </button>
              ))}
            </div>

            <div className="Af-card-input">
              <input type="text" placeholder="Card Number" id="cardNumber"/>{/*the card number input,must be 16 nums*/}
              <p id="wrongNumber"></p>
              {selectedPayment && <img src={selectedPayment} alt="Payment Logo" className="Af-payment-logo" />}
            </div>

            <div className="Af-cvv-expiry-container">
              <div>
                <input type="text" placeholder="CVV" maxLength="3" pattern="d*" id="cvv" /> {/* يسمح بإدخال أرقام فقط */}
                <p id="wrongCvv"></p>
              </div>
              <div>
                <input type="text" placeholder="MM/YY" maxLength="5" pattern="d{2}/d{2}" id="expDate"/> {/* يسمح بإدخال صيغة شهر وسنة */}
                <p id="wrongDate"></p>
              </div>
            </div>

            <button className="Af-save-button" onClick={() =>{ validateData()}}>Save</button>
          </div>
        </div>
      }
{/* 
          <div className="Af-cart-card">
            <div className="Af-cart-card-img-desc">
              <img className="rounded-20" src={test} alt="" />
              <div className="Af-cart-card-desc">
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
          </div> */}




          {/* <div className="Af-cart-card">
            <div className="Af-cart-card-img-desc">
              <img className="rounded-20" src={test} alt="" />
              <div className="Af-cart-card-desc">
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
 */}

{/* 

          <div className="Af-cart-card">
            <div className="Af-cart-card-img-desc">
              <img className="rounded-20" src={test} alt="" />
              <div className="Af-cart-card-desc">
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

 */}




          <div className="Af-Payment-Section">
            <h3 className="text-24">total: 324535$</h3>
            <button className="rounded-12" onClick={() => setopenPopUp(true)}>Checkout</button>
          </div>
        </div>

      </div>
      
    </>

  )
}
