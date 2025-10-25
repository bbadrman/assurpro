import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

import Select from '../../../components/ui/Select';

const PricingCalculatorSection = () => {
  const [calculatorData, setCalculatorData] = useState({
    vehicleType: '',
    fleetSize: '',
    experience: '',
    coverage: '',
    region: ''
  });
  
  const [calculatedPrice, setCalculatedPrice] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const vehicleTypeOptions = [
    { value: 'light', label: 'Véhicule Léger (< 3.5T)' },
    { value: 'medium', label: 'Poids Moyen (3.5T - 12T)' },
    { value: 'heavy', label: 'Poids Lourd (> 12T)' },
    { value: 'special', label: 'Véhicule Spécialisé' }
  ];

  const fleetSizeOptions = [
    { value: '1', label: '1 véhicule' },
    { value: '2-5', label: '2 à 5 véhicules' },
    { value: '6-15', label: '6 à 15 véhicules' },
    { value: '16+', label: '16 véhicules et plus' }
  ];

  const experienceOptions = [
    { value: 'new', label: 'Moins de 2 ans' },
    { value: 'medium', label: '2 à 5 ans' },
    { value: 'experienced', label: '5 à 10 ans' },
    { value: 'expert', label: 'Plus de 10 ans' }
  ];

  const coverageOptions = [
    { value: 'basic', label: 'Couverture Essentielle' },
    { value: 'premium', label: 'Couverture Complète' },
    { value: 'fleet', label: 'Couverture Flotte' }
  ];

  const regionOptions = [
    { value: 'casablanca', label: 'Grand Casablanca' },
    { value: 'rabat', label: 'Rabat-Salé-Kénitra' },
    { value: 'marrakech', label: 'Marrakech-Safi' },
    { value: 'fes', label: 'Fès-Meknès' },
    { value: 'tanger', label: 'Tanger-Tétouan-Al Hoceïma' },
    { value: 'other', label: 'Autre région' }
  ];

  const handleInputChange = (field, value) => {
    setCalculatorData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculatePrice = async () => {
    setIsCalculating(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock calculation logic
    let basePrice = 2000;
    
    // Vehicle type multiplier
    const vehicleMultipliers = {
      light: 1,
      medium: 1.3,
      heavy: 1.8,
      special: 2.2
    };
    
    // Fleet size discount
    const fleetDiscounts = {
      '1': 1,
      '2-5': 0.9,
      '6-15': 0.8,
      '16+': 0.7
    };
    
    // Experience discount
    const experienceDiscounts = {
      new: 1.2,
      medium: 1,
      experienced: 0.9,
      expert: 0.8
    };
    
    // Coverage multiplier
    const coverageMultipliers = {
      basic: 1,
      premium: 1.6,
      fleet: 2.1
    };
    
    // Region multiplier
    const regionMultipliers = {
      casablanca: 1.1,
      rabat: 1,
      marrakech: 0.95,
      fes: 0.9,
      tanger: 0.9,
      other: 0.85
    };
    
    const finalPrice = Math.round(
      basePrice *
      (vehicleMultipliers?.[calculatorData?.vehicleType] || 1) *
      (fleetDiscounts?.[calculatorData?.fleetSize] || 1) *
      (experienceDiscounts?.[calculatorData?.experience] || 1) *
      (coverageMultipliers?.[calculatorData?.coverage] || 1) *
      (regionMultipliers?.[calculatorData?.region] || 1)
    );
    
    setCalculatedPrice({
      monthly: finalPrice,
      annual: Math.round(finalPrice * 12 * 0.9), // 10% discount for annual
      savings: Math.round(finalPrice * 12 * 0.1)
    });
    
    setIsCalculating(false);
  };

  const isFormValid = Object.values(calculatorData)?.every(value => value !== '');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Calculateur de Tarif Transport
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Obtenez une estimation personnalisée de votre prime d'assurance transport 
            en quelques clics. Calcul basé sur vos critères spécifiques.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Icon name="Calculator" size={24} className="text-primary mr-3" />
                Vos Informations
              </h3>

              <div className="space-y-6">
                <Select
                  label="Type de Véhicule"
                  placeholder="Sélectionnez le type"
                  options={vehicleTypeOptions}
                  value={calculatorData?.vehicleType}
                  onChange={(value) => handleInputChange('vehicleType', value)}
                  required
                />

                <Select
                  label="Taille de Flotte"
                  placeholder="Nombre de véhicules"
                  options={fleetSizeOptions}
                  value={calculatorData?.fleetSize}
                  onChange={(value) => handleInputChange('fleetSize', value)}
                  required
                />

                <Select
                  label="Expérience Transport"
                  placeholder="Années d'expérience"
                  options={experienceOptions}
                  value={calculatorData?.experience}
                  onChange={(value) => handleInputChange('experience', value)}
                  required
                />

                <Select
                  label="Niveau de Couverture"
                  placeholder="Type de couverture souhaité"
                  options={coverageOptions}
                  value={calculatorData?.coverage}
                  onChange={(value) => handleInputChange('coverage', value)}
                  required
                />

                <Select
                  label="Région d'Activité"
                  placeholder="Zone géographique principale"
                  options={regionOptions}
                  value={calculatorData?.region}
                  onChange={(value) => handleInputChange('region', value)}
                  required
                />

                <Button
                  variant="default"
                  size="lg"
                  fullWidth
                  loading={isCalculating}
                  disabled={!isFormValid}
                  onClick={calculatePrice}
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  {isCalculating ? 'Calcul en cours...' : 'Calculer mon Tarif'}
                </Button>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-8">
              {/* Price Result */}
              {calculatedPrice ? (
                <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white animate-scale-in">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Icon name="CheckCircle" size={24} className="mr-3" />
                    Votre Estimation
                  </h3>

                  <div className="space-y-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-sm text-blue-100 mb-1">Prime Mensuelle</div>
                      <div className="text-3xl font-bold">{calculatedPrice?.monthly?.toLocaleString()} MAD</div>
                    </div>

                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-sm text-blue-100 mb-1">Prime Annuelle</div>
                      <div className="text-2xl font-bold">{calculatedPrice?.annual?.toLocaleString()} MAD</div>
                      <div className="text-sm text-accent font-medium">
                        Économie: {calculatedPrice?.savings?.toLocaleString()} MAD
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/20">
                      <Button
                        variant="default"
                        size="lg"
                        fullWidth
                        className="bg-white text-primary hover:bg-gray-100"
                        iconName="FileText"
                        iconPosition="left"
                      >
                        Demander Devis Détaillé
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-2xl p-8 text-center">
                  <Icon name="Calculator" size={48} className="text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Estimation Personnalisée
                  </h3>
                  <p className="text-muted-foreground">
                    Remplissez le formulaire pour obtenir votre tarif personnalisé 
                    basé sur vos critères spécifiques.
                  </p>
                </div>
              )}

              {/* Benefits */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Avantages Inclus
                </h4>
                
                <div className="space-y-3">
                  {[
                    "Devis gratuit et sans engagement",
                    "Tarification transparente",
                    "Réponse sous 24h maximum",
                    "Accompagnement personnalisé",
                    "Possibilité de paiement échelonné"
                  ]?.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon name="Check" size={16} className="text-success" strokeWidth={3} />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-r from-accent/10 to-warning/10 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Icon name="Headphones" size={20} className="text-accent mr-2" />
                  Besoin d'Aide ?
                </h4>
                
                <p className="text-gray-700 mb-4 text-sm">
                  Nos experts transport sont disponibles pour vous accompagner 
                  dans le choix de votre couverture.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Phone"
                    iconPosition="left"
                    className="text-accent border-accent hover:bg-accent hover:text-white"
                  >
                    +212 5XX XX XX XX
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="MessageCircle"
                    iconPosition="left"
                    className="text-primary border-primary hover:bg-primary hover:text-white"
                  >
                    Chat en Direct
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculatorSection;