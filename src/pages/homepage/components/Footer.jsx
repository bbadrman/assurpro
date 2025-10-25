import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: 'Nos Assurances',
      links: [
        { name: 'Assurance VTC', path: '/vtc-insurance' },
        { name: 'Assurance Taxi', path: '/taxi-insurance' },
        { name: 'Transport Professionnel', path: '/transport-insurance' },
        { name: 'Devis Gratuit', path: '/quote-request' }
      ]
    },
    {
      title: 'Ressources',
      links: [
        { name: 'Centre d\'Aide', path: '/resources' },
        { name: 'Guides Pratiques', path: '/resources' },
        { name: 'Réglementation', path: '/resources' },
        { name: 'FAQ', path: '/resources' }
      ]
    },
    {
      title: 'ProAssure',
      links: [
        { name: 'À Propos', path: '/about' },
        { name: 'Notre Équipe', path: '/about' },
        { name: 'Carrières', path: '/careers' },
        { name: 'Presse', path: '/press' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Nous Contacter', path: '/contact' },
        { name: 'Déclarer un Sinistre', path: '/claims' },
        { name: 'Espace Client', path: '/login' },
        { name: 'Assistance 24h/24', path: '/emergency' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', url: '#' },
    { name: 'LinkedIn', icon: 'Linkedin', url: '#' },
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'Instagram', icon: 'Instagram', url: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/homepage" className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg">
                <Icon name="Shield" size={24} color="white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">ProAssure</span>
                <span className="text-xs text-gray-400 -mt-1">Protection Professionnelle</span>
              </div>
            </Link>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Votre partenaire de confiance pour l'assurance des professionnels du transport au Maroc. 
              Protection complète, service expert, sérénité garantie.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={18} className="text-accent" />
                <span className="text-gray-300">+212 611 11 22 24</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={18} className="text-accent" />
                <span className="text-gray-300">contact@proassure.ma</span>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="MapPin" size={18} className="text-accent mt-1" />
                <span className="text-gray-300">
                  123 Boulevard Mohammed V<br />
                  Casablanca, Maroc
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections?.map((section) => (
            <div key={section?.title} className="space-y-4">
              <h4 className="text-lg font-semibold text-white">{section?.title}</h4>
              <ul className="space-y-3">
                {section?.links?.map((link) => (
                  <li key={link?.name}>
                    <Link
                      to={link?.path}
                      className="text-gray-300 hover:text-accent transition-colors duration-200"
                    >
                      {link?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h4 className="text-lg font-semibold text-white mb-2">
                Restez Informé
              </h4>
              <p className="text-gray-300">
                Recevez nos actualités et conseils pour les professionnels du transport
              </p>
            </div>
            
            <div className="flex w-full lg:w-auto max-w-md">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="px-6 py-3 bg-primary hover:bg-blue-700 rounded-r-lg transition-colors duration-200">
                <Icon name="Send" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} ProAssure. Tous droits réservés.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-accent transition-colors duration-200">
                Politique de Confidentialité
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-accent transition-colors duration-200">
                Conditions d'Utilisation
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-accent transition-colors duration-200">
                Cookies
              </Link>
            </div>

            {/* Certifications */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-accent" />
                <span className="text-xs text-gray-400">Agréé ACAPS</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-accent" />
                <span className="text-xs text-gray-400">Certifié ISO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;