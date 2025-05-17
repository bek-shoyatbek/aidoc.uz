import React from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-copyright">
          © {new Date().getFullYear()} docuzai.uz
        </div>
        <div className="footer-links">
          <a href="#" className="footer-link">{t('footer.home')}</a>
          <a href="#" className="footer-link">{t('footer.services')}</a>
          <a href="#" className="footer-link">{t('footer.about')}</a>
          <a href="#" className="footer-link">{t('footer.contact')}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
