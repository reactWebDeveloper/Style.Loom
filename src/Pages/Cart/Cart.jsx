import { useState, useEffect } from "react";
import { GoX, GoArrowLeft } from "react-icons/go";
import visa from '../../assets/imgs/checkout/visa.svg';
import paypal from '../../assets/imgs/checkout/paypal.svg';
import mastercard from '../../assets/imgs/checkout/mastercard.svg';
import applepay from '../../assets/imgs/checkout/applepay.svg';
import test from '../../assets/imgs/Products/Image-7.webp';
import "./cart.css";
import './Checkout.css';

export default function Cart() {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [
      { id: 1, name: "Timeless A-line Evening Dress", price: 54.99, quantity: 2, image: test },
      { id: 2, name: "Classic Suit", price: 120.00, quantity: 1, image: test }
    ];
  });

  const [openPopUp, setopenPopUp] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const increaseQuantity = (id) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setCart(cart
      .map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
      .filter(item => item.quantity > 0) 
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  const paymentMethods = [
    { id: 'visa', name: 'Visa', image: visa },
    { id: 'mastercard', name: 'MasterCard', image: mastercard },
    { id: 'paypal', name: 'PayPal', image: paypal },
    { id: 'applepay', name: 'Apple Pay', image: applepay }
  ];

  return (
    <>
      <div className="Af-cart-container p-162">
        <div className="Af-cart-card-father rounded-20">
          {cart.length > 0 ? cart.map((item) => (
            <div key={item.id} className="Af-cart-card">
              <div className="Af-cart-card-img-desc">
                <img className="rounded-20" src={item.image} alt={item.name} />
                <div className="Af-cart-card-desc">
                  <h4 className="AF-cart-product-name text-48">{item.name}</h4>
                  <p className="Af-price text-18">${(item.price * item.quantity).toFixed(2)}</p>
                  <div className="Af-product-count">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span className="text-18">{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </div>
              </div>
              <button className="Af-delete-product" onClick={() => removeFromCart(item.id)}>
                <GoX />
              </button>
            </div>
          )) : <p className="text-48 Af-empty"> Your shopping cart is empty 🛒</p>}

          {cart.length > 0 && (
            <div className="Af-Payment-Section">
              <h3 className="text-24">Total: ${totalPrice}</h3>
              <button className="rounded-12" onClick={() => setopenPopUp(true)}>Checkout</button>
            </div>
          )}
        </div>

        {openPopUp && (
          <div className="Af-checkOut-Payment">
            <button className="Af-GoArrowLeft" onClick={() => setopenPopUp(false)}>
              <GoArrowLeft />
            </button>
            <label className="text-24">Name</label>
            <input type="text" placeholder="name" id="name" />
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
                <input type="text" placeholder="Card Number" />
                {selectedPayment && <img src={selectedPayment} alt="Payment Logo" className="Af-payment-logo" />}
              </div>
              <div className="Af-cvv-expiry-container">
                <input type="text" placeholder="CVV" maxLength="3" />
                <input type="text" placeholder="MM/YY" maxLength="5" />
              </div>
              <button className="Af-save-button" onClick={() => setopenPopUp(false)}>Save</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

