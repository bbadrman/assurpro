import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
  {
    id: 1,
    name: "Ahmed Benali",
    company: "Transport Maghreb Express",
    role: "Directeur Général",
    fleetSize: "12 véhicules",
    avatar: "https://images.unsplash.com/photo-1725783553190-b65986a99f6e",
    avatarAlt: "Portrait professionnel d'Ahmed Benali, homme d'affaires marocain en costume bleu marine souriant",
    rating: 5,
    testimonial: `ProAssure a transformé notre gestion d'assurance flotte. Leur plateforme digitale nous fait gagner un temps précieux et leur réactivité en cas de sinistre est exceptionnelle. En 18 mois, nous avons réduit nos coûts de 20% tout en améliorant notre couverture.`,
    highlight: "Réduction de 20% des coûts",
    industry: "Transport de marchandises",
    location: "Casablanca"
  },
  {
    id: 2,
    name: "Fatima Zahra El Idrissi",
    company: "Logistique Atlas SARL",
    role: "Responsable Flotte",
    fleetSize: "8 véhicules",
    avatar: "https://images.unsplash.com/photo-1649768524366-a93840e4c501",
    avatarAlt: "Portrait professionnel de Fatima Zahra El Idrissi, femme d'affaires marocaine en blazer noir souriant avec confiance",
    rating: 5,
    testimonial: `L'expertise de ProAssure dans le transport alimentaire nous a convaincus. Ils comprennent parfaitement nos contraintes de chaîne du froid. Quand notre camion frigorifique est tombé en panne, ils ont géré l'indemnisation des marchandises en 48h.`,
    highlight: "Indemnisation en 48h", industry: "Transport alimentaire", location: "Rabat"
  },
  {
    id: 3,
    name: "Youssef Amrani", company: "BTP Transport Pro", role: "Gérant", fleetSize: "15 véhicules", avatar: "https://images.unsplash.com/photo-1688841747582-41097036109d", avatarAlt: "Portrait professionnel de Youssef Amrani, entrepreneur marocain en chemise blanche sur chantier avec casque de sécurité",
    rating: 5,
    testimonial: `Après 3 sinistres majeurs cette année, je peux témoigner de l'efficacité de ProAssure. Leur accompagnement va au-delà de l'assurance : ils nous conseillent sur la prévention et la formation de nos chauffeurs. Un vrai partenaire business.`,
    highlight: "Accompagnement complet", industry: "Transport BTP", location: "Marrakech"
  },
  {
    id: 4,
    name: "Rachid Benjelloun", company: "Transport Tanger Nord", role: "Directeur Opérations", fleetSize: "25 véhicules", avatar: "https://images.unsplash.com/photo-1705169694902-f7739c1e43df", avatarAlt: "Portrait professionnel de Rachid Benjelloun, directeur d'entreprise marocain en costume gris avec cravate bleue",
    rating: 5,
    testimonial: `La transition vers ProAssure a été un tournant pour notre entreprise. Leur tableau de bord flotte nous donne une visibilité complète sur nos risques. Les économies réalisées nous ont permis d'investir dans 3 nouveaux véhicules.`,
    highlight: "Investissement facilité",
    industry: "Transport international",
    location: "Tanger"
  }];


  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentTestimonial = testimonials?.[activeTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Témoignages Transporteurs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment ProAssure accompagne les professionnels du transport 
            au Maroc dans la protection et la croissance de leur activité.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-elevated p-8 lg:p-12 animate-fade-in">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Avatar & Info */}
              <div className="text-center lg:text-left">
                <div className="relative inline-block mb-4">
                  <Image
                    src={currentTestimonial?.avatar}
                    alt={currentTestimonial?.avatarAlt}
                    className="w-24 h-24 rounded-full object-cover mx-auto lg:mx-0" />

                  <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-2">
                    <Icon name="Quote" size={16} color="white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {currentTestimonial?.name}
                </h3>
                <p className="text-primary font-medium mb-1">
                  {currentTestimonial?.role}
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  {currentTestimonial?.company}
                </p>
                
                <div className="flex items-center justify-center lg:justify-start space-x-1 mb-3">
                  {[...Array(currentTestimonial?.rating)]?.map((_, i) =>
                  <Icon key={i} name="Star" size={16} className="text-accent fill-current" />
                  )}
                </div>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <Icon name="Truck" size={14} />
                    <span>{currentTestimonial?.fleetSize}</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <Icon name="MapPin" size={14} />
                    <span>{currentTestimonial?.location}</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <Icon name="Building" size={14} />
                    <span>{currentTestimonial?.industry}</span>
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                  "{currentTestimonial?.testimonial}"
                </blockquote>
                
                <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="TrendingUp" size={20} className="text-accent" />
                    <span className="font-semibold text-gray-900">
                      Résultat Clé: {currentTestimonial?.highlight}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-card hover:shadow-elevated transition-all duration-200 hover:bg-gray-50"
              aria-label="Témoignage précédent">

              <Icon name="ChevronLeft" size={20} className="text-gray-600" />
            </button>

            <div className="flex space-x-2">
              {testimonials?.map((_, index) =>
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === activeTestimonial ?
                'bg-primary' : 'bg-gray-300 hover:bg-gray-400'}`
                }
                aria-label={`Aller au témoignage ${index + 1}`} />

              )}
            </div>

            <button
              onClick={nextTestimonial}
              className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-card hover:shadow-elevated transition-all duration-200 hover:bg-gray-50"
              aria-label="Témoignage suivant">

              <Icon name="ChevronRight" size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {[
          {
            number: "500+",
            label: "Transporteurs Assurés",
            icon: "Users",
            description: "Professionnels nous font confiance"
          },
          {
            number: "2,500+",
            label: "Véhicules Couverts",
            icon: "Truck",
            description: "Flotte totale sous protection"
          },
          {
            number: "98%",
            label: "Satisfaction Client",
            icon: "Heart",
            description: "Taux de recommandation"
          },
          {
            number: "24h",
            label: "Délai Moyen Devis",
            icon: "Clock",
            description: "Réactivité garantie"
          }]?.
          map((stat, index) =>
          <div key={index} className="bg-white rounded-xl p-6 shadow-card text-center hover:shadow-elevated transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4">
                <Icon name={stat?.icon} size={24} className="text-primary" />
              </div>
              
              <div className="text-3xl font-bold text-primary mb-2">
                {stat?.number}
              </div>
              
              <div className="font-semibold text-gray-900 mb-1">
                {stat?.label}
              </div>
              
              <div className="text-sm text-muted-foreground">
                {stat?.description}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;