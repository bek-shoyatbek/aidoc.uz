import React from 'react';
import './Services.css';
import { useTranslation } from 'react-i18next';

const Services: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="services-container">
      <h1>{t('services.title', 'Our Services')}</h1>
      <div className="services-content">
        <p>{t('services.description', 'We offer a variety of document automation services to help streamline your workflow.')}</p>
        
        <div className="services-grid">
          <div className="service-card">
            <h3>{t('services.service1.title', 'Document Generation')}</h3>
            <p>{t('services.service1.description', 'Automatically generate documents based on your data and templates.')}</p>
          </div>
          
          <div className="service-card">
            <h3>{t('services.service2.title', 'Template Management')}</h3>
            <p>{t('services.service2.description', 'Create and manage document templates for various use cases.')}</p>
          </div>
          
          <div className="service-card">
            <h3>{t('services.service3.title', 'Document Analysis')}</h3>
            <p>{t('services.service3.description', 'Extract and analyze data from your existing documents.')}</p>
          </div>
          
          <div className="service-card">
            <h3>{t('services.service4.title', 'Workflow Automation')}</h3>
            <p>{t('services.service4.description', 'Automate your document workflows from creation to approval.')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;