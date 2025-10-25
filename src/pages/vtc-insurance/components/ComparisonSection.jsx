import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ComparisonSection = () => {
  const [selectedComparison, setSelectedComparison] = useState('coverage');

  const comparisonTypes = [
    { id: 'coverage', label: 'Couvertures', icon: 'Shield' },
    { id: 'pricing', label: 'Tarification', icon: 'DollarSign' },
    { id: 'services', label: 'Services', icon: 'Settings' }
  ];

  const coverageComparison = {
    categories: [
      'Responsabilité Civile',
      'Protection Conducteur',
      'Vol et Incendie',
      'Tous Risques',
      'Assistance 24h/7j',
      'Véhicule de Remplacement',
      'Protection Juridique',
      'Couverture Matériel',
      'Protection Revenus'
    ],
    providers: [
      {
        name: 'ProAssure VTC',
        type: 'Spécialisé VTC',
        highlight: true,
        features: [
          { coverage: 'Jusqu\'à 20M MAD', included: true },
          { coverage: 'Jusqu\'à 1.5M MAD', included: true },
          { coverage: 'Valeur à neuf 3 ans', included: true },
          { coverage: 'Franchise réduite', included: true },
          { coverage: 'Service premium', included: true },
          { coverage: '60 jours/an', included: true },
          { coverage: 'Protection étendue', included: true },
          { coverage: 'Équipements pro', included: true },
          { coverage: 'Jusqu\'à 6 mois', included: true }
        ]
      },
      {
        name: 'Assureur Traditionnel A',
        type: 'Généraliste',
        highlight: false,
        features: [
          { coverage: 'Jusqu\'à 10M MAD', included: true },
          { coverage: 'Jusqu\'à 500K MAD', included: true },
          { coverage: 'Valeur vénale', included: true },
          { coverage: 'Franchise standard', included: true },
          { coverage: 'Service basique', included: true },
          { coverage: '15 jours/an', included: true },
          { coverage: 'Protection limitée', included: false },
          { coverage: 'Non couvert', included: false },
          { coverage: 'Non inclus', included: false }
        ]
      },
      {
        name: 'Assureur Traditionnel B',
        type: 'Généraliste',
        highlight: false,
        features: [
          { coverage: 'Jusqu\'à 8M MAD', included: true },
          { coverage: 'Jusqu\'à 300K MAD', included: true },
          { coverage: 'Valeur vénale', included: true },
          { coverage: 'Franchise élevée', included: true },
          { coverage: 'Horaires limités', included: true },
          { coverage: '10 jours/an', included: false },
          { coverage: 'Non inclus', included: false },
          { coverage: 'Non couvert', included: false },
          { coverage: 'Non inclus', included: false }
        ]
      }
    ]
  };

  const pricingComparison = {
    scenarios: [
      'VTC Débutant (véhicule récent)',
      'VTC Expérimenté (bon dossier)',
      'VTC Premium (véhicule haut de gamme)',
      'Flotte VTC (3-5 véhicules)'
    ],
    providers: [
      {
        name: 'ProAssure VTC',
        prices: ['2,850 MAD/an', '2,400 MAD/an', '4,200 MAD/an', 'Sur mesure'],
        savings: ['+0%', '+15%', '+12%', '+20%']
      },
      {
        name: 'Concurrent A',
        prices: ['3,200 MAD/an', '2,800 MAD/an', '4,800 MAD/an', 'Sur mesure'],
        savings: ['-12%', '-17%', '-14%', '-']
      },
      {
        name: 'Concurrent B',
        prices: ['3,500 MAD/an', '3,100 MAD/an', '5,200 MAD/an', 'Sur mesure'],
        savings: ['-23%', '-29%', '-24%', '-']
      }
    ]
  };

  const servicesComparison = {
    services: [
      'Devis en ligne instantané',
      'Souscription 100% digitale',
      'Application mobile dédiée',
      'Conseiller VTC spécialisé',
      'Assistance sinistre 24h/7j',
      'Réseau de réparateurs agréés',
      'Formation sécurité routière',
      'Veille réglementaire VTC'
    ],
    providers: [
      {
        name: 'ProAssure VTC',
        services: [true, true, true, true, true, true, true, true]
      },
      {
        name: 'Concurrent A',
        services: [false, false, false, false, true, true, false, false]
      },
      {
        name: 'Concurrent B',
        services: [false, false, false, false, true, false, false, false]
      }
    ]
  };

  const renderCoverageComparison = () => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th className="text-left py-4 px-4 font-semibold text-gray-900">Garanties</th>
            {coverageComparison?.providers?.map((provider, index) => (
              <th key={index} className={`text-center py-4 px-4 ${provider?.highlight ? 'bg-primary/5' : ''}`}>
                <div className="font-semibold text-gray-900">{provider?.name}</div>
                <div className={`text-sm ${provider?.highlight ? 'text-primary' : 'text-gray-500'}`}>
                  {provider?.type}
                </div>
                {provider?.highlight && (
                  <div className="mt-1">
                    <span className="bg-accent text-gray-900 px-2 py-1 rounded-full text-xs font-medium">
                      Recommandé
                    </span>
                  </div>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {coverageComparison?.categories?.map((category, categoryIndex) => (
            <tr key={categoryIndex} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-4 px-4 font-medium text-gray-900">{category}</td>
              {coverageComparison?.providers?.map((provider, providerIndex) => (
                <td key={providerIndex} className={`py-4 px-4 text-center ${provider?.highlight ? 'bg-primary/5' : ''}`}>
                  <div className="flex items-center justify-center space-x-2">
                    <Icon 
                      name={provider?.features?.[categoryIndex]?.included ? "Check" : "X"} 
                      size={16} 
                      color={provider?.features?.[categoryIndex]?.included ? "var(--color-success)" : "var(--color-error)"}
                    />
                    <span className={`text-sm ${provider?.features?.[categoryIndex]?.included ? 'text-gray-700' : 'text-gray-400'}`}>
                      {provider?.features?.[categoryIndex]?.coverage}
                    </span>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderPricingComparison = () => (
    <div className="space-y-6">
      {pricingComparison?.scenarios?.map((scenario, scenarioIndex) => (
        <div key={scenarioIndex} className="bg-white border border-gray-200 rounded-xl p-6">
          <h4 className="font-semibold text-gray-900 mb-4">{scenario}</h4>
          <div className="grid md:grid-cols-3 gap-4">
            {pricingComparison?.providers?.map((provider, providerIndex) => (
              <div key={providerIndex} className={`p-4 rounded-lg border-2 ${
                providerIndex === 0 ? 'border-primary bg-primary/5' : 'border-gray-200'
              }`}>
                <div className="text-center">
                  <div className="font-semibold text-gray-900 mb-1">{provider?.name}</div>
                  <div className="text-2xl font-bold text-primary mb-2">
                    {provider?.prices?.[scenarioIndex]}
                  </div>
                  {provider?.savings?.[scenarioIndex] !== '-' && (
                    <div className={`text-sm font-medium ${
                      provider?.savings?.[scenarioIndex]?.startsWith('+') ? 'text-success' : 'text-error'
                    }`}>
                      {provider?.savings?.[scenarioIndex]} économie
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderServicesComparison = () => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th className="text-left py-4 px-4 font-semibold text-gray-900">Services</th>
            {servicesComparison?.providers?.map((provider, index) => (
              <th key={index} className={`text-center py-4 px-4 ${index === 0 ? 'bg-primary/5' : ''}`}>
                <div className="font-semibold text-gray-900">{provider?.name}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {servicesComparison?.services?.map((service, serviceIndex) => (
            <tr key={serviceIndex} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-4 px-4 font-medium text-gray-900">{service}</td>
              {servicesComparison?.providers?.map((provider, providerIndex) => (
                <td key={providerIndex} className={`py-4 px-4 text-center ${providerIndex === 0 ? 'bg-primary/5' : ''}`}>
                  <Icon 
                    name={provider?.services?.[serviceIndex] ? "Check" : "X"} 
                    size={20} 
                    color={provider?.services?.[serviceIndex] ? "var(--color-success)" : "var(--color-error)"}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Pourquoi Choisir ProAssure ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comparaison détaillée avec les autres assureurs du marché. 
            Découvrez pourquoi nous sommes le choix n°1 des professionnels VTC.
          </p>
        </div>

        {/* Comparison Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 shadow-card">
            <div className="flex space-x-2">
              {comparisonTypes?.map((type) => (
                <button
                  key={type?.id}
                  onClick={() => setSelectedComparison(type?.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    selectedComparison === type?.id
                      ? 'bg-primary text-white shadow-card'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  <Icon name={type?.icon} size={18} />
                  <span>{type?.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison Content */}
        <div className="bg-white rounded-2xl shadow-elevated overflow-hidden">
          <div className="p-8">
            {selectedComparison === 'coverage' && renderCoverageComparison()}
            {selectedComparison === 'pricing' && renderPricingComparison()}
            {selectedComparison === 'services' && renderServicesComparison()}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Convaincu par nos Avantages ?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Rejoignez les milliers de chauffeurs VTC qui ont fait le bon choix. 
              Obtenez votre devis personnalisé en 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Calculator"
                iconPosition="left"
                className="bg-accent text-gray-900 hover:bg-accent/90"
                asChild
              >
                <Link to="/quote-request">Obtenir Mon Devis</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Parler à un Expert
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;