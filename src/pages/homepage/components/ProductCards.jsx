import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductCards = () => {
  const products = [
    {
      id: 'vtc',
      title: 'Assurance VTC',
      subtitle: 'Véhicule de Transport avec Chauffeur',
      description: 'Protection complète pour votre activité VTC. Responsabilité civile, dommages véhicule, protection juridique et assistance 24h/24.',
      icon: 'Car',
      iconBg: 'bg-blue-500',
      features: [
        'Responsabilité civile professionnelle',
        'Tous risques véhicule',
        'Protection juridique incluse',
        'Assistance panne 24h/24'
      ],
      price: 'À partir de 2 500 MAD/an',
      link: '/vtc-insurance',
      popular: true
    },
    {
      id: 'taxi',
      title: 'Assurance Taxi',
      subtitle: 'Taxi Traditionnel & Grand Taxi',
      description: 'Couverture spécialisée pour taxis urbains et interurbains. Adaptée aux spécificités du transport de personnes au Maroc.',
      icon: 'Taxi',
      iconBg: 'bg-amber-500',
      features: [
        'RC professionnelle obligatoire',
        'Couverture passagers',
        'Défense pénale et recours',
        'Véhicule de remplacement'
      ],
      price: 'À partir de 1 800 MAD/an',
      link: '/taxi-insurance',
      popular: false
    },
    {
      id: 'transport',
      title: 'Transport Professionnel',
      subtitle: 'Marchandises & Voyageurs',
      description: 'Solutions d\'assurance pour transporteurs de marchandises et de voyageurs. Couverture étendue pour votre flotte.',
      icon: 'Truck',
      iconBg: 'bg-green-500',
      features: [
        'Flotte véhicules commerciaux',
        'Marchandises transportées',
        'Responsabilité transporteur',
        'Gestion sinistres dédiée'
      ],
      price: 'À partir de 3 200 MAD/an',
      link: '/transport-insurance',
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choisissez Votre Protection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions d'assurance sur mesure pour chaque type de transport professionnel. 
            Comparez et trouvez la couverture qui correspond à vos besoins.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products?.map((product, index) => (
            <div
              key={product?.id}
              className={`relative bg-white rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-2 animate-slide-up ${
                product?.popular ? 'ring-2 ring-primary' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {product?.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Le plus populaire
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 ${product?.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon name={product?.icon} size={32} className="text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{product?.title}</h3>
                    <p className="text-sm font-medium text-primary mb-3">{product?.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed">{product?.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {product?.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Icon name="Check" size={16} className="text-success mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-lg font-bold text-primary">{product?.price}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Button
                    variant={product?.popular ? "default" : "outline"}
                    fullWidth
                    iconName="ArrowRight"
                    iconPosition="right"
                    asChild
                  >
                    <Link to={product?.link}>Découvrir</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    fullWidth
                    iconName="Calculator"
                    iconPosition="left"
                    asChild
                  >
                    <Link to="/quote-request">Devis Rapide</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Besoin d'aide pour choisir ?
            </h3>
            <p className="text-gray-600 mb-6">
              Nos experts vous accompagnent gratuitement dans le choix de votre assurance professionnelle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                iconName="Phone"
                iconPosition="left"
              >
                Appeler un Expert
              </Button>
              <Button
                variant="outline"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Chat en Direct
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCards;