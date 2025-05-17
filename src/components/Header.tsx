import React, { useState, useEffect } from 'react';
import './Header.css';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { GoogleLogin } from '@react-oauth/google';

const Header: React.FC = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const [language, setLanguage] = useState(i18n.language || 'uz');
  const { user, isAuthenticated, login } = useAuth();

  useEffect(() => {
    // Update language state when i18n.language changes
    setLanguage(i18n.language);
  }, [i18n.language]);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1 onClick={handleLogoClick}>aidoc.uz</h1>
        </div>
        <nav className="main-nav">
          <Link to="/" className="nav-link">{t('header.home', 'Home')}</Link>
          <Link to="/templates" className="nav-link">{t('header.templates', 'Templates')}</Link>
        </nav>
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
          {isAuthenticated && user ? (
            <div className="user-profile" onClick={handleProfileClick}>
              <img 
                src={user.picture} 
                alt={user.name} 
                className="profile-picture" 
                title={user.name}
              />
            </div>
          ) : (
            <GoogleLogin
              onSuccess={login}
              onError={() => console.log('Login Failed')}
              useOneTap
              text="signin_with"
              shape="rectangular"
              locale="en"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
