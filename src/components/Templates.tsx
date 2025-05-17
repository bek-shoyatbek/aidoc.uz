import React, { useState } from 'react';
import './Templates.css';
import { useTranslation } from 'react-i18next';

// Mock data for template documents
const mockTemplates = [
  { 
    id: 1, 
    title: 'Employment Contract', 
    category: 'HR', 
    description: 'Standard employment contract template',
    imageUrl: '/images/templates/employment-contract.jpg'
  },
  { 
    id: 2, 
    title: 'Non-Disclosure Agreement', 
    category: 'Legal', 
    description: 'Confidentiality agreement for business purposes',
    imageUrl: '/images/templates/nda.jpg'
  },
  { 
    id: 3, 
    title: 'Invoice Template', 
    category: 'Finance', 
    description: 'Standard invoice for business transactions',
    imageUrl: '/images/templates/invoice.jpg'
  },
  { 
    id: 4, 
    title: 'Rental Agreement', 
    category: 'Real Estate', 
    description: 'Property rental contract template',
    imageUrl: '/images/templates/rental-agreement.jpg'
  },
  { 
    id: 5, 
    title: 'Business Proposal', 
    category: 'Business', 
    description: 'Template for business proposals and pitches',
    imageUrl: '/images/templates/business-proposal.jpg'
  },
];

const Templates: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showGenerateModal, setShowGenerateModal] = useState(false);
  const [generatingDoc, setGeneratingDoc] = useState(false);
  const [requestedDocName, setRequestedDocName] = useState('');

  // Get unique categories from templates
  const categories = Array.from(new Set(mockTemplates.map(template => template.category)));

  // Filter templates based on search term and selected category
  const filteredTemplates = mockTemplates.filter(template => {
    const matchesSearch = 
      template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase());

    // If no category is selected or the template matches the selected category
    const matchesCategory = !selectedCategory || template.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleGenerateRequest = () => {
    if (searchTerm.trim() !== '') {
      setRequestedDocName(searchTerm);
      setShowGenerateModal(true);
    }
  };

  const handleConfirmGenerate = () => {
    setGeneratingDoc(true);
    // Simulate AI generation process
    setTimeout(() => {
      setGeneratingDoc(false);
      setShowGenerateModal(false);
      setSearchTerm('');
      // In a real application, you would handle the generated document here
      alert(`${t('templates.documentGenerated', 'Document has been generated successfully!')}`);
    }, 2000);
  };

  return (
    <div className="templates-container">
      <h1 className="templates-title">{t('templates.title', 'Document Templates')}</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder={t('templates.searchPlaceholder', 'Search for templates...')}
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <button 
          className="generate-button"
          onClick={handleGenerateRequest}
          disabled={searchTerm.trim() === ''}
        >
          {t('templates.generateButton', 'Generate with AI')}
        </button>
      </div>

      <div className="category-filter-container">
        <div className="category-filter-label">{t('templates.filterByCategory', 'Filter by category:')}</div>
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`category-filter-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategorySelect(category)}
            >
              {t(`templates.categories.${category.toLowerCase()}`, category)}
            </button>
          ))}
          {selectedCategory && (
            <button
              className="category-filter-button clear-filter"
              onClick={() => setSelectedCategory(null)}
            >
              {t('templates.clearFilter', 'Clear filter')}
            </button>
          )}
        </div>
      </div>

      {filteredTemplates.length > 0 ? (
        <div className="templates-grid">
          {filteredTemplates.map(template => (
            <div key={template.id} className="template-card">
              <div className="template-image-container">
                <img 
                  src={template.imageUrl} 
                  alt={template.title}
                  className="template-image"
                  onError={(e) => {
                    // Use a gradient background as fallback if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('template-image-fallback');
                    // Add the first letter of the template title as a visual element
                    const fallbackText = document.createElement('div');
                    fallbackText.className = 'template-image-fallback-text';
                    fallbackText.textContent = template.title.charAt(0);
                    e.currentTarget.parentElement?.appendChild(fallbackText);
                  }}
                />
              </div>
              <div className="template-content">
                <h3>{template.title}</h3>
                <span className="template-category">{template.category}</span>
                <p>{template.description}</p>
                <button className="use-template-button">
                  {t('templates.useTemplate', 'Use Template')}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>{t('templates.noResults', 'No templates found matching your search.')}</p>
          <button 
            className="generate-button-large"
            onClick={handleGenerateRequest}
          >
            {t('templates.generateNewDoc', 'Generate this document with AI')}
          </button>
        </div>
      )}

      {showGenerateModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{t('templates.generateDocTitle', 'Generate New Document')}</h2>
            <p>
              {t('templates.generateDocPrompt', 'Would you like to generate a new document for:')} 
              <strong>"{requestedDocName}"</strong>?
            </p>
            <div className="modal-buttons">
              <button 
                className="cancel-button"
                onClick={() => setShowGenerateModal(false)}
                disabled={generatingDoc}
              >
                {t('templates.cancel', 'Cancel')}
              </button>
              <button 
                className="confirm-button"
                onClick={handleConfirmGenerate}
                disabled={generatingDoc}
              >
                {generatingDoc 
                  ? t('templates.generating', 'Generating...') 
                  : t('templates.confirm', 'Generate Document')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Templates;
