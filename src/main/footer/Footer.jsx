import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <p>Copyright &copy; {new Date().getFullYear()} <span>Gobinath S</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
