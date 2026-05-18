import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="logo">💰 Personal Finance Tracker</p>

        <div className="links">
          <span>Add Transaction</span>
          <span>Reports</span>
        </div>

        <p className="copy">
          © {new Date().getFullYear()} ArunNarwade
        </p>
      </div>
    </footer>
  );
};

export default Footer;