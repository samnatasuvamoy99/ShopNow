import React from "react";
import { FaGooglePay, FaAmazonPay } from "react-icons/fa";
import { SiRazorpay } from "react-icons/si";
import { useSelector } from "react-redux";


 export const CheckoutCard = () => {

   const items = useSelector((state) => state.cart.items);
   const price=useSelector((state) => state.cart.total)
  return (
    <div className="checkout-container">
      <div className="checkout-card">
        <h2 className="checkout-title">🛒 Checkout Summary</h2>

        <div className="checkout-row">
          <span>Total Items: </span>
          <span className="bold">{items.length}</span>
        </div>

        <div className="checkout-row">
          <span>Total Price:</span>
          <span className="price">💲{price}</span>
        </div>

        <h3 className="payment-title">Payment Options</h3>
        <div className="payment-options">
          <button className="payment-btn gpay">
            <FaGooglePay size={32} />
            <span>GPay</span>
          </button>

          <button className="payment-btn amazon">
            <FaAmazonPay size={32} />
            <span>Amazon Pay</span>
          </button>

          <button className="payment-btn razorpay">
            <SiRazorpay size={28} />
            <span>Razorpay</span>
          </button>
        </div>

        <button className="proceed-btn">Proceed to Pay</button>
      </div>
    </div>
  );
};

export default CheckoutCard;
