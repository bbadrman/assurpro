import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import TaxiHeroSection from './components/TaxiHeroSection';
import TaxiCoverageSection from './components/TaxiCoverageSection';
import TaxiRequirementsSection from './components/TaxiRequirementsSection';
import TaxiTestimonialsSection from './components/TaxiTestimonialsSection';
import TaxiProcessSection from './components/TaxiProcessSection';
import TaxiFAQSection from './components/TaxiFAQSection';

const TaxiInsurance = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Assurance Taxi Professionnel - Protection Complète | ProAssure</title>
        <meta 
          name="description" 
          content="Assurance spécialisée pour chauffeurs de taxi au Maroc. Couverture adaptée aux réglementations locales, sinistres rapides 24h/24. Devis gratuit en 2 minutes." 
        />
        <meta name="keywords" content="assurance taxi, assurance taxi maroc, couverture taxi, protection chauffeur taxi, sinistre taxi, devis assurance taxi" />
        <meta property="og:title" content="Assurance Taxi Professionnel - Protection Complète | ProAssure" />
        <meta property="og:description" content="Protection spécialisée pour taxis traditionnels au Maroc. Expertise 15 ans, traitement sinistre 24h, couverture nationale." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://proassure.ma/taxi-insurance" />
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Section */}
          <TaxiHeroSection />
          
          {/* Coverage Options */}
          <TaxiCoverageSection />
          
          {/* Requirements & Regulations */}
          <TaxiRequirementsSection />
          
          {/* Customer Testimonials */}
          <TaxiTestimonialsSection />
          
          {/* Process Steps */}
          <TaxiProcessSection />
          
          {/* FAQ Section */}
          <TaxiFAQSection />
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg">
                    <span className="text-white font-bold text-lg">P</span>
                  </div>
                  <span className="text-xl font-bold">ProAssure</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Votre partenaire de confiance pour l'assurance des professionnels du transport au Maroc.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-semibold mb-4">Nos Services</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="/vtc-insurance" className="hover:text-white transition-colors">Assurance VTC</a></li>
                  <li><a href="/taxi-insurance" className="hover:text-white transition-colors">Assurance Taxi</a></li>
                  <li><a href="/transport-insurance" className="hover:text-white transition-colors">Transport Pro</a></li>
                  <li><a href="/quote-request" className="hover:text-white transition-colors">Devis Gratuit</a></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="/resources" className="hover:text-white transition-colors">Centre d'Aide</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Déclarer un Sinistre</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Espace Client</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <div className="space-y-2 text-gray-300">
                  <p>+212 5XX XX XX XX</p>
                  <p>contact@proassure.ma</p>
                  <p>Lun-Ven: 8h-20h<br />Sam: 9h-17h</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date()?.getFullYear()} ProAssure. Tous droits réservés. | Agrément ACAPS n°XXX</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default TaxiInsurance;