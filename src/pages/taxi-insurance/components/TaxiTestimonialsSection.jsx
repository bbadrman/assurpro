import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TaxiTestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
  {
    id: 1,
    name: "Ahmed Benali",
    role: "Chauffeur de taxi - Casablanca",
    experience: "12 ans d\'expérience",
    image: "https://images.unsplash.com/photo-1696626520392-60f68bb77e7c",
    imageAlt: "Portrait professionnel d'Ahmed Benali, chauffeur de taxi marocain souriant en chemise blanche",
    rating: 5,
    testimonial: `ProAssure m'a sauvé la mise lors d'un accident avec un touriste l'année dernière. Le traitement du sinistre a été rapide et professionnel. En 48h, j'avais un véhicule de remplacement et mon taxi était en réparation. Leur équipe comprend vraiment les besoins des chauffeurs de taxi.`,
    incident: "Collision avec véhicule de tourisme",
    resolution: "Sinistre réglé en 48h",
    highlight: "Véhicule de remplacement immédiat"
  },
  {
    id: 2,
    name: "Fatima Zahra",
    role: "Propriétaire de taxi - Rabat",
    experience: "8 ans d\'expérience",
    image: "https://images.unsplash.com/photo-1657781069753-d211ce9a66e9",
    imageAlt: "Portrait professionnel de Fatima Zahra, propriétaire de taxi souriante portant un hijab bleu",
    rating: 5,
    testimonial: `En tant que femme dans ce métier, j'avais besoin d'une assurance qui me comprenne. ProAssure m'a proposé une couverture adaptée avec une assistance 24h/24. Quand mon taxi a été vandalisé, ils ont tout pris en charge sans discussion. Je recommande vivement leurs services.`,
    incident: "Vandalisme et vol d\'équipements",
    resolution: "Indemnisation complète en 5 jours",
    highlight: "Support dédié aux femmes chauffeurs"
  },
  {
    id: 3,
    name: "Mohamed Alami",
    role: "Chauffeur de taxi - Marrakech",
    experience: "15 ans d\'expérience",
    image: "https://images.unsplash.com/photo-1726082691113-ae0fca3a379c",
    imageAlt: "Portrait professionnel de Mohamed Alami, chauffeur de taxi expérimenté avec barbe grise en polo bleu",
    rating: 5,
    testimonial: `Après 15 ans de métier, j'ai testé plusieurs assurances. ProAssure est de loin la meilleure pour nous les taxis. Leurs tarifs sont justes, leur service client excellent, et ils connaissent parfaitement notre secteur. Mon compteur est tombé en panne, ils l'ont remplacé le jour même.`,
    incident: "Panne compteur homologué",
    resolution: "Remplacement en 24h",
    highlight: "Expertise équipements taxi"
  },
  {
    id: 4,
    name: "Youssef Idrissi",
    role: "Chauffeur de taxi - Fès",
    experience: "6 ans d\'expérience",
    image: "https://images.unsplash.com/photo-1696626520392-60f68bb77e7c",
    imageAlt: "Portrait professionnel de Youssef Idrissi, jeune chauffeur de taxi souriant en veste noire",
    rating: 5,
    testimonial: `ProAssure m'accompagne depuis mes débuts. Leur formule jeune conducteur m'a permis de démarrer avec une couverture complète à un prix abordable. Aujourd'hui, je suis passé en formule premium et je n'ai jamais eu de problème. Service irréprochable !`,
    incident: "Accompagnement jeune conducteur",
    resolution: "Tarif préférentiel maintenu",
    highlight: "Évolution tarifaire progressive"
  }];


  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentTestimonial = testimonials?.[activeTestimonial];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="MessageSquare" size={24} className="text-primary" />
            <span className="text-primary font-semibold">Témoignages Clients</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Ce Que Disent Nos Chauffeurs de Taxi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les expériences réelles de chauffeurs de taxi qui nous font confiance 
            pour protéger leur activité professionnelle.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="bg-white rounded-2xl shadow-elevated p-8 lg:p-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Testimonial Content */}
            <div>
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(currentTestimonial?.rating)]?.map((_, i) =>
                <Icon key={i} name="Star" size={20} className="text-accent fill-current" />
                )}
              </div>

              {/* Quote */}
              <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{currentTestimonial?.testimonial}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative">
                  <Image
                    src={currentTestimonial?.image}
                    alt={currentTestimonial?.imageAlt}
                    className="w-16 h-16 rounded-full object-cover" />

                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <Icon name="Check" size={12} color="white" strokeWidth={3} />
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-lg">{currentTestimonial?.name}</div>
                  <div className="text-gray-600">{currentTestimonial?.role}</div>
                  <div className="text-sm text-gray-500">{currentTestimonial?.experience}</div>
                </div>
              </div>

              {/* Case Details */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-red-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="AlertTriangle" size={16} className="text-red-600" />
                    <span className="text-sm font-medium text-red-800">Incident</span>
                  </div>
                  <p className="text-sm text-red-700">{currentTestimonial?.incident}</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Clock" size={16} className="text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">Résolution</span>
                  </div>
                  <p className="text-sm text-blue-700">{currentTestimonial?.resolution}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Star" size={16} className="text-green-600" />
                    <span className="text-sm font-medium text-green-800">Point Fort</span>
                  </div>
                  <p className="text-sm text-green-700">{currentTestimonial?.highlight}</p>
                </div>
              </div>
            </div>

            {/* Right: Navigation & Stats */}
            <div className="text-center">
              {/* Large Profile Image */}
              <div className="relative inline-block mb-8">
                <Image
                  src={currentTestimonial?.image}
                  alt={currentTestimonial?.imageAlt}
                  className="w-48 h-48 rounded-2xl object-cover shadow-elevated" />

                <div className="absolute -top-4 -right-4 bg-accent rounded-xl p-3 shadow-card">
                  <Icon name="Quote" size={24} color="white" />
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <button
                  onClick={prevTestimonial}
                  className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
                  aria-label="Témoignage précédent">

                  <Icon name="ChevronLeft" size={20} className="text-gray-600" />
                </button>
                
                <div className="flex space-x-2">
                  {testimonials?.map((_, index) =>
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === activeTestimonial ? 'bg-primary' : 'bg-gray-300'}`
                    }
                    aria-label={`Aller au témoignage ${index + 1}`} />

                  )}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
                  aria-label="Témoignage suivant">

                  <Icon name="ChevronRight" size={20} className="text-gray-600" />
                </button>
              </div>

              {/* Trust Stats */}
              <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white">
                <h4 className="font-semibold mb-4">Satisfaction Client</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-accent">98%</div>
                    <div className="text-sm text-white/80">Clients satisfaits</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">24h</div>
                    <div className="text-sm text-white/80">Traitement moyen</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials?.map((testimonial, index) =>
          <button
            key={testimonial?.id}
            onClick={() => setActiveTestimonial(index)}
            className={`text-left p-6 rounded-xl transition-all duration-200 ${
            index === activeTestimonial ?
            'bg-primary text-white shadow-elevated scale-105' :
            'bg-white hover:bg-gray-50 shadow-card hover:shadow-elevated'}`
            }>

              <div className="flex items-center space-x-3 mb-4">
                <Image
                src={testimonial?.image}
                alt={testimonial?.imageAlt}
                className="w-12 h-12 rounded-full object-cover" />

                <div>
                  <div className={`font-semibold ${index === activeTestimonial ? 'text-white' : 'text-gray-800'}`}>
                    {testimonial?.name}
                  </div>
                  <div className={`text-sm ${index === activeTestimonial ? 'text-white/80' : 'text-gray-600'}`}>
                    {testimonial?.role?.split(' - ')?.[1]}
                  </div>
                </div>
              </div>
              <p className={`text-sm line-clamp-3 ${index === activeTestimonial ? 'text-white/90' : 'text-gray-600'}`}>
                {testimonial?.testimonial}
              </p>
            </button>
          )}
        </div>
      </div>
    </section>);

};

export default TaxiTestimonialsSection;