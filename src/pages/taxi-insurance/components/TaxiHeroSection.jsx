import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TaxiHeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-blue-700 to-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 moroccan-pattern opacity-10"></div>
      
      {/* Hero Content */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white animate-fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Icon name="Taxi" size={28} color="white" strokeWidth={2.5} />
                </div>
                <span className="text-lg font-medium text-white/90">Assurance Taxi Professionnel</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Protection Complète pour 
                <span className="block text-accent font-accent"> Taxis Traditionnels</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
                Assurance spécialisée pour chauffeurs de taxi au Maroc. Couverture adaptée aux réglementations locales avec expertise reconnue depuis 15 ans.
              </p>
              
              {/* Key Benefits */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-accent rounded-full">
                    <Icon name="Shield" size={16} color="white" strokeWidth={2.5} />
                  </div>
                  <span className="text-white/90 font-medium">Couverture 24h/24</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-accent rounded-full">
                    <Icon name="Clock" size={16} color="white" strokeWidth={2.5} />
                  </div>
                  <span className="text-white/90 font-medium">Sinistres rapides</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-accent rounded-full">
                    <Icon name="MapPin" size={16} color="white" strokeWidth={2.5} />
                  </div>
                  <span className="text-white/90 font-medium">Couverture nationale</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-accent rounded-full">
                    <Icon name="Users" size={16} color="white" strokeWidth={2.5} />
                  </div>
                  <span className="text-white/90 font-medium">Support dédié</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Calculator"
                  iconPosition="left"
                  className="bg-accent hover:bg-accent/90 text-gray-800 font-semibold shadow-elevated"
                  asChild>

                  <Link to="/quote-request">Devis Gratuit Immédiat</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Phone"
                  iconPosition="left"
                  className="border-white text-white hover:bg-white hover:text-primary">

                  +212 611 11 22 24
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 mt-8 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">15+</div>
                  <div className="text-sm text-white/80">Années d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">5000+</div>
                  <div className="text-sm text-white/80">Taxis assurés</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">98%</div>
                  <div className="text-sm text-white/80">Satisfaction client</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Image */}
            <div className="relative animate-slide-up">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1708823080833-e5b05955612b"
                  alt="Chauffeur de taxi marocain professionnel souriant à côté de son taxi jaune traditionnel dans une rue de Casablanca"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-modal" />

                
                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-modal animate-scale-in">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-success rounded-lg">
                      <Icon name="TrendingUp" size={24} color="white" strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-800">24h</div>
                      <div className="text-sm text-gray-600">Traitement sinistre</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Certification Badge */}
                <div className="absolute -top-6 -right-6 bg-accent rounded-xl p-4 shadow-modal animate-scale-in">
                  <div className="flex items-center space-x-2">
                    <Icon name="Award" size={20} color="white" strokeWidth={2.5} />
                    <span className="text-white font-semibold text-sm">Certifié ACAPS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TaxiHeroSection;