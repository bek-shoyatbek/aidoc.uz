import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [language, setLanguage] = useState('uz');

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    // In a real implementation, this would trigger language change throughout the app
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>docuzai.uz</h1>
        </div>
        <div className="language-selector">
          <button 
            className={`language-button ${language === 'uz' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('uz')}
          >
            UZ
          </button>
          <button 
            className={`language-button ${language === 'ru' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('ru')}
          >
            RU
          </button>
          <button 
            className={`language-button ${language === 'en' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('en')}
          >
            EN
          </button>
        </div>
        <div className="nav-buttons">
          <button className="login-button">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
