import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-copyright">
          © {new Date().getFullYear()} docuzai.uz
        </div>
        <div className="footer-links">
          <a href="#" className="footer-link">Bosh sahifa</a>
          <a href="#" className="footer-link">Xizmatlar</a>
          <a href="#" className="footer-link">Biz haqimizda</a>
          <a href="#" className="footer-link">Bog'lanish</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;