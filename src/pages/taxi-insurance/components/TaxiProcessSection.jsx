import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import { Link } from 'react-router-dom';

const TaxiProcessSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  const processSteps = [
    {
      id: 1,
      title: "Demande de Devis",
      duration: "2 minutes",
      icon: "FileText",
      description: "Remplissez notre formulaire en ligne avec les informations de votre taxi",
      details: [
        "Informations sur votre véhicule (marque, modèle, année)",
        "Détails de votre licence de taxi",
        "Historique de conduite et sinistres",
        "Niveau de couverture souhaité"
      ],
      tips: "Ayez votre carte grise et licence de taxi à portée de main pour accélérer le processus."
    },
    {
      id: 2,
      title: "Analyse Personnalisée",
      duration: "30 minutes",
      icon: "Search",
      description: "Nos experts analysent votre profil et préparent une offre sur mesure",
      details: [
        "Évaluation des risques spécifiques à votre zone d'activité",
        "Calcul des tarifs selon votre expérience",
        "Sélection des garanties adaptées à vos besoins",
        "Vérification de la conformité réglementaire"
      ],
      tips: "Notre équipe prend en compte les spécificités de chaque ville marocaine."
    },
    {
      id: 3,
      title: "Proposition Détaillée",
      duration: "Immédiat",
      icon: "Calculator",
      description: "Recevez votre devis détaillé par email avec toutes les options",
      details: [
        "Tarifs pour chaque niveau de couverture",
        "Détail des garanties incluses et optionnelles",
        "Conditions générales et particulières",
        "Options de paiement (mensuel, trimestriel, annuel)"
      ],
      tips: "Comparez les différentes formules pour choisir celle qui vous convient le mieux."
    },
    {
      id: 4,
      title: "Souscription Rapide",
      duration: "15 minutes",
      icon: "PenTool",
      description: "Signez votre contrat en ligne ou en agence selon votre préférence",
      details: [
        "Signature électronique sécurisée",
        "Upload des documents requis",
        "Choix du mode de paiement",
        "Validation finale du contrat"
      ],
      tips: "La signature électronique est légalement reconnue et vous fait gagner du temps."
    },
    {
      id: 5,
      title: "Activation Immédiate",
      duration: "Instantané",
      icon: "Shield",
      description: "Votre couverture est active dès la validation de votre paiement",
      details: [
        "Attestation d\'assurance générée automatiquement",
        "Accès à votre espace client en ligne",
        "Numéros d\'urgence et contacts sinistres",
        "Application mobile pour gérer votre contrat"
      ],
      tips: "Imprimez votre attestation et gardez-la toujours dans votre taxi."
    }
  ];

  const benefits = [
    {
      icon: "Clock",
      title: "Processus Rapide",
      description: "De la demande à l\'activation en moins d\'1 heure"
    },
    {
      icon: "Smartphone",
      title: "100% Digital",
      description: "Tout se fait en ligne, à votre rythme"
    },
    {
      icon: "HeadphonesIcon",
      title: "Support Dédié",
      description: "Accompagnement personnalisé à chaque étape"
    },
    {
      icon: "Shield",
      title: "Sécurisé",
      description: "Données protégées et conformité RGPD"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Route" size={24} className="text-primary" />
            <span className="text-primary font-semibold">Processus Simple</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            5 Étapes pour Être Protégé
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre processus simplifié vous permet d'obtenir votre assurance taxi 
            rapidement et sans complications administratives.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          {/* Steps Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {processSteps?.map((step) => (
              <button
                key={step?.id}
                onClick={() => setActiveStep(step?.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-medium transition-all duration-200 ${
                  activeStep === step?.id
                    ? 'bg-primary text-white shadow-elevated'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${
                  activeStep === step?.id ? 'bg-white/20' : 'bg-white'
                }`}>
                  <Icon 
                    name={step?.icon} 
                    size={16} 
                    className={activeStep === step?.id ? 'text-white' : 'text-primary'} 
                  />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Étape {step?.id}</div>
                  <div className="text-sm opacity-80">{step?.duration}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Content */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-12 shadow-elevated">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Step Details */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-2xl">
                    <Icon name={processSteps?.[activeStep - 1]?.icon} size={28} color="white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {processSteps?.[activeStep - 1]?.title}
                    </h3>
                    <p className="text-primary font-medium">
                      Durée estimée: {processSteps?.[activeStep - 1]?.duration}
                    </p>
                  </div>
                </div>

                <p className="text-lg text-gray-600 mb-8">
                  {processSteps?.[activeStep - 1]?.description}
                </p>

                {/* Step Details */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-800 mb-4">Ce qui est inclus :</h4>
                  <ul className="space-y-3">
                    {processSteps?.[activeStep - 1]?.details?.map((detail, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tip */}
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="flex items-start space-x-3">
                    <Icon name="Lightbulb" size={20} className="text-blue-600 mt-1" />
                    <div>
                      <h5 className="font-semibold text-blue-800 mb-2">Conseil ProAssure</h5>
                      <p className="text-blue-700 text-sm">{processSteps?.[activeStep - 1]?.tips}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Visual Progress */}
              <div className="relative">
                {/* Progress Visualization */}
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  <div 
                    className="absolute left-8 top-0 w-0.5 bg-primary transition-all duration-500"
                    style={{ height: `${(activeStep / processSteps?.length) * 100}%` }}
                  ></div>
                  
                  <div className="space-y-8">
                    {processSteps?.map((step, index) => (
                      <div key={step?.id} className="relative flex items-center space-x-6">
                        <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl transition-all duration-200 ${
                          step?.id <= activeStep 
                            ? 'bg-primary text-white shadow-elevated' 
                            : 'bg-white text-gray-400 border-2 border-gray-200'
                        }`}>
                          {step?.id < activeStep ? (
                            <Icon name="Check" size={24} strokeWidth={3} />
                          ) : step?.id === activeStep ? (
                            <Icon name={step?.icon} size={24} />
                          ) : (
                            <span className="font-bold text-lg">{step?.id}</span>
                          )}
                        </div>
                        <div className={`transition-all duration-200 ${
                          step?.id === activeStep ? 'opacity-100' : 'opacity-60'
                        }`}>
                          <h4 className="font-semibold text-gray-800">{step?.title}</h4>
                          <p className="text-sm text-gray-600">{step?.duration}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Card */}
                <div className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white">
                  <h4 className="font-semibold mb-2">Prêt à Commencer ?</h4>
                  <p className="text-white/90 text-sm mb-4">
                    Lancez votre demande maintenant et soyez protégé en moins d'1 heure
                  </p>
                  <Link
                    to="/quote-request"
                    className="inline-flex items-center space-x-2 bg-accent hover:bg-accent/90 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    <Icon name="ArrowRight" size={18} />
                    <span>Commencer Ma Demande</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits?.map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-card hover:shadow-elevated transition-shadow duration-200">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4">
                <Icon name={benefit?.icon} size={28} className="text-primary" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">{benefit?.title}</h4>
              <p className="text-gray-600 text-sm">{benefit?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TaxiProcessSection;