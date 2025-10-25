import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TaxiCoverageSection = () => {
  const [activeTab, setActiveTab] = useState('essential');

  const coverageOptions = {
    essential: {
      title: "Couverture Essentielle",
      price: "À partir de 2 500 MAD/an",
      description: "Protection de base conforme aux exigences légales pour taxis",
      features: [
        { icon: "Shield", text: "Responsabilité civile obligatoire", included: true },
        { icon: "Car", text: "Dommages collision tiers", included: true },
        { icon: "Users", text: "Protection passagers", included: true },
        { icon: "FileText", text: "Assistance juridique de base", included: true },
        { icon: "Wrench", text: "Dépannage 24h/24", included: false },
        { icon: "Umbrella", text: "Vol et incendie", included: false },
        { icon: "Heart", text: "Garantie personnelle du conducteur", included: false },
        { icon: "Truck", text: "Véhicule de remplacement", included: false }
      ]
    },
    complete: {
      title: "Couverture Complète",
      price: "À partir de 4 200 MAD/an",
      description: "Protection étendue pour chauffeurs professionnels exigeants",
      features: [
        { icon: "Shield", text: "Responsabilité civile renforcée", included: true },
        { icon: "Car", text: "Tous risques collision", included: true },
        { icon: "Users", text: "Protection passagers étendue", included: true },
        { icon: "FileText", text: "Assistance juridique complète", included: true },
        { icon: "Wrench", text: "Dépannage et remorquage", included: true },
        { icon: "Umbrella", text: "Vol, incendie, catastrophes", included: true },
        { icon: "Heart", text: "Garantie personnelle du conducteur", included: true },
        { icon: "Truck", text: "Véhicule de remplacement 15 jours", included: false }
      ]
    },
    premium: {
      title: "Couverture Premium",
      price: "À partir de 6 800 MAD/an",
      description: "Protection maximale avec services exclusifs",
      features: [
        { icon: "Shield", text: "Responsabilité civile illimitée", included: true },
        { icon: "Car", text: "Tous risques + valeur à neuf", included: true },
        { icon: "Users", text: "Protection passagers premium", included: true },
        { icon: "FileText", text: "Assistance juridique premium", included: true },
        { icon: "Wrench", text: "Dépannage prioritaire 24h/24", included: true },
        { icon: "Umbrella", text: "Toutes catastrophes + vandalisme", included: true },
        { icon: "Heart", text: "Garantie personnelle étendue", included: true },
        { icon: "Truck", text: "Véhicule de remplacement 30 jours", included: true }
      ]
    }
  };

  const tabs = [
    { id: 'essential', label: 'Essentielle', icon: 'Shield' },
    { id: 'complete', label: 'Complète', icon: 'Star' },
    { id: 'premium', label: 'Premium', icon: 'Crown' }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Taxi" size={24} className="text-primary" />
            <span className="text-primary font-semibold">Formules d'Assurance</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Choisissez Votre Protection Taxi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trois niveaux de couverture adaptés à vos besoins et votre budget. 
            Toutes nos formules respectent la réglementation marocaine des taxis.
          </p>
        </div>

        {/* Coverage Tabs */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2 bg-white rounded-xl p-2 shadow-card max-w-md mx-auto">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
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

        {/* Coverage Details */}
        <div className="bg-white rounded-2xl shadow-elevated p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Coverage Info */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                  {coverageOptions?.[activeTab]?.title}
                </h3>
                <div className="text-3xl font-bold text-primary mb-4">
                  {coverageOptions?.[activeTab]?.price}
                </div>
                <p className="text-gray-600 text-lg">
                  {coverageOptions?.[activeTab]?.description}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Points Clés :</h4>
                <div className="grid gap-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-success" />
                    <span className="text-gray-700">Conforme réglementation taxi marocaine</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-success" />
                    <span className="text-gray-700">Traitement sinistre en 24h maximum</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-success" />
                    <span className="text-gray-700">Réseau de garages agréés national</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-success" />
                    <span className="text-gray-700">Support client dédié aux professionnels</span>
                  </div>
                </div>
              </div>

              {/* Special Taxi Features */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                  <Icon name="Info" size={18} className="text-primary" />
                  <span>Spécificités Taxi</span>
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Couverture équipements taxi (compteur, lumineux)</li>
                  <li>• Protection contre perte d'exploitation</li>
                  <li>• Assistance administrative pour renouvellement licence</li>
                  <li>• Formation sécurité routière incluse</li>
                </ul>
              </div>
            </div>

            {/* Right: Features List */}
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-6">Garanties Incluses</h4>
              <div className="space-y-4">
                {coverageOptions?.[activeTab]?.features?.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-200 ${
                      feature?.included
                        ? 'border-success bg-green-50' :'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${
                        feature?.included ? 'bg-success' : 'bg-gray-400'
                      }`}>
                        <Icon name={feature?.icon} size={16} color="white" />
                      </div>
                      <span className={`font-medium ${
                        feature?.included ? 'text-gray-800' : 'text-gray-500'
                      }`}>
                        {feature?.text}
                      </span>
                    </div>
                    <Icon
                      name={feature?.included ? "Check" : "X"}
                      size={20}
                      className={feature?.included ? 'text-success' : 'text-gray-400'}
                    />
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 p-6 bg-gradient-to-r from-primary to-secondary rounded-xl text-white">
                <h4 className="font-semibold mb-2">Prêt à vous protéger ?</h4>
                <p className="text-white/90 text-sm mb-4">
                  Obtenez votre devis personnalisé en 2 minutes
                </p>
                <button className="w-full bg-accent hover:bg-accent/90 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                  <Icon name="Calculator" size={18} />
                  <span>Calculer Mon Devis</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxiCoverageSection;