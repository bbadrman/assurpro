import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-blue-700 to-secondary min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 moroccan-pattern opacity-10"></div>
      
      {/* Content Container */}
      <div className="relative w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-white space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Votre assurance,{' '}
                  <span className="text-accent font-accent">notre route</span>{' '}
                  vers la sérénité
                </h1>
                <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed">
                  Protection complète pour les professionnels du transport au Maroc. 
                  VTC, Taxi, Transporteur - Nous comprenons vos besoins.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-blue-100">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={20} className="text-accent" />
                  <span className="text-sm font-medium">Agréé ACAPS</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={20} className="text-accent" />
                  <span className="text-sm font-medium">Devis en 2 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={20} className="text-accent" />
                  <span className="text-sm font-medium">+5000 conducteurs</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-accent text-gray-900 hover:bg-amber-400 font-semibold px-8 py-4 text-lg btn-glow"
                  iconName="Calculator"
                  iconPosition="left"
                  asChild>

                  <Link to="/quote-request">Devis Gratuit Immédiat</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg"
                  iconName="Phone"
                  iconPosition="left">

                  +212 5XX XX XX XX
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-blue-400/30">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">24h</div>
                  <div className="text-sm text-blue-200">Traitement sinistre</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">98%</div>
                  <div className="text-sm text-blue-200">Satisfaction client</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">15+</div>
                  <div className="text-sm text-blue-200">Années d'expérience</div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative animate-slide-up">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
                <Image
                  src="https://images.unsplash.com/photo-1684575411281-50e3a2e3f27b"
                  alt="Professional Moroccan taxi driver in traditional white shirt standing confidently next to modern silver sedan vehicle in urban Casablanca setting"
                  className="w-full h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-2xl" />

                
                {/* Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-modal animate-scale-in">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                        <Icon name="CheckCircle" size={24} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Protection Garantie</h4>
                      <p className="text-sm text-gray-600">Couverture complète 24h/24, 7j/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white/70" />
      </div>
    </section>);

};

export default HeroSection;