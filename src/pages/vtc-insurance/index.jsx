import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CoverageSection from './components/CoverageSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import RequirementsSection from './components/RequirementsSection';
import ComparisonSection from './components/ComparisonSection';
import FAQSection from './components/FAQSection';

const VTCInsurance = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Assurance VTC Professionnelle au Maroc | ProAssure - Protection Complète</title>
        <meta 
          name="description" 
          content="Assurance VTC spécialisée au Maroc. Couverture complète, tarifs compétitifs, service 24h/7j. Devis gratuit en 2 minutes pour chauffeurs VTC professionnels." 
        />
        <meta name="keywords" content="assurance VTC Maroc, assurance chauffeur VTC, assurance transport passagers, VTC professionnel Maroc" />
        <meta property="og:title" content="Assurance VTC Professionnelle au Maroc | ProAssure" />
        <meta property="og:description" content="Protection complète pour chauffeurs VTC au Maroc. Devis gratuit, couverture optimale, service expert dédié." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://proassure.ma/vtc-insurance" />
      </Helmet>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Section */}
          <HeroSection />
          
          {/* Coverage Options */}
          <CoverageSection />
          
          {/* Benefits & Features */}
          <BenefitsSection />
          
          {/* Customer Testimonials */}
          <TestimonialsSection />
          
          {/* Requirements & Process */}
          <RequirementsSection />
          
          {/* Comparison with Competitors */}
          <ComparisonSection />
          
          {/* FAQ Section */}
          <FAQSection />
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">P</span>
                  </div>
                  <span className="text-xl font-bold">ProAssure</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Votre partenaire assurance pour une mobilité professionnelle sereine au Maroc.
                </p>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                    <span className="text-xs font-bold">f</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                    <span className="text-xs font-bold">in</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Nos Assurances</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/vtc-insurance" className="hover:text-white transition-colors">Assurance VTC</a></li>
                  <li><a href="/taxi-insurance" className="hover:text-white transition-colors">Assurance Taxi</a></li>
                  <li><a href="/transport-insurance" className="hover:text-white transition-colors">Transport Pro</a></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/resources" className="hover:text-white transition-colors">Centre d'aide</a></li>
                  <li><a href="/quote-request" className="hover:text-white transition-colors">Demander un devis</a></li>
                  <li className="hover:text-white transition-colors cursor-pointer">Déclarer un sinistre</li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <div className="space-y-2 text-gray-400">
                  <div>+212 5XX XX XX XX</div>
                  <div>contact@proassure.ma</div>
                  <div>Casablanca, Maroc</div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date()?.getFullYear()} ProAssure. Tous droits réservés. | Agréé ACAPS</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default VTCInsurance;