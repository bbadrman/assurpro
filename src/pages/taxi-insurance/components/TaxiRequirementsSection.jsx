import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TaxiRequirementsSection = () => {
  const [activeRequirement, setActiveRequirement] = useState('documents');

  const requirements = {
    documents: {
      title: "Documents Requis",
      icon: "FileText",
      items: [
        {
          name: "Licence de taxi valide",
          description: "Autorisation d\'exploitation délivrée par la commune",
          status: "obligatoire",
          details: "Document principal attestant du droit d\'exercer l\'activité de taxi"
        },
        {
          name: "Carte grise du véhicule",
          description: "Certificat d'immatriculation à jour",
          status: "obligatoire",
          details: "Doit mentionner l\'usage \'taxi\' ou \'transport public'"
        },
        {
          name: "Permis de conduire professionnel",
          description: "Permis catégorie B avec mention transport public",
          status: "obligatoire",
          details: "Validité minimum 3 ans pour l\'activité taxi"
        },
        {
          name: "Certificat médical",
          description: "Aptitude physique à la conduite professionnelle",
          status: "obligatoire",
          details: "Renouvelable tous les 5 ans, délivré par médecin agréé"
        },
        {
          name: "Casier judiciaire",
          description: "Bulletin n°3 vierge de moins de 3 mois",
          status: "obligatoire",
          details: "Attestation de bonne moralité pour transport de personnes"
        }
      ]
    },
    vehicle: {
      title: "Exigences Véhicule",
      icon: "Car",
      items: [
        {
          name: "Âge maximum du véhicule",
          description: "10 ans maximum pour mise en service taxi",
          status: "critique",
          details: "Contrôle strict lors du renouvellement de licence"
        },
        {
          name: "Contrôle technique",
          description: "Visite technique tous les 6 mois",
          status: "obligatoire",
          details: "Contrôle renforcé pour véhicules de transport public"
        },
        {
          name: "Équipements obligatoires",
          description: "Compteur homologué, lumineux, extincteur",
          status: "obligatoire",
          details: "Vérification lors des contrôles de police et renouvellement"
        },
        {
          name: "Couleur et signalétique",
          description: "Respect du code couleur local (généralement jaune)",
          status: "obligatoire",
          details: "Signalétique conforme aux normes communales"
        },
        {
          name: "État général",
          description: "Véhicule en parfait état de fonctionnement",
          status: "obligatoire",
          details: "Carrosserie, mécanique et intérieur impeccables"
        }
      ]
    },
    insurance: {
      title: "Obligations Assurance",
      icon: "Shield",
      items: [
        {
          name: "Responsabilité civile renforcée",
          description: "Couverture minimum 10 millions MAD",
          status: "obligatoire",
          details: "Montant supérieur aux véhicules particuliers"
        },
        {
          name: "Protection des passagers",
          description: "Garantie accidents corporels passagers",
          status: "obligatoire",
          details: "Couverture spécifique transport rémunéré de personnes"
        },
        {
          name: "Défense et recours",
          description: "Assistance juridique en cas de litige",
          status: "recommandé",
          details: "Protection contre les réclamations passagers"
        },
        {
          name: "Vol et incendie",
          description: "Protection du véhicule et équipements",
          status: "recommandé",
          details: "Couverture outil de travail indispensable"
        },
        {
          name: "Perte d\'exploitation",
          description: "Indemnisation arrêt d\'activité",
          status: "optionnel",
          details: "Compensation perte de revenus en cas de sinistre"
        }
      ]
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'obligatoire':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'critique':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'recommandé':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'optionnel':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'obligatoire': case'critique':
        return 'AlertTriangle';
      case 'recommandé':
        return 'Info';
      case 'optionnel':
        return 'CheckCircle';
      default:
        return 'Info';
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="ClipboardList" size={24} className="text-primary" />
            <span className="text-primary font-semibold">Réglementation Taxi</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Exigences Légales et Administratives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guide complet des obligations légales pour exercer l'activité de taxi au Maroc. Assurez-vous d'être en conformité totale.
          </p>
        </div>

        {/* Requirements Navigation */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2 bg-gray-100 rounded-xl p-2 max-w-2xl mx-auto">
            {Object.entries(requirements)?.map(([key, requirement]) => (
              <button
                key={key}
                onClick={() => setActiveRequirement(key)}
                className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeRequirement === key
                    ? 'bg-white text-primary shadow-card'
                    : 'text-gray-600 hover:text-primary hover:bg-white/50'
                }`}
              >
                <Icon name={requirement?.icon} size={18} />
                <span className="hidden sm:inline">{requirement?.title}</span>
                <span className="sm:hidden">{requirement?.title?.split(' ')?.[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Requirements Content */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-xl">
                <Icon name={requirements?.[activeRequirement]?.icon} size={24} color="white" />
              </div>
              <span>{requirements?.[activeRequirement]?.title}</span>
            </h3>
          </div>

          {/* Requirements List */}
          <div className="grid gap-6">
            {requirements?.[activeRequirement]?.items?.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-semibold text-gray-800">{item?.name}</h4>
                      <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(item?.status)}`}>
                        <Icon name={getStatusIcon(item?.status)} size={12} />
                        <span className="capitalize">{item?.status}</span>
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{item?.description}</p>
                    <p className="text-sm text-gray-500">{item?.details}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Icon name="Clock" size={14} />
                    <span>Mis à jour le 24/10/2025</span>
                  </div>
                  <button className="flex items-center space-x-2 text-primary hover:text-primary/80 text-sm font-medium">
                    <Icon name="ExternalLink" size={14} />
                    <span>Plus d'infos</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Help Section */}
          <div className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-semibold mb-4">Besoin d'Aide avec les Démarches ?</h4>
                <p className="text-white/90 mb-6">
                  Notre équipe d'experts vous accompagne dans toutes vos démarches administratives 
                  et vous aide à constituer votre dossier complet.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                    <Icon name="Phone" size={18} />
                    <span>Appeler un Expert</span>
                  </button>
                  <button className="bg-accent hover:bg-accent/90 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                    <Icon name="Download" size={18} />
                    <span>Guide PDF</span>
                  </button>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full mb-4">
                  <Icon name="HeadphonesIcon" size={40} color="white" />
                </div>
                <div className="text-2xl font-bold">+212 611 11 22 24</div>
                <div className="text-white/80">Support dédié taxi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxiRequirementsSection;