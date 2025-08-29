import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaCcVisa,
  FaCcPaypal,
  FaCcAmazonPay,
} from "react-icons/fa";
 // ✅ Import external CSS

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-section">
          <h2 className="footer-logo">ShopNow</h2>
          <p>
            Your one-stop shop for the best deals on products. Fast delivery &
            secure payment.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li ><a href="/">Home</a></li>
            <li ><a href="/">Products</a></li>
            <li > <a href="/cart">Yourcart</a></li>
            <li ><a href="/CheckCard">Cartitems</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Order Tracking</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* Social & Payments */}
        <div className="footer-section">
          <h3>Connect with Us</h3>
          <div className="footer-socials">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
          <h3>Payments</h3>
          <div className="footer-payments">
            <FaCcVisa />
            <FaCcPaypal />
            <FaCcAmazonPay />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} ShopNow. All Rights Reserved.
      </div>
    </footer>
  );
};
