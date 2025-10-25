import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
  {
    id: 1,
    name: 'Youssef Benali',
    role: 'Chauffeur VTC - Casablanca',
    company: 'VTC Premium Casablanca',
    image: "https://images.unsplash.com/photo-1626544346705-1c0164970c41",
    imageAlt: 'Portrait professionnel d\'un homme marocain en costume sombre souriant, chauffeur VTC expérimenté',
    rating: 5,
    content: `ProAssure a transformé ma façon de voir l'assurance. Après un accident avec un client à bord, ils ont géré toute la procédure en 48h. Le véhicule de remplacement m'a permis de continuer à travailler sans interruption. Service exceptionnel !`,
    date: '2024-09-15',
    verified: true,
    highlight: 'Gestion sinistre en 48h'
  },
  {
    id: 2,
    name: 'Fatima Zahra El Amrani',
    role: 'Chauffeur VTC - Rabat',
    company: 'VTC Royal Rabat',
    image: "https://images.unsplash.com/photo-1657781069753-d211ce9a66e9",
    imageAlt: 'Femme professionnelle marocaine souriante en tailleur bleu marine, chauffeur VTC indépendante',
    rating: 5,
    content: `En tant que femme chauffeur VTC, j'avais des besoins spécifiques. L'équipe ProAssure a su adapter ma couverture avec des garanties personnalisées. Leur accompagnement est remarquable, je recommande vivement !`,
    date: '2024-08-22',
    verified: true,
    highlight: 'Couverture personnalisée'
  },
  {
    id: 3,
    name: 'Ahmed Tazi',
    role: 'Chauffeur VTC - Marrakech',
    company: 'VTC Luxury Marrakech',
    image: "https://images.unsplash.com/photo-1678251597923-357ca6bab005",
    imageAlt: 'Homme marocain d\'âge moyen en chemise blanche souriant, chauffeur VTC expérimenté de Marrakech',
    rating: 5,
    content: `Depuis 3 ans avec ProAssure, jamais déçu. Leurs tarifs sont compétitifs et le service client est réactif. L'application mobile est très pratique pour gérer mes contrats entre deux courses. Une vraie valeur ajoutée !`, date: '2024-10-01',
    verified: true,
    highlight: 'Client fidèle depuis 3 ans'
  },
  {
    id: 4,
    name: 'Khalid Benjelloun', role: 'Chauffeur VTC - Tanger', company: 'VTC Med Tanger', image: "https://images.unsplash.com/photo-1607844320296-a111d69405d0", imageAlt: 'Jeune homme marocain en polo noir souriant devant une voiture, chauffeur VTC moderne de Tanger', rating: 5, content: `ProAssure comprend vraiment les enjeux du métier VTC. Quand j'ai eu un problème avec un client difficile, leur protection juridique m'a été d'un grand secours. Je peux exercer sereinement grâce à eux.`,
    date: '2024-09-30',
    verified: true,
    highlight: 'Protection juridique efficace'
  }];


  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ils Nous Font Confiance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les témoignages authentiques de chauffeurs VTC qui ont choisi ProAssure 
            pour protéger leur activité professionnelle.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-elevated p-8 lg:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
            
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="Quote" size={24} color="var(--color-primary)" />
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonials?.[activeTestimonial]?.rating)]?.map((_, i) =>
                  <Icon key={i} name="Star" size={20} color="var(--color-accent)" className="fill-current" />
                  )}
                </div>

                {/* Content */}
                <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonials?.[activeTestimonial]?.content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">
                      {testimonials?.[activeTestimonial]?.name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials?.[activeTestimonial]?.role}
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {testimonials?.[activeTestimonial]?.company}
                    </div>
                  </div>
                  
                  {testimonials?.[activeTestimonial]?.verified &&
                  <div className="flex items-center space-x-2 text-success">
                      <Icon name="CheckCircle" size={16} />
                      <span className="text-sm font-medium">Témoignage Vérifié</span>
                    </div>
                  }
                </div>

                {/* Highlight */}
                <div className="mt-4 inline-flex items-center space-x-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                  <Icon name="Star" size={14} />
                  <span>{testimonials?.[activeTestimonial]?.highlight}</span>
                </div>
              </div>

              {/* Author Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <Image
                    src={testimonials?.[activeTestimonial]?.image}
                    alt={testimonials?.[activeTestimonial]?.imageAlt}
                    className="w-48 h-48 lg:w-56 lg:h-56 object-cover rounded-2xl shadow-card" />

                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-3 -right-3 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium shadow-card">
                    Client ProAssure
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 bg-white rounded-full shadow-card flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200">

            <Icon name="ChevronLeft" size={20} />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {testimonials?.map((_, index) =>
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === activeTestimonial ?
              'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400'}`
              } />

            )}
          </div>
          
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 bg-white rounded-full shadow-card flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200">

            <Icon name="ChevronRight" size={20} />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2500+</div>
            <div className="text-gray-600">Chauffeurs VTC Assurés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-gray-600">Taux de Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24h</div>
            <div className="text-gray-600">Délai Moyen Devis</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5 ans</div>
            <div className="text-gray-600">Expérience VTC</div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;