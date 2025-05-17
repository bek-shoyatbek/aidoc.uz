import React, { useState } from 'react';
import './Contact.css';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Show success message (in a real app)
    alert(t('contact.form.successMessage', 'Your message has been sent. We will contact you soon!'));
  };
  
  return (
    <div className="contact-container">
      <h1>{t('contact.title', 'Contact Us')}</h1>
      
      <div className="contact-content">
        <div className="contact-info">
          <h2>{t('contact.info.title', 'Get in Touch')}</h2>
          <p>{t('contact.info.description', 'We\'d love to hear from you. Please fill out the form or contact us using the information below.')}</p>
          
          <div className="contact-details">
            <div className="contact-detail">
              <h3>{t('contact.info.address.title', 'Address')}</h3>
              <p>{t('contact.info.address.value', '123 Document Street, Tashkent, Uzbekistan')}</p>
            </div>
            
            <div className="contact-detail">
              <h3>{t('contact.info.email.title', 'Email')}</h3>
              <p>{t('contact.info.email.value', 'info@aidoc.uz')}</p>
            </div>
            
            <div className="contact-detail">
              <h3>{t('contact.info.phone.title', 'Phone')}</h3>
              <p>{t('contact.info.phone.value', '+998 90 123 4567')}</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h2>{t('contact.form.title', 'Send us a Message')}</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t('contact.form.name', 'Name')}</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">{t('contact.form.email', 'Email')}</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">{t('contact.form.subject', 'Subject')}</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">{t('contact.form.message', 'Message')}</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                rows={5}
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              {t('contact.form.submit', 'Send Message')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;