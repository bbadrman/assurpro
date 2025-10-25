import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CoverageSection from './components/CoverageSection';
import FleetManagementSection from './components/FleetManagementSection';
import IndustrySpecificSection from './components/IndustrySpecificSection';
import PricingCalculatorSection from './components/PricingCalculatorSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';

const TransportInsurance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Assurance Transport Professionnel Maroc | ProAssure</title>
        <meta 
          name="description" 
          content="Assurance transport complète pour transporteurs professionnels au Maroc. Couverture flotte, gestion centralisée, tarifs préférentiels. Devis gratuit en 24h." 
        />
        <meta name="keywords" content="assurance transport, transporteur maroc, assurance flotte, transport professionnel, couverture marchandises" />
        <meta property="og:title" content="Assurance Transport Professionnel | ProAssure Maroc" />
        <meta property="og:description" content="Protection complète pour votre flotte de transport. Solutions sur mesure, gestion digitale, expertise réglementaire marocaine." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/transport-insurance" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <HeroSection />
          <CoverageSection />
          <FleetManagementSection />
          <IndustrySpecificSection />
          <PricingCalculatorSection />
          <TestimonialsSection />
          <CTASection />
        </main>
      </div>
    </>
  );
};

export default TransportInsurance;