import React from 'react';
import './Features.css';

const Features: React.FC = () => {
  return (
    <section className="features">
      <div className="features-container">
        <h2 className="features-title">Qanday ishlaydi</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <div className="feature-icon">1</div>
            <h3 className="feature-card-title">Hujjat turlarini tanlang</h3>
            <p className="feature-card-description">
              Kerakli hujjat turini tanlang va uch tildagi (O'zbek, Rus, Ingliz) shablonlardan foydalaning
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">2</div>
            <h3 className="feature-card-title">Kontekstni kiriting</h3>
            <p className="feature-card-description">
              Hujjat uchun kerakli ma'lumotlarni kiriting yoki AI'dan hujjat yaratishni so'rang
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">3</div>
            <h3 className="feature-card-title">Hujjatni tahrirlang va yuklab oling</h3>
            <p className="feature-card-description">
              AI yordamida yaratilgan hujjatni tahrirlang va kerakli formatda yuklab oling
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
