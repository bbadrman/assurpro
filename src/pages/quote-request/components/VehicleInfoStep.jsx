import React from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const VehicleInfoStep = ({ formData, updateFormData, errors }) => {
  const vehicleTypeOptions = [
    { value: 'vtc', label: 'VTC (Véhicule de Tourisme avec Chauffeur)' },
    { value: 'taxi', label: 'Taxi traditionnel' },
    { value: 'transport', label: 'Transport de marchandises' }
  ];

  const brandOptions = [
    { value: 'renault', label: 'Renault' },
    { value: 'peugeot', label: 'Peugeot' },
    { value: 'citroen', label: 'Citroën' },
    { value: 'dacia', label: 'Dacia' },
    { value: 'mercedes', label: 'Mercedes-Benz' },
    { value: 'bmw', label: 'BMW' },
    { value: 'audi', label: 'Audi' },
    { value: 'volkswagen', label: 'Volkswagen' },
    { value: 'toyota', label: 'Toyota' },
    { value: 'hyundai', label: 'Hyundai' },
    { value: 'autre', label: 'Autre marque' }
  ];

  const fuelTypeOptions = [
    { value: 'essence', label: 'Essence' },
    { value: 'diesel', label: 'Diesel' },
    { value: 'hybride', label: 'Hybride' },
    { value: 'electrique', label: 'Électrique' },
    { value: 'gpl', label: 'GPL' }
  ];

  const usageOptions = [
    { value: 'professionnel', label: 'Usage professionnel uniquement' },
    { value: 'mixte', label: 'Usage mixte (professionnel et personnel)' },
    { value: 'personnel', label: 'Usage personnel avec activité occasionnelle' }
  ];

  const handleInputChange = (field, value) => {
    updateFormData({ [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Type de véhicule"
          options={vehicleTypeOptions}
          value={formData?.vehicleType}
          onChange={(value) => handleInputChange('vehicleType', value)}
          error={errors?.vehicleType}
          required
          className="md:col-span-2"
        />
        
        <Select
          label="Marque du véhicule"
          options={brandOptions}
          value={formData?.vehicleBrand}
          onChange={(value) => handleInputChange('vehicleBrand', value)}
          error={errors?.vehicleBrand}
          required
          searchable
        />
        
        <Input
          label="Modèle du véhicule"
          type="text"
          placeholder="Ex: Clio, 208, Logan..."
          value={formData?.vehicleModel}
          onChange={(e) => handleInputChange('vehicleModel', e?.target?.value)}
          error={errors?.vehicleModel}
          required
        />
        
        <Input
          label="Année de mise en circulation"
          type="number"
          placeholder="2020"
          min="1990"
          max="2024"
          value={formData?.vehicleYear}
          onChange={(e) => handleInputChange('vehicleYear', e?.target?.value)}
          error={errors?.vehicleYear}
          required
        />
        
        <Select
          label="Type de carburant"
          options={fuelTypeOptions}
          value={formData?.fuelType}
          onChange={(value) => handleInputChange('fuelType', value)}
          error={errors?.fuelType}
          required
        />
        
        <Input
          label="Numéro d'immatriculation"
          type="text"
          placeholder="123456-A-12"
          value={formData?.licensePlate}
          onChange={(e) => handleInputChange('licensePlate', e?.target?.value)}
          error={errors?.licensePlate}
          required
          className="md:col-span-2"
        />
        
        <Input
          label="Puissance fiscale (CV)"
          type="number"
          placeholder="7"
          min="1"
          max="50"
          value={formData?.fiscalPower}
          onChange={(e) => handleInputChange('fiscalPower', e?.target?.value)}
          error={errors?.fiscalPower}
          required
        />
        
        <Input
          label="Kilométrage annuel estimé"
          type="number"
          placeholder="50000"
          min="1000"
          max="200000"
          value={formData?.annualMileage}
          onChange={(e) => handleInputChange('annualMileage', e?.target?.value)}
          error={errors?.annualMileage}
          required
        />
        
        <Select
          label="Type d'usage"
          options={usageOptions}
          value={formData?.vehicleUsage}
          onChange={(value) => handleInputChange('vehicleUsage', value)}
          error={errors?.vehicleUsage}
          required
          className="md:col-span-2"
        />
      </div>
    </div>
  );
};

export default VehicleInfoStep;