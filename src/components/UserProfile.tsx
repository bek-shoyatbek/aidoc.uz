import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';
import './UserProfile.css';

const UserProfile: React.FC = () => {
  const { t } = useTranslation();
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="user-profile-page">
        <h1>{t('userProfile.notLoggedIn', 'Not Logged In')}</h1>
        <p>{t('userProfile.pleaseLogin', 'Please login to view your profile')}</p>
      </div>
    );
  }

  return (
    <div className="user-profile-page">
      <div className="profile-header">
        <div className="profile-info">
          <img 
            src={user.picture} 
            alt={user.name} 
            className="profile-avatar" 
          />
          <div className="profile-details">
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        </div>
        <button onClick={logout} className="logout-button">
          {t('userProfile.logout', 'Logout')}
        </button>
      </div>

      <div className="profile-content">
        <div className="profile-section">
          <h2>{t('userProfile.myDocuments', 'My Documents')}</h2>
          <div className="documents-list">
            {/* This would be populated with actual documents in a real implementation */}
            <p>{t('userProfile.noDocuments', 'You have no saved documents yet.')}</p>
          </div>
        </div>

        <div className="profile-section">
          <h2>{t('userProfile.savedTemplates', 'Saved Templates')}</h2>
          <div className="templates-list">
            {/* This would be populated with actual templates in a real implementation */}
            <p>{t('userProfile.noTemplates', 'You have no saved templates yet.')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
