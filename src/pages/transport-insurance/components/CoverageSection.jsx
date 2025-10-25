import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CoverageSection = () => {
  const [activeTab, setActiveTab] = useState('basic');

  const coverageOptions = {
    basic: {
      title: "Couverture Essentielle",
      price: "À partir de 2 500 MAD/mois",
      description: "Protection de base pour transporteurs individuels",
      features: [
        "Responsabilité civile obligatoire",
        "Dommages collision véhicule",
        "Vol et incendie",
        "Assistance 24h/7j",
        "Protection conducteur",
        "Défense pénale et recours"
      ],
      icon: "Shield",
      color: "text-primary"
    },
    premium: {
      title: "Couverture Complète",
      price: "À partir de 4 200 MAD/mois",
      description: "Solution optimale pour flottes moyennes",
      features: [
        "Toutes garanties essentielles incluses",
        "Marchandises transportées",
        "Perte d\'exploitation",
        "Véhicule de remplacement",
        "Extension géographique Maghreb",
        "Franchise réduite",
        "Expertise rapide 48h"
      ],
      icon: "Crown",
      color: "text-accent",
      popular: true
    },
    fleet: {
      title: "Couverture Flotte",
      price: "Sur devis personnalisé",
      description: "Gestion complète pour grandes flottes",
      features: [
        "Toutes garanties premium incluses",
        "Gestion centralisée multi-véhicules",
        "Tarification dégressif flotte",
        "Formation conducteurs incluse",
        "Télématique et suivi GPS",
        "Gestionnaire dédié",
        "Reporting mensuel détaillé"
      ],
      icon: "Building2",
      color: "text-secondary"
    }
  };

  const tabs = [
    { id: 'basic', label: 'Essentielle', icon: 'Shield' },
    { id: 'premium', label: 'Complète', icon: 'Crown' },
    { id: 'fleet', label: 'Flotte', icon: 'Building2' }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Couvertures Transport Professionnel
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choisissez la protection adaptée à votre activité de transport. 
            De l'entrepreneur individuel à la grande flotte, nous avons la solution.
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

        {/* Active Coverage Details */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-elevated p-8 lg:p-12 animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg`}>
                    <Icon 
                      name={coverageOptions?.[activeTab]?.icon} 
                      size={24} 
                      className={coverageOptions?.[activeTab]?.color}
                    />
                  </div>
                  {coverageOptions?.[activeTab]?.popular && (
                    <span className="bg-accent text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">
                      Plus Populaire
                    </span>
                  )}
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {coverageOptions?.[activeTab]?.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {coverageOptions?.[activeTab]?.description}
                </p>
                
                <div className="text-2xl font-bold text-primary mb-6">
                  {coverageOptions?.[activeTab]?.price}
                </div>
                
                <Button
                  variant="default"
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="w-full sm:w-auto"
                >
                  Demander ce Devis
                </Button>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-6">
                  Garanties Incluses
                </h4>
                
                <div className="space-y-4">
                  {coverageOptions?.[activeTab]?.features?.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex items-center justify-center w-6 h-6 bg-success/10 rounded-full mt-0.5">
                        <Icon name="Check" size={14} color="var(--color-success)" strokeWidth={3} />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;