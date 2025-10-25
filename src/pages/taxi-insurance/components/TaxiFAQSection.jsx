import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TaxiFAQSection = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqCategories = {
    general: {
      title: "Questions Générales",
      icon: "HelpCircle",
      faqs: [
        {
          question: "Quelle est la différence entre l'assurance taxi et l'assurance particulier ?",
          answer: `L'assurance taxi offre une couverture spécialisée pour l'activité de transport rémunéré de personnes. Elle inclut :\n\n• Une responsabilité civile renforcée (minimum 10 millions MAD vs 1 million pour les particuliers)\n• Une protection spécifique des passagers transportés\n• Une couverture des équipements professionnels (compteur, lumineux)\n• Une assistance adaptée aux contraintes professionnelles\n• Des garanties contre la perte d'exploitation\n\nL'assurance particulier ne couvre pas ces risques professionnels et peut même annuler votre contrat si vous utilisez votre véhicule pour du transport rémunéré.`
        },
        {
          question: "Combien coûte une assurance taxi au Maroc ?",
          answer: `Le coût varie selon plusieurs facteurs :\n\n• Formule Essentielle : 2 500 - 3 500 MAD/an\n• Formule Complète : 4 200 - 5 800 MAD/an\n• Formule Premium : 6 800 - 9 200 MAD/an\n\nFacteurs influençant le tarif :\n• Âge et expérience du conducteur\n• Historique de sinistres\n• Zone d'activité (ville)\n• Âge et valeur du véhicule\n• Niveau de couverture choisi\n\nNous proposons des facilités de paiement (mensuel, trimestriel) pour étaler le coût.`
        },
        {
          question: "Puis-je changer d\'assureur en cours d\'année ?",
          answer: `Oui, vous pouvez changer d'assureur dans plusieurs situations :\n\n• À l'échéance annuelle avec préavis de 2 mois\n• En cas d'augmentation de prime (droit de résiliation)\n• Après un sinistre (délai de 30 jours)\n• En cas de changement de situation (vente, modification du véhicule)\n\nNous nous occupons de toutes les démarches :\n• Résiliation de votre ancien contrat\n• Transfert sans interruption de couverture\n• Récupération du reliquat de prime\n• Mise à jour des documents officiels`
        }
      ]
    },
    coverage: {
      title: "Couvertures & Garanties",
      icon: "Shield",
      faqs: [
        {
          question: "Que couvre exactement la protection des passagers ?",
          answer: `Notre garantie passagers couvre tous les occupants de votre taxi :\n\n• Accidents corporels : jusqu'à 500 000 MAD par personne\n• Frais médicaux et hospitalisation\n• Incapacité temporaire ou permanente\n• Décès accidentel\n• Frais de rapatriement si nécessaire\n\nSpécificités importantes :\n• Couverture valable même en cas de faute du conducteur\n• Pas de franchise pour les soins d'urgence\n• Prise en charge directe avec les hôpitaux partenaires\n• Extension possible pour les bagages des passagers`
        },
        {
          question: "Les équipements de taxi sont-ils couverts ?",
          answer: `Oui, nous couvrons tous vos équipements professionnels :\n\n• Compteur homologué : remplacement à neuf\n• Lumineux taxi : réparation ou remplacement\n• Radio professionnelle : jusqu'à 5 000 MAD\n• Extincteur et trousse de secours\n• Système de géolocalisation\n• Sièges et aménagements spéciaux\n\nEn cas de vol ou vandalisme :\n• Indemnisation rapide (48h après expertise)\n• Remplacement par équipements homologués\n• Prise en charge des frais d'installation\n• Véhicule de remplacement pendant les réparations`
        },
        {
          question: "Que se passe-t-il si mon taxi est immobilisé ?",
          answer: `Nous proposons plusieurs solutions d'immobilisation :\n\n• Véhicule de remplacement : selon votre formule (5 à 30 jours)\n• Indemnité journalière : 200 à 500 MAD/jour selon la formule\n• Réparation prioritaire : réseau de garages partenaires\n• Expertise rapide : dans les 24h\n\nConditions d'activation :\n• Sinistre couvert par le contrat\n• Immobilisation supérieure à 48h\n• Véhicule de remplacement aux normes taxi\n• Prise en charge des frais d'assurance du véhicule de remplacement`
        }
      ]
    },
    claims: {
      title: "Sinistres & Assistance",
      icon: "AlertTriangle",
      faqs: [
        {
          question: "Comment déclarer un sinistre rapidement ?",
          answer: `Plusieurs moyens de déclaration 24h/24 :\n\n• Téléphone : +212 5XX XX XX XX (ligne dédiée taxi)\n• Application mobile ProAssure\n• Site web : formulaire en ligne\n• Email : sinistres.taxi@proassure.ma\n• Agences : réseau national\n\nInformations à préparer :\n• Numéro de contrat\n• Date, heure et lieu de l'accident\n• Circonstances détaillées\n• Constat amiable si possible\n• Photos des dégâts\n• Témoignages éventuels\n\nDélai de déclaration : 5 jours ouvrés maximum (24h pour le vol)`
        },
        {
          question: "Combien de temps pour le règlement d\'un sinistre ?",
          answer: `Nos délais de traitement :\n\n• Expertise : dans les 24h après déclaration\n• Devis de réparation : 48h après expertise\n• Accord de prise en charge : 72h maximum\n• Règlement : 5 jours après accord\n• Véhicule de remplacement : immédiat si disponible\n\nSinistres simples (sans tiers) :\n• Traitement accéléré en 24-48h\n• Paiement direct au réparateur\n• Pas d'avance de frais\n\nSinistres complexes :\n• Expertise contradictoire si nécessaire\n• Médiation en cas de désaccord\n• Suivi personnalisé par un gestionnaire dédié`
        },
        {
          question: "L\'assistance dépannage fonctionne-t-elle partout au Maroc ?",
          answer: `Notre réseau d'assistance couvre tout le territoire marocain :\n\n• Grandes villes : intervention en 30 minutes\n• Zones urbaines : intervention en 45 minutes\n• Zones rurales : intervention en 90 minutes maximum\n• Autoroutes : partenariat avec les services officiels\n\nServices d'assistance inclus :\n• Dépannage sur place (batterie, crevaison, panne d'essence)\n• Remorquage vers le garage le plus proche\n• Garde du véhicule si nécessaire\n• Rapatriement du conducteur et des passagers\n• Hébergement d'urgence si panne de nuit\n• Avance de frais en cas de besoin`
        }
      ]
    },
    legal: {
      title: "Aspects Légaux",
      icon: "Scale",
      faqs: [
        {
          question: "Quelles sont les obligations légales pour assurer un taxi ?",
          answer: `Obligations légales au Maroc :\n\n• Responsabilité civile minimum 10 millions MAD\n• Garantie accidents corporels passagers obligatoire\n• Attestation d'assurance valide en permanence\n• Déclaration de l'usage 'taxi' à l'assureur\n• Mise à jour en cas de changement (conducteur, véhicule)\n\nDocuments obligatoires dans le véhicule :\n• Attestation d'assurance originale\n• Carte verte internationale si applicable\n• Constat amiable vierge\n• Numéro d'urgence de l'assureur\n\nSanctions en cas de défaut d'assurance :\n• Amende de 1 200 à 6 000 MAD\n• Immobilisation du véhicule\n• Suspension de la licence de taxi`
        },
        {
          question: "Que faire en cas d\'accident avec un touriste étranger ?",
          answer: `Procédure spéciale pour les accidents avec des étrangers :\n\n• Établir un constat amiable (français/arabe/anglais)\n• Contacter immédiatement notre service sinistres\n• Demander les coordonnées complètes du tiers\n• Prendre photos et témoignages\n• Ne pas reconnaître de responsabilité\n\nNotre assistance spécialisée :\n• Traducteur si nécessaire\n• Liaison avec les assureurs étrangers\n• Suivi du dossier jusqu'au règlement\n• Assistance juridique internationale\n• Gestion des formalités consulaires si besoin\n\nCouverture internationale :\n• Carte verte incluse dans nos formules\n• Assistance rapatriement\n• Défense pénale à l'étranger`
        },
        {
          question: "Puis-je prêter mon taxi à un autre chauffeur ?",
          answer: `Conditions pour prêter votre taxi :\n\n• Le conducteur doit être déclaré à l'assurance\n• Permis de conduire valide et adapté\n• Âge minimum 23 ans, 3 ans de permis\n• Pas de suspension de permis en cours\n• Autorisation écrite du propriétaire\n\nDémarches obligatoires :\n• Déclaration préalable à ProAssure\n• Vérification du profil du conducteur\n• Mise à jour temporaire du contrat\n• Information des autorités si nécessaire\n\nEn cas d'accident avec conducteur non déclaré :\n• Franchise majorée\n• Recours possible de l'assureur\n• Exclusion de certaines garanties\n• Risques de nullité du contrat`
        }
      ]
    }
  };

  const toggleFAQ = (categoryKey, faqIndex) => {
    const faqId = `${categoryKey}-${faqIndex}`;
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="MessageCircle" size={24} className="text-primary" />
            <span className="text-primary font-semibold">Questions Fréquentes</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Tout Savoir sur l'Assurance Taxi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Retrouvez les réponses aux questions les plus posées par les chauffeurs de taxi. 
            Notre expertise à votre service pour clarifier tous vos doutes.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(faqCategories)?.map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-medium transition-all duration-200 ${
                  activeCategory === key
                    ? 'bg-primary text-white shadow-elevated'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-card'
                }`}
              >
                <Icon name={category?.icon} size={18} />
                <span>{category?.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Content */}
        <div className="bg-white rounded-2xl shadow-elevated p-8 lg:p-12">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-xl">
                <Icon name={faqCategories?.[activeCategory]?.icon} size={24} color="white" />
              </div>
              <span>{faqCategories?.[activeCategory]?.title}</span>
            </h3>
          </div>

          <div className="space-y-4">
            {faqCategories?.[activeCategory]?.faqs?.map((faq, index) => {
              const faqId = `${activeCategory}-${index}`;
              const isOpen = openFAQ === faqId;

              return (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(activeCategory, index)}
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                  >
                    <h4 className="font-semibold text-gray-800 pr-4">{faq?.question}</h4>
                    <Icon
                      name={isOpen ? "ChevronUp" : "ChevronDown"}
                      size={20}
                      className="text-gray-500 flex-shrink-0"
                    />
                  </button>
                  <div className={`transition-all duration-300 ease-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    <div className="px-6 py-4 bg-white">
                      <div className="prose prose-sm max-w-none">
                        {faq?.answer?.split('\n')?.map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-gray-700 mb-2 last:mb-0">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Support */}
          <div className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-semibold mb-4">Vous ne trouvez pas votre réponse ?</h4>
                <p className="text-white/90 mb-6">
                  Notre équipe d'experts taxi est disponible pour répondre à toutes vos questions 
                  spécifiques et vous accompagner dans vos démarches.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                    <Icon name="Phone" size={18} />
                    <span>+212 5XX XX XX XX</span>
                  </button>
                  <button className="bg-accent hover:bg-accent/90 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                    <Icon name="MessageSquare" size={18} />
                    <span>Chat en Direct</span>
                  </button>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full mb-4">
                  <Icon name="HeadphonesIcon" size={40} color="white" />
                </div>
                <div className="text-lg font-semibold">Support Spécialisé Taxi</div>
                <div className="text-white/80">Lun-Ven 8h-20h, Sam 9h-17h</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxiFAQSection;