import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-blue-700 to-secondary overflow-hidden">
      <div className="absolute inset-0 moroccan-pattern opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg backdrop-blur-sm">
                <Icon name="Truck" size={28} color="white" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-medium text-blue-100">Transport Professionnel</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Assurance Transport
              <span className="block text-accent font-accent">Complète & Fiable</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-lg">
              Protection sur mesure pour les transporteurs professionnels au Maroc. 
              Couvrez votre flotte avec l'expertise ProAssure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                variant="default"
                size="lg"
                iconName="Calculator"
                iconPosition="left"
                className="bg-accent hover:bg-accent/90 text-gray-900 font-semibold btn-glow"
                asChild>

                <Link to="/quote-request">Devis Gratuit Transport</Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-primary">

                +212 5XX XX XX XX
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-blue-200">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} />
                <span>Agréé ACAPS</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>Devis en 24h</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} />
                <span>+500 Transporteurs</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-modal">
              <Image
                src="https://images.unsplash.com/photo-1649526479213-34bc325c6cd8"
                alt="Camion de transport professionnel rouge sur autoroute marocaine avec conducteur en uniforme"
                className="w-full h-96 lg:h-[500px] object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-elevated animate-scale-in">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-success/10 rounded-lg">
                  <Icon name="TrendingUp" size={24} color="var(--color-success)" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Client</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;