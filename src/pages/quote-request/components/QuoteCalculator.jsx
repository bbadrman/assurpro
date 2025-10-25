import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const QuoteCalculator = ({ formData }) => {
  const [quote, setQuote] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    if (formData?.vehicleType && formData?.coverageType) {
      calculateQuote();
    }
  }, [formData?.vehicleType, formData?.coverageType, formData?.deductible, formData?.additionalCoverage]);

  const calculateQuote = () => {
    setIsCalculating(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const baseRates = {
        vtc: 2800,
        taxi: 2400,
        transport: 3200
      };

      const coverageMultipliers = {
        tiers: 1.0,
        tiers_plus: 1.4,
        tous_risques: 1.8
      };

      const deductibleDiscounts = {
        '0': 1.0,
        '1000': 0.95,
        '2500': 0.90,
        '5000': 0.85
      };

      let basePrice = baseRates?.[formData?.vehicleType] || 2800;
      let coverageMultiplier = coverageMultipliers?.[formData?.coverageType] || 1.0;
      let deductibleDiscount = deductibleDiscounts?.[formData?.deductible] || 1.0;

      // Additional coverage costs
      let additionalCosts = 0;
      if (formData?.additionalCoverage) {
        const additionalRates = {
          assistance24h: 180,
          protectionJuridique: 120,
          garantiePersonnelle: 240,
          equipementsPro: 160,
          pertesExploitation: 300
        };

        Object.keys(formData?.additionalCoverage)?.forEach(key => {
          if (formData?.additionalCoverage?.[key]) {
            additionalCosts += additionalRates?.[key] || 0;
          }
        });
      }

      const totalPrice = Math.round((basePrice * coverageMultiplier * deductibleDiscount) + additionalCosts);
      const monthlyPrice = Math.round(totalPrice / 12);

      setQuote({
        annual: totalPrice,
        monthly: monthlyPrice,
        basePrice,
        coverageMultiplier,
        deductibleDiscount,
        additionalCosts,
        calculatedAt: new Date()?.toISOString()
      });
      
      setIsCalculating(false);
    }, 1500);
  };

  if (!formData?.vehicleType || !formData?.coverageType) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
        <Icon name="Calculator" size={32} className="mx-auto text-gray-400 mb-3" />
        <p className="text-gray-600">
          Complétez les informations sur votre véhicule et la couverture souhaitée pour voir votre devis
        </p>
      </div>
    );
  }

  if (isCalculating) {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-center justify-center space-x-3">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
          <p className="text-primary font-medium">Calcul de votre devis en cours...</p>
        </div>
      </div>
    );
  }

  if (!quote) return null;

  return (
    <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg p-6 shadow-elevated">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold flex items-center">
          <Icon name="Calculator" size={24} className="mr-2" />
          Votre devis ProAssure
        </h3>
        <div className="text-right">
          <p className="text-sm opacity-90">Calculé le</p>
          <p className="text-xs opacity-75">
            {new Date(quote.calculatedAt)?.toLocaleDateString('fr-FR')}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="text-center">
          <p className="text-sm opacity-90 mb-1">Prix annuel</p>
          <p className="text-3xl font-bold">
            {quote?.annual?.toLocaleString('fr-FR')} MAD
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm opacity-90 mb-1">Prix mensuel</p>
          <p className="text-3xl font-bold">
            {quote?.monthly?.toLocaleString('fr-FR')} MAD
          </p>
          <p className="text-xs opacity-75">par mois</p>
        </div>
      </div>
      <div className="border-t border-white/20 pt-4 space-y-2">
        <h4 className="font-medium mb-3">Détail du calcul :</h4>
        <div className="flex justify-between text-sm">
          <span className="opacity-90">Tarif de base</span>
          <span>{quote?.basePrice?.toLocaleString('fr-FR')} MAD</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="opacity-90">Type de couverture</span>
          <span>×{quote?.coverageMultiplier}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="opacity-90">Réduction franchise</span>
          <span>×{quote?.deductibleDiscount}</span>
        </div>
        {quote?.additionalCosts > 0 && (
          <div className="flex justify-between text-sm">
            <span className="opacity-90">Garanties optionnelles</span>
            <span>+{quote?.additionalCosts?.toLocaleString('fr-FR')} MAD</span>
          </div>
        )}
      </div>
      <div className="mt-6 p-4 bg-white/10 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={16} className="mt-0.5" />
          <div className="text-sm">
            <p className="font-medium mb-1">Ce devis est indicatif</p>
            <p className="opacity-90">
              Le tarif final sera confirmé après étude de votre dossier et vérification des documents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCalculator;