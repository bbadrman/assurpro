import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BenefitsSection = () => {
  const benefits = [
  {
    icon: 'Shield',
    title: 'Protection Complète VTC',
    description: 'Couverture spécialement conçue pour les risques liés à l\'activité VTC : transport de passagers, responsabilité professionnelle et protection du véhicule.',
    features: ['RC Professionnelle jusqu\'à 20M MAD', 'Protection conducteur étendue', 'Couverture matériel embarqué']
  },
  {
    icon: 'Clock',
    title: 'Service 24h/7j',
    description: 'Assistance disponible en permanence avec intervention rapide partout au Maroc. Votre activité ne s\'arrête jamais, notre service non plus.',
    features: ['Dépannage express', 'Remorquage gratuit', 'Véhicule de remplacement']
  },
  {
    icon: 'FileText',
    title: 'Conformité Réglementaire',
    description: 'Respect total des exigences légales marocaines pour l\'activité VTC. Nous nous occupons de toutes les formalités administratives.',
    features: ['Attestation ACAPS', 'Déclaration automatique', 'Suivi réglementaire']
  },
  {
    icon: 'TrendingUp',
    title: 'Tarifs Optimisés',
    description: 'Grâce à notre expertise du secteur VTC, nous négocions les meilleurs tarifs avec nos partenaires assureurs pour votre rentabilité.',
    features: ['Tarifs dégressifs', 'Bonus fidélité', 'Paiement fractionné']
  },
  {
    icon: 'Users',
    title: 'Accompagnement Expert',
    description: 'Équipe dédiée aux professionnels VTC avec une connaissance approfondie du métier et des enjeux spécifiques au Maroc.',
    features: ['Conseiller dédié', 'Formation sécurité', 'Support technique']
  },
  {
    icon: 'Smartphone',
    title: 'Gestion Digitale',
    description: 'Application mobile pour gérer vos contrats, déclarer un sinistre et suivre vos dossiers en temps réel, où que vous soyez.',
    features: ['App mobile dédiée', 'Déclaration en ligne', 'Suivi temps réel']
  }];


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Pourquoi Choisir ProAssure pour Votre VTC ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une assurance pensée par et pour les professionnels VTC au Maroc. 
            Découvrez tous les avantages qui font la différence.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits?.map((benefit, index) =>
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">

              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name={benefit?.icon} size={24} color="var(--color-primary)" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit?.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {benefit?.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {benefit?.features?.map((feature, featureIndex) =>
              <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                    <Icon name="Check" size={14} color="var(--color-success)" />
                    <span>{feature}</span>
                  </li>
              )}
              </ul>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Prêt à Protéger Votre Activité VTC ?
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                Rejoignez plus de 2500 chauffeurs VTC qui nous font confiance. 
                Obtenez votre devis personnalisé en moins de 2 minutes.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">2500+</div>
                  <div className="text-sm text-white/80">VTC Assurés</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">24h</div>
                  <div className="text-sm text-white/80">Délai Devis</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">98%</div>
                  <div className="text-sm text-white/80">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1650184959568-299eb55861fe"
                alt="Chauffeur VTC souriant au volant d'une berline moderne avec smartphone montrant l'application ProAssure"
                className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-modal" />

              
              {/* Floating Element */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-modal">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                    <Icon name="CheckCircle" size={20} color="var(--color-success)" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Assuré ProAssure</div>
                    <div className="text-sm text-gray-600">Depuis 2022</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default BenefitsSection;