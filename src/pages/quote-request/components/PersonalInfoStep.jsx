import React from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const PersonalInfoStep = ({ formData, updateFormData, errors }) => {
  const civilityOptions = [
    { value: 'monsieur', label: 'Monsieur' },
    { value: 'madame', label: 'Madame' },
    { value: 'mademoiselle', label: 'Mademoiselle' }
  ];

  const handleInputChange = (field, value) => {
    updateFormData({ [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Civilité"
          options={civilityOptions}
          value={formData?.civility}
          onChange={(value) => handleInputChange('civility', value)}
          error={errors?.civility}
          required
          className="md:col-span-1"
        />
        
        <div className="md:col-span-1"></div>
        
        <Input
          label="Prénom"
          type="text"
          placeholder="Votre prénom"
          value={formData?.firstName}
          onChange={(e) => handleInputChange('firstName', e?.target?.value)}
          error={errors?.firstName}
          required
        />
        
        <Input
          label="Nom de famille"
          type="text"
          placeholder="Votre nom de famille"
          value={formData?.lastName}
          onChange={(e) => handleInputChange('lastName', e?.target?.value)}
          error={errors?.lastName}
          required
        />
        
        <Input
          label="Date de naissance"
          type="date"
          value={formData?.birthDate}
          onChange={(e) => handleInputChange('birthDate', e?.target?.value)}
          error={errors?.birthDate}
          required
        />
        
        <Input
          label="Numéro de téléphone"
          type="tel"
          placeholder="+212 6XX XX XX XX"
          value={formData?.phone}
          onChange={(e) => handleInputChange('phone', e?.target?.value)}
          error={errors?.phone}
          required
        />
        
        <Input
          label="Adresse e-mail"
          type="email"
          placeholder="votre.email@gmail.com"
          description="Seules les adresses Gmail sont acceptées"
          value={formData?.email}
          onChange={(e) => handleInputChange('email', e?.target?.value)}
          error={errors?.email}
          required
          className="md:col-span-2"
        />
        
        <Input
          label="Adresse complète"
          type="text"
          placeholder="Numéro, rue, quartier"
          value={formData?.address}
          onChange={(e) => handleInputChange('address', e?.target?.value)}
          error={errors?.address}
          required
          className="md:col-span-2"
        />
        
        <Input
          label="Ville"
          type="text"
          placeholder="Votre ville"
          value={formData?.city}
          onChange={(e) => handleInputChange('city', e?.target?.value)}
          error={errors?.city}
          required
        />
        
        <Input
          label="Code postal"
          type="text"
          placeholder="Code postal"
          value={formData?.postalCode}
          onChange={(e) => handleInputChange('postalCode', e?.target?.value)}
          error={errors?.postalCode}
          required
        />
      </div>
      <div className="pt-4 border-t border-gray-200">
        <Checkbox
          label="J'accepte de recevoir des communications marketing par e-mail"
          description="Vous pouvez vous désabonner à tout moment"
          checked={formData?.marketingConsent}
          onChange={(e) => handleInputChange('marketingConsent', e?.target?.checked)}
        />
      </div>
    </div>
  );
};

export default PersonalInfoStep;