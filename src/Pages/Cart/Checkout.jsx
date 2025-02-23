import { useState } from 'react';
import './Checkout.css'
import { GoArrowLeft } from "react-icons/go";
import visa from '../../assets/imgs/checkout/visa.svg'
import paypal from '../../assets/imgs/checkout/paypal.svg'
import mastercard from '../../assets/imgs/checkout/mastercard.svg'
import applepay from '../../assets/imgs/checkout/applepay.svg'
export default function Checkout() {
    const [selectedPayment, setSelectedPayment] = useState(null);

    const paymentMethods = [
        { id: 'visa', name: 'Visa', image: visa },
        { id: 'mastercard', name: 'MasterCard', image: mastercard },
        { id: 'paypal', name: 'PayPal', image: paypal },
        { id: 'applepay', name: 'applepay', image: applepay }

    ];

    return (
        <div className="Af-checkOut-Payment">
            <button className="Af-GoArrowLeft" onClick={() => setopenPopUp(false)}><GoArrowLeft /> </button>
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
                    <input type="text" placeholder="CVV" maxLength="3" pattern="d*" /> {/* يسمح بإدخال أرقام فقط */}
                    <input type="text" placeholder="MM/YY" maxLength="5" pattern="d{2}/d{2}" /> {/* يسمح بإدخال صيغة شهر وسنة */}
                </div>

                <button className="Af-save-button" onClick={() => setopenPopUp(false)}>Save</button>
            </div>
        </div>
    )
}
