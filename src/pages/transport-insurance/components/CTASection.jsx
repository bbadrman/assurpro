import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const contactMethods = [
  {
    icon: "Phone",
    title: "Appelez-nous",
    description: "Conseil immédiat avec nos experts",
    action: "+212 611 11 22 24",
    color: "text-primary"
  },
  {
    icon: "MessageCircle",
    title: "Chat en Direct",
    description: "Support instantané en ligne",
    action: "Démarrer le Chat",
    color: "text-success"
  },
  {
    icon: "Calendar",
    title: "Rendez-vous",
    description: "Consultation personnalisée",
    action: "Planifier",
    color: "text-accent"
  }];


  const quickLinks = [
  { icon: "FileText", label: "Guide Transport", path: "/resources" },
  { icon: "Calculator", label: "Simulateur", path: "/quote-request" },
  { icon: "Download", label: "Brochure PDF", path: "#" },
  { icon: "Video", label: "Démo Vidéo", path: "#" }];


  return (
    <section className="py-20 bg-gradient-to-br from-primary via-blue-700 to-secondary relative overflow-hidden">
      <div className="absolute inset-0 moroccan-pattern opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Protégez Votre Flotte
              <span className="block text-accent font-accent">Dès Aujourd'hui</span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Rejoignez plus de 500 transporteurs professionnels qui font confiance 
              à ProAssure pour sécuriser leur activité au Maroc.
            </p>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
              { icon: "Shield", text: "Couverture complète adaptée" },
              { icon: "Clock", text: "Devis en moins de 24h" },
              { icon: "Headphones", text: "Support expert 24h/7j" },
              { icon: "TrendingDown", text: "Jusqu'à 25% d'économies" }]?.
              map((benefit, index) =>
              <div key={index} className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-lg">
                    <Icon name={benefit?.icon} size={16} color="white" />
                  </div>
                  <span className="text-blue-100">{benefit?.text}</span>
                </div>
              )}
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                variant="default"
                size="lg"
                iconName="Calculator"
                iconPosition="left"
                className="bg-accent hover:bg-accent/90 text-gray-900 font-semibold btn-glow"
                asChild>

                <Link to="/quote-request">Devis Gratuit Immédiat</Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-primary">

                Guide Transport PDF
              </Button>
            </div>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-3 gap-4">
              {contactMethods?.map((method, index) =>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon name={method?.icon} size={20} color="white" />
                    <span className="font-medium text-white">{method?.title}</span>
                  </div>
                  <p className="text-xs text-blue-200 mb-2">{method?.description}</p>
                  <div className="text-sm font-medium text-accent">{method?.action}</div>
                </div>
              )}
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-modal mb-8">
              <Image
                src="https://images.unsplash.com/photo-1649330883140-02d9b4923e88"
                alt="Équipe de transporteurs professionnels marocains devant leur flotte de camions modernes au coucher du soleil"
                className="w-full h-80 object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon name="CheckCircle" size={20} className="text-success" />
                    <span className="font-semibold text-gray-900">Démarrage Immédiat</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Couverture active dès signature du contrat
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-4">
              {quickLinks?.map((link, index) =>
              <Link
                key={index}
                to={link?.path}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-200 group">

                  <div className="flex items-center space-x-3">
                    <Icon
                    name={link?.icon}
                    size={18}
                    color="white"
                    className="group-hover:scale-110 transition-transform duration-200" />

                    <span className="text-white font-medium">{link?.label}</span>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-blue-200">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} />
                <span className="text-sm">Agréé ACAPS</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} />
                <span className="text-sm">Certifié ISO</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} />
                <span className="text-sm">+500 Clients</span>
              </div>
            </div>
            
            <div className="text-blue-200 text-sm">
              © {new Date()?.getFullYear()} ProAssure - Protection Professionnelle
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default CTASection;