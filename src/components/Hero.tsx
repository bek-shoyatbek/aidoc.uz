import React from 'react';
import './Hero.css';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">{t('hero.title')}</h1>
        <p className="hero-subtitle">
          {t('hero.subtitle')}
        </p>
        <p className="hero-features">
          {t('hero.features')}
        </p>
        <button className="cta-button">{t('hero.cta')}</button>
      </div>
    </section>
  );
};

export default Hero;
