import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CoverageSection = () => {
  const [activeTab, setActiveTab] = useState('essential');

  const coverageOptions = {
    essential: {
      name: 'Essentiel VTC',
      price: '2,850',
      period: '/an',
      description: 'Protection de base pour débuter votre activité VTC en toute sérénité',
      features: [
        { name: 'Responsabilité Civile Professionnelle', included: true, description: 'Jusqu\'à 10M MAD' },
        { name: 'Protection Conducteur', included: true, description: 'Jusqu\'à 500K MAD' },
        { name: 'Assistance 24h/7j', included: true, description: 'Dépannage et remorquage' },
        { name: 'Défense Recours', included: true, description: 'Protection juridique' },
        { name: 'Vol et Incendie', included: false, description: 'Non inclus' },
        { name: 'Tous Risques', included: false, description: 'Non inclus' },
        { name: 'Véhicule de Remplacement', included: false, description: 'Non inclus' },
        { name: 'Protection Revenus', included: false, description: 'Non inclus' }
      ],
      popular: false
    },
    premium: {
      name: 'Premium VTC',
      price: '4,200',
      period: '/an',
      description: 'Couverture complète pour les professionnels exigeants',
      features: [
        { name: 'Responsabilité Civile Professionnelle', included: true, description: 'Jusqu\'à 15M MAD' },
        { name: 'Protection Conducteur', included: true, description: 'Jusqu\'à 1M MAD' },
        { name: 'Assistance 24h/7j', included: true, description: 'Dépannage et remorquage' },
        { name: 'Défense Recours', included: true, description: 'Protection juridique étendue' },
        { name: 'Vol et Incendie', included: true, description: 'Valeur à neuf 2 ans' },
        { name: 'Tous Risques', included: true, description: 'Franchise réduite' },
        { name: 'Véhicule de Remplacement', included: true, description: '30 jours/an' },
        { name: 'Protection Revenus', included: false, description: 'Non inclus' }
      ],
      popular: true
    },
    excellence: {
      name: 'Excellence VTC',
      price: '5,800',
      period: '/an',
      description: 'Protection maximale pour votre business VTC',
      features: [
        { name: 'Responsabilité Civile Professionnelle', included: true, description: 'Jusqu\'à 20M MAD' },
        { name: 'Protection Conducteur', included: true, description: 'Jusqu\'à 1.5M MAD' },
        { name: 'Assistance 24h/7j', included: true, description: 'Service premium' },
        { name: 'Défense Recours', included: true, description: 'Protection juridique premium' },
        { name: 'Vol et Incendie', included: true, description: 'Valeur à neuf 3 ans' },
        { name: 'Tous Risques', included: true, description: 'Franchise minimale' },
        { name: 'Véhicule de Remplacement', included: true, description: '60 jours/an' },
        { name: 'Protection Revenus', included: true, description: 'Jusqu\'à 6 mois' }
      ],
      popular: false
    }
  };

  const tabs = [
    { id: 'essential', label: 'Essentiel', icon: 'Shield' },
    { id: 'premium', label: 'Premium', icon: 'Star' },
    { id: 'excellence', label: 'Excellence', icon: 'Crown' }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Choisissez Votre Couverture VTC
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trois niveaux de protection adaptés à vos besoins et votre budget. 
            Tous nos contrats incluent les garanties obligatoires pour l'activité VTC au Maroc.
          </p>
        </div>

        {/* Coverage Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 shadow-card">
            <div className="flex space-x-2">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === tab?.id
                      ? 'bg-primary text-white shadow-card'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  <Icon name={tab?.icon} size={18} />
                  <span>{tab?.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Coverage Details */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-elevated overflow-hidden">
            {/* Header */}
            <div className={`px-8 py-6 ${coverageOptions?.[activeTab]?.popular ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-gray-50'}`}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-3">
                    <h3 className={`text-2xl font-bold ${coverageOptions?.[activeTab]?.popular ? 'text-white' : 'text-gray-900'}`}>
                      {coverageOptions?.[activeTab]?.name}
                    </h3>
                    {coverageOptions?.[activeTab]?.popular && (
                      <span className="bg-accent text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                        Plus Populaire
                      </span>
                    )}
                  </div>
                  <p className={`mt-2 ${coverageOptions?.[activeTab]?.popular ? 'text-white/90' : 'text-gray-600'}`}>
                    {coverageOptions?.[activeTab]?.description}
                  </p>
                </div>
                <div className="text-right">
                  <div className={`text-3xl font-bold ${coverageOptions?.[activeTab]?.popular ? 'text-white' : 'text-primary'}`}>
                    {coverageOptions?.[activeTab]?.price} MAD
                  </div>
                  <div className={`text-sm ${coverageOptions?.[activeTab]?.popular ? 'text-white/80' : 'text-gray-500'}`}>
                    {coverageOptions?.[activeTab]?.period}
                  </div>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="p-8">
              <div className="grid gap-4">
                {coverageOptions?.[activeTab]?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        feature?.included 
                          ? 'bg-success/10 text-success' :'bg-gray-100 text-gray-400'
                      }`}>
                        <Icon 
                          name={feature?.included ? "Check" : "X"} 
                          size={14} 
                        />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{feature?.name}</div>
                        <div className="text-sm text-gray-500">{feature?.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <Button
                  variant="default"
                  size="lg"
                  fullWidth
                  iconName="Calculator"
                  iconPosition="left"
                  className="bg-primary hover:bg-primary/90"
                >
                  Souscrire {coverageOptions?.[activeTab]?.name}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;