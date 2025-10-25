import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 moroccan-pattern opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <Icon name="Car" size={24} color="white" />
              <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                Assurance VTC Professionnelle
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Protégez Votre Activité VTC avec 
              <span className="block text-accent font-accent">Confiance Totale</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Assurance complète adaptée aux chauffeurs VTC au Maroc. Couverture optimale, 
              tarifs compétitifs et service client dédié pour votre tranquillité d'esprit.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                variant="default"
                size="lg"
                iconName="Calculator"
                iconPosition="left"
                className="bg-accent text-gray-800 hover:bg-accent/90 btn-glow"
                asChild>

                <Link to="/quote-request">Devis Gratuit VTC</Link>
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
            
            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-white/80">
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
                <span>+2500 VTC assurés</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1591027986262-3744fbf7e837"
                alt="Chauffeur VTC professionnel marocain en costume devant une berline noire moderne dans les rues de Casablanca"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-modal" />

              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-modal animate-scale-in">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                    <Icon name="TrendingUp" size={24} color="var(--color-success)" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">98%</div>
                    <div className="text-sm text-gray-600">Satisfaction Client</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;