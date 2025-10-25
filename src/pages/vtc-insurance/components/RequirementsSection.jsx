import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const RequirementsSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const requirements = [
    {
      title: 'Documents Personnels',
      icon: 'User',
      description: 'Pièces d\'identité et informations personnelles requises',
      items: [
        { name: 'Carte d\'identité nationale (CIN)', required: true, description: 'En cours de validité' },
        { name: 'Permis de conduire', required: true, description: 'Catégorie B minimum, ancienneté 3 ans' },
        { name: 'Casier judiciaire', required: true, description: 'Bulletin n°3 de moins de 3 mois' },
        { name: 'Certificat médical', required: true, description: 'Aptitude à la conduite professionnelle' },
        { name: 'Photo d\'identité', required: true, description: 'Format officiel récent' }
      ]
    },
    {
      title: 'Véhicule et Équipements',
      icon: 'Car',
      description: 'Spécifications techniques et équipements obligatoires',
      items: [
        { name: 'Carte grise du véhicule', required: true, description: 'À votre nom ou contrat de location' },
        { name: 'Contrôle technique', required: true, description: 'Valide et à jour' },
        { name: 'Âge du véhicule', required: true, description: 'Maximum 7 ans pour VTC' },
        { name: 'Équipements de sécurité', required: true, description: 'Extincteur, trousse de secours, gilets' },
        { name: 'Terminal de paiement', required: false, description: 'Recommandé pour les paiements CB' }
      ]
    },
    {
      title: 'Autorisations Professionnelles',
      icon: 'FileText',
      description: 'Licences et autorisations pour exercer l\'activité VTC',
      items: [
        { name: 'Autorisation VTC', required: true, description: 'Délivrée par la région' },
        { name: 'Inscription au registre', required: true, description: 'Registre des transporteurs VTC' },
        { name: 'Assurance responsabilité civile', required: true, description: 'Couverture professionnelle obligatoire' },
        { name: 'Formation initiale', required: true, description: 'Certificat de formation VTC' },
        { name: 'Visite médicale', required: true, description: 'Aptitude professionnelle renouvelable' }
      ]
    },
    {
      title: 'Documents Financiers',
      icon: 'CreditCard',
      description: 'Justificatifs financiers et bancaires nécessaires',
      items: [
        { name: 'RIB bancaire', required: true, description: 'Compte professionnel recommandé' },
        { name: 'Justificatifs de revenus', required: true, description: '3 derniers mois d\'activité' },
        { name: 'Déclaration fiscale', required: true, description: 'Dernière déclaration disponible' },
        { name: 'Attestation comptable', required: false, description: 'Si activité en société' },
        { name: 'Garantie financière', required: true, description: 'Selon le type d\'autorisation' }
      ]
    }
  ];

  const processSteps = [
    {
      title: 'Préparation Documents',
      description: 'Rassemblez tous les documents requis selon votre situation',
      duration: '1-2 jours',
      icon: 'FileText'
    },
    {
      title: 'Demande en Ligne',
      description: 'Remplissez le formulaire et téléchargez vos documents',
      duration: '15 minutes',
      icon: 'Upload'
    },
    {
      title: 'Vérification',
      description: 'Notre équipe vérifie votre dossier et vous contacte si besoin',
      duration: '24-48h',
      icon: 'Search'
    },
    {
      title: 'Validation',
      description: 'Réception de votre contrat et attestation d\'assurance',
      duration: '24h',
      icon: 'CheckCircle'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Exigences et Processus VTC
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez tous les documents requis pour exercer légalement l'activité VTC au Maroc 
            et notre processus simplifié pour votre assurance.
          </p>
        </div>

        {/* Requirements Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {requirements?.map((req, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeStep === index
                    ? 'bg-primary text-white shadow-card'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon name={req?.icon} size={18} />
                <span className="hidden sm:inline">{req?.title}</span>
              </button>
            ))}
          </div>

          {/* Active Requirement Details */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-muted rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={requirements?.[activeStep]?.icon} size={32} color="var(--color-primary)" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {requirements?.[activeStep]?.title}
                </h3>
                <p className="text-gray-600">
                  {requirements?.[activeStep]?.description}
                </p>
              </div>

              <div className="grid gap-4">
                {requirements?.[activeStep]?.items?.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 flex items-start space-x-4">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0 ${
                      item?.required 
                        ? 'bg-error/10 text-error' :'bg-warning/10 text-warning'
                    }`}>
                      <Icon 
                        name={item?.required ? "AlertCircle" : "Info"} 
                        size={14} 
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium text-gray-900">{item?.name}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          item?.required 
                            ? 'bg-error/10 text-error' :'bg-warning/10 text-warning'
                        }`}>
                          {item?.required ? 'Obligatoire' : 'Optionnel'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{item?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Processus de Souscription Simplifié
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps?.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < processSteps?.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 z-0">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                )}
                
                <div className="relative z-10 bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-primary transition-colors duration-200">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={step?.icon} size={24} color="var(--color-primary)" />
                  </div>
                  
                  {/* Content */}
                  <h4 className="font-semibold text-gray-900 mb-2">{step?.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{step?.description}</p>
                  <div className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full inline-block">
                    {step?.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à Commencer Votre Démarche ?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Notre équipe d'experts vous accompagne à chaque étape pour simplifier 
              vos démarches et vous faire gagner du temps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Icon name="Download" size={18} />
                <span>Télécharger la Checklist</span>
              </button>
              <button className="bg-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/30 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Icon name="Phone" size={18} />
                <span>Parler à un Expert</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;