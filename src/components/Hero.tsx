import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">AI yordamida rasmiy hujjatlarni osongina yarating</h1>
        <p className="hero-subtitle">
          Arizalar, shikoyatlar, CVlar va boshqa hujjatlarni uch tilda (O'zbek, Rus, Ingliz) bir necha soniyada yozing
        </p>
        <p className="hero-features">
          AI bilan hujjatlarni yarating, tahrirlang va yuklab oling
        </p>
        <button className="cta-button">Boshlash</button>
      </div>
    </section>
  );
};

export default Hero;
