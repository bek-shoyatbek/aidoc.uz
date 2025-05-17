import React from 'react';
import './AboutUs.css';
import { useTranslation } from 'react-i18next';

const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="about-container">
      <h1>{t('about.title', 'About Us')}</h1>
      
      <div className="about-content">
        <section className="about-section">
          <h2>{t('about.mission.title', 'Our Mission')}</h2>
          <p>{t('about.mission.description', 'Our mission is to simplify document creation and management through innovative automation solutions, helping businesses save time and reduce errors.')}</p>
        </section>
        
        <section className="about-section">
          <h2>{t('about.story.title', 'Our Story')}</h2>
          <p>{t('about.story.description', 'Founded in 2023, aidoc.uz was created to address the challenges businesses face with document management. We recognized that many organizations spend countless hours on repetitive document tasks that could be automated.')}</p>
          <p>{t('about.story.continued', 'Our team of experts in document processing and automation has developed a platform that makes document creation and management simple, efficient, and error-free.')}</p>
        </section>
        
        <section className="about-section">
          <h2>{t('about.team.title', 'Our Team')}</h2>
          <p>{t('about.team.description', 'We are a dedicated team of professionals with expertise in document automation, artificial intelligence, and user experience design.')}</p>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo placeholder"></div>
              <h3>{t('about.team.member1.name', 'Alex Johnson')}</h3>
              <p>{t('about.team.member1.role', 'CEO & Founder')}</p>
            </div>
            
            <div className="team-member">
              <div className="member-photo placeholder"></div>
              <h3>{t('about.team.member2.name', 'Sarah Chen')}</h3>
              <p>{t('about.team.member2.role', 'CTO')}</p>
            </div>
            
            <div className="team-member">
              <div className="member-photo placeholder"></div>
              <h3>{t('about.team.member3.name', 'Michael Rodriguez')}</h3>
              <p>{t('about.team.member3.role', 'Head of Product')}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;