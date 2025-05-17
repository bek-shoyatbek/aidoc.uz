import React from 'react';
import './Features.css';
import { useTranslation } from 'react-i18next';

const Features: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="features">
      <div className="features-container">
        <h2 className="features-title">{t('features.title')}</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <div className="feature-icon">1</div>
            <h3 className="feature-card-title">{t('features.card1.title')}</h3>
            <p className="feature-card-description">
              {t('features.card1.description')}
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">2</div>
            <h3 className="feature-card-title">{t('features.card2.title')}</h3>
            <p className="feature-card-description">
              {t('features.card2.description')}
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">3</div>
            <h3 className="feature-card-title">{t('features.card3.title')}</h3>
            <p className="feature-card-description">
              {t('features.card3.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
