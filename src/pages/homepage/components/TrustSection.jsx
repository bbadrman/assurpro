import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TrustSection = () => {
  const testimonials = [
  {
    id: 1,
    name: "Ahmed Benali",
    role: "Chauffeur VTC - Casablanca",
    avatar: "https://images.unsplash.com/photo-1733054852918-5d5f32b0b604",
    avatarAlt: "Professional headshot of Moroccan man with short black hair wearing white collared shirt",
    content: "ProAssure m'a sauvé lors d'un accident. Prise en charge rapide, véhicule de remplacement immédiat. Je recommande à tous mes collègues VTC.",
    rating: 5,
    date: "Octobre 2024"
  },
  {
    id: 2,
    name: "Fatima Zahra",
    role: "Propriétaire Taxi - Rabat",
    avatar: "https://images.unsplash.com/photo-1717842800198-2328ae5b2d5c",
    avatarAlt: "Professional headshot of Moroccan woman with hijab wearing navy blue blazer",
    content: "Service client exceptionnel. Ils comprennent vraiment les défis des chauffeurs de taxi. Tarifs compétitifs et couverture complète.",
    rating: 5,
    date: "Septembre 2024"
  },
  {
    id: 3,
    name: "Youssef Alami",
    role: "Transporteur - Marrakech",
    avatar: "https://images.unsplash.com/photo-1585066047759-3438c34cf676",
    avatarAlt: "Professional headshot of middle-aged Moroccan man with beard wearing dark suit",
    content: "Gestion de flotte simplifiée avec ProAssure. Un seul interlocuteur pour tous mes véhicules. Efficacité et professionnalisme.",
    rating: 5,
    date: "Octobre 2024"
  }];


  const certifications = [
  {
    name: "ACAPS",
    description: "Autorité de Contrôle des Assurances",
    icon: "Shield"
  },
  {
    name: "FMSAR",
    description: "Fédération Marocaine des Sociétés d\'Assurances",
    icon: "Award"
  },
  {
    name: "ISO 9001",
    description: "Certification Qualité",
    icon: "CheckCircle"
  }];


  const stats = [
  {
    number: "5000+",
    label: "Conducteurs Assurés",
    icon: "Users"
  },
  {
    number: "98%",
    label: "Satisfaction Client",
    icon: "Heart"
  },
  {
    number: "24h",
    label: "Traitement Sinistre",
    icon: "Clock"
  },
  {
    number: "15+",
    label: "Années d\'Expérience",
    icon: "Calendar"
  }];


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            La Confiance de Milliers de Professionnels
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez pourquoi les professionnels du transport au Maroc font confiance à ProAssure 
            pour leur protection et leur sérénité.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats?.map((stat, index) =>
          <div
            key={index}
            className="text-center animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}>

              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name={stat?.icon} size={32} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat?.number}</div>
              <div className="text-gray-600 font-medium">{stat?.label}</div>
            </div>
          )}
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Ce que disent nos clients
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials?.map((testimonial, index) =>
            <div
              key={testimonial?.id}
              className="bg-muted rounded-2xl p-8 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial?.rating)]?.map((_, i) =>
                <Icon key={i} name="Star" size={16} className="text-accent fill-current" />
                )}
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial?.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <Image
                  src={testimonial?.avatar}
                  alt={testimonial?.avatarAlt}
                  className="w-12 h-12 rounded-full object-cover" />

                  <div>
                    <div className="font-semibold text-gray-900">{testimonial?.name}</div>
                    <div className="text-sm text-gray-600">{testimonial?.role}</div>
                    <div className="text-xs text-gray-500">{testimonial?.date}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-muted rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Agréments & Certifications
            </h3>
            <p className="text-gray-600">
              ProAssure est agréé par les autorités marocaines et certifié pour vous offrir 
              la meilleure protection possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications?.map((cert, index) =>
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}>

                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-card">
                  <Icon name={cert?.icon} size={36} className="text-primary" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{cert?.name}</h4>
                <p className="text-gray-600">{cert?.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default TrustSection;