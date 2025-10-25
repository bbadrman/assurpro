import React from 'react';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const CoverageStep = ({ formData, updateFormData, errors }) => {
  const coverageTypeOptions = [
    { 
      value: 'tiers', 
      label: 'Responsabilité civile (Tiers)',
      description: 'Couverture minimale obligatoire' 
    },
    { 
      value: 'tiers_plus', 
      label: 'Tiers étendu',
      description: 'Tiers + vol, incendie, bris de glace' 
    },
    { 
      value: 'tous_risques', 
      label: 'Tous risques',
      description: 'Protection complète recommandée pour les professionnels' 
    }
  ];

  const deductibleOptions = [
    { value: '0', label: 'Aucune franchise (0 MAD)' },
    { value: '1000', label: 'Franchise réduite (1 000 MAD)' },
    { value: '2500', label: 'Franchise standard (2 500 MAD)' },
    { value: '5000', label: 'Franchise élevée (5 000 MAD)' }
  ];

  const handleInputChange = (field, value) => {
    updateFormData({ [field]: value });
  };

  const coverageOptions = [
    {
      id: 'assistance24h',
      label: 'Assistance 24h/24',
      description: 'Dépannage, remorquage, véhicule de remplacement',
      recommended: true
    },
    {
      id: 'protectionJuridique',
      label: 'Protection juridique',
      description: 'Défense pénale et recours suite à accident',
      recommended: true
    },
    {
      id: 'garantiePersonnelle',
      label: 'Garantie du conducteur',
      description: 'Indemnisation en cas de blessures du conducteur',
      recommended: false
    },
    {
      id: 'equipementsPro',
      label: 'Équipements professionnels',
      description: 'GPS, tablette, équipements spécifiques au métier',
      recommended: false
    },
    {
      id: 'pertesExploitation',
      label: 'Pertes d\'exploitation',
      description: 'Compensation en cas d\'immobilisation du véhicule',
      recommended: true
    }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Type de couverture"
          options={coverageTypeOptions}
          value={formData?.coverageType}
          onChange={(value) => handleInputChange('coverageType', value)}
          error={errors?.coverageType}
          required
          className="md:col-span-2"
        />
        
        <Select
          label="Franchise souhaitée"
          options={deductibleOptions}
          value={formData?.deductible}
          onChange={(value) => handleInputChange('deductible', value)}
          error={errors?.deductible}
          required
          description="Une franchise plus élevée réduit le coût de votre prime"
        />
      </div>
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-800 flex items-center">
          <Icon name="Shield" size={20} className="mr-2 text-primary" />
          Garanties optionnelles
        </h4>
        <p className="text-sm text-gray-600 mb-4">
          Sélectionnez les garanties supplémentaires adaptées à votre activité professionnelle
        </p>
        
        <div className="grid grid-cols-1 gap-4">
          {coverageOptions?.map((option) => (
            <div key={option?.id} className="relative">
              <div className={`p-4 border rounded-lg transition-all duration-200 ${
                formData?.additionalCoverage?.[option?.id] 
                  ? 'border-primary bg-blue-50' :'border-gray-200 hover:border-gray-300'
              }`}>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    checked={formData?.additionalCoverage?.[option?.id] || false}
                    onChange={(e) => {
                      const newCoverage = {
                        ...formData?.additionalCoverage,
                        [option?.id]: e?.target?.checked
                      };
                      handleInputChange('additionalCoverage', newCoverage);
                    }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <label className="font-medium text-gray-800 cursor-pointer">
                        {option?.label}
                      </label>
                      {option?.recommended && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                          <Icon name="Star" size={12} className="mr-1" />
                          Recommandé
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {option?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} className="text-blue-600 mt-0.5" />
          <div>
            <h5 className="font-medium text-blue-800 mb-1">
              Conseil ProAssure
            </h5>
            <p className="text-sm text-blue-700">
              Pour une activité professionnelle, nous recommandons fortement la couverture "Tous risques" 
              avec l'assistance 24h/24 et la protection juridique. Ces garanties vous protègent efficacement 
              contre les risques liés à votre métier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverageStep;