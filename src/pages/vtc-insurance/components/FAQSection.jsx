import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      category: 'Généralités VTC',
      questions: [
        {
          question: 'Quelle est la différence entre l\'assurance VTC et l\'assurance auto classique ?',
          answer: `L'assurance VTC est spécialement conçue pour couvrir les risques liés au transport de passagers contre rémunération. Elle inclut :\n\n• Une responsabilité civile professionnelle renforcée\n• Une protection conducteur adaptée à l'usage intensif\n• Une couverture des équipements professionnels (terminal de paiement, GPS, etc.)\n• Des garanties spécifiques comme le véhicule de remplacement\n\nL'assurance auto classique ne couvre pas ces risques professionnels et peut même annuler votre contrat si vous exercez une activité VTC sans le déclarer.`
        },
        {
          question: 'Combien coûte une assurance VTC au Maroc ?',answer: `Le coût d'une assurance VTC dépend de plusieurs facteurs :\n\n• Votre profil (âge, expérience, historique sinistres)\n• Le véhicule (marque, modèle, valeur, âge)\n• La zone géographique d'activité\n• Le niveau de couverture choisi\n\nChez ProAssure, nos tarifs VTC commencent à partir de 2,850 MAD/an pour une couverture essentielle et peuvent aller jusqu'à 5,800 MAD/an pour notre formule Excellence. Nous proposons également des tarifs dégressifs pour les flottes.`
        },
        {
          question: 'Puis-je utiliser mon véhicule personnel pour faire du VTC ?',
          answer: `Oui, mais sous certaines conditions strictes :\n\n• Vous devez déclarer l'usage professionnel à votre assureur\n• Souscrire une assurance VTC ou un avenant professionnel\n• Respecter les critères techniques (âge du véhicule, équipements)\n• Obtenir l'autorisation VTC auprès des autorités compétentes\n\nAttention : utiliser votre véhicule pour du VTC sans assurance adaptée peut entraîner l'annulation de votre contrat et vous exposer à de lourdes sanctions financières et pénales.`
        }
      ]
    },
    {
      category: 'Couvertures et Garanties',
      questions: [
        {
          question: 'Que couvre exactement la responsabilité civile professionnelle VTC ?',
          answer: `La RC professionnelle VTC couvre les dommages que vous pourriez causer à vos passagers et aux tiers dans le cadre de votre activité :\n\n• Dommages corporels aux passagers transportés\n• Dommages matériels causés aux biens des passagers\n• Dommages causés aux tiers (autres véhicules, piétons, biens)\n• Frais médicaux et d'hospitalisation\n• Préjudices moraux et esthétiques\n\nNotre couverture va jusqu'à 20M MAD, soit le double de la plupart des assureurs traditionnels, pour une protection maximale de votre activité.`
        },
        {
          question: 'Le véhicule de remplacement est-il vraiment nécessaire ?',answer: `Absolument ! Pour un chauffeur VTC, le véhicule est l'outil de travail principal. En cas de sinistre, d'accident ou de panne :\n\n• Vous perdez immédiatement vos revenus\n• Vos clients réguliers peuvent se tourner vers la concurrence\n• Les réparations peuvent prendre plusieurs semaines\n\nNotre garantie véhicule de remplacement vous fournit un véhicule adapté à l'activité VTC (berline récente, assurée pour le transport de passagers) dans les 24h suivant la déclaration de sinistre, pour une durée pouvant aller jusqu'à 60 jours selon votre formule.`
        },
        {
          question: 'La protection juridique est-elle utile pour un chauffeur VTC ?',answer: `La protection juridique est essentielle dans le métier VTC car vous pouvez faire face à diverses situations conflictuelles :\n\n• Litiges avec des passagers (refus de paiement, dégradations)\n• Contestations d'amendes ou de sanctions administratives\n• Conflits avec les plateformes de réservation\n• Problèmes liés au stationnement ou aux zones de prise en charge\n• Défense en cas d'accident avec mise en cause de votre responsabilité\n\nNotre protection juridique inclut l'assistance d'avocats spécialisés dans le transport et prend en charge les frais de procédure jusqu'à 50,000 MAD par sinistre.`
        }
      ]
    },
    {
      category: 'Souscription et Gestion',
      questions: [
        {
          question: 'Combien de temps faut-il pour obtenir mon attestation d\'assurance ?',
          answer: `Notre processus de souscription est optimisé pour les professionnels VTC :\n\n• Devis en ligne : 2 minutes\n• Étude de votre dossier : 24-48h maximum\n• Émission du contrat : dans la journée après validation\n• Attestation d'assurance : envoyée immédiatement par email et courrier\n\nEn cas d'urgence (véhicule à récupérer, contrôle imminent), nous pouvons émettre une attestation provisoire dans les 2 heures ouvrées après réception de votre dossier complet et du règlement.`
        },
        {
          question: 'Puis-je modifier mon contrat en cours d\'année ?',
          answer: `Oui, votre contrat VTC peut être adapté à l'évolution de votre activité :\n\n• Changement de véhicule : modification immédiate possible\n• Ajout de garanties : prise d'effet au prochain terme mensuel\n• Extension de zone géographique : sur simple demande\n• Passage en flotte : conditions préférentielles\n\nToutes les modifications sont gérées via votre espace client en ligne ou par votre conseiller dédié. Les ajustements de prime sont calculés au prorata temporis.`
        },
        {
          question: 'Comment déclarer un sinistre rapidement ?',
          answer: `Plusieurs moyens sont à votre disposition 24h/7j :\n\n• Application mobile ProAssure : déclaration en 3 clics avec photos\n• Espace client web : formulaire détaillé avec suivi en temps réel\n• Téléphone : +212 5XX XX XX XX (ligne dédiée VTC)\n• Email : sinistres-vtc@proassure.ma\n\nNotre équipe sinistres VTC vous recontacte dans les 2h et un expert peut se déplacer dans les 24h partout au Maroc. Le véhicule de remplacement est organisé en parallèle pour minimiser l'interruption de votre activité.`
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const faqIndex = categoryIndex * 1000 + questionIndex;
    setOpenFAQ(openFAQ === faqIndex ? -1 : faqIndex);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Questions Fréquentes VTC
          </h2>
          <p className="text-xl text-gray-600">
            Toutes les réponses aux questions que se posent les chauffeurs VTC 
            sur l'assurance professionnelle au Maroc.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqs?.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-muted rounded-2xl p-6">
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="HelpCircle" size={20} color="var(--color-primary)" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {category?.category}
                </h3>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {category?.questions?.map((faq, questionIndex) => {
                  const faqIndex = categoryIndex * 1000 + questionIndex;
                  const isOpen = openFAQ === faqIndex;

                  return (
                    <div key={questionIndex} className="bg-white rounded-xl overflow-hidden shadow-card">
                      {/* Question */}
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                      >
                        <span className="font-medium text-gray-900 pr-4">
                          {faq?.question}
                        </span>
                        <Icon 
                          name={isOpen ? "ChevronUp" : "ChevronDown"} 
                          size={20} 
                          className="text-gray-500 flex-shrink-0"
                        />
                      </button>
                      {/* Answer */}
                      <div className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="px-6 pb-4 border-t border-gray-100">
                          <div className="pt-4 text-gray-700 leading-relaxed whitespace-pre-line">
                            {faq?.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <Icon name="MessageCircle" size={48} color="white" className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Une Question Spécifique ?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Nos experts VTC sont là pour répondre à toutes vos questions personnalisées. 
              Contactez-nous pour un conseil adapté à votre situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Icon name="Phone" size={18} />
                <span>+212 5XX XX XX XX</span>
              </button>
              <button className="bg-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/30 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Icon name="Mail" size={18} />
                <span>contact@proassure.ma</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;