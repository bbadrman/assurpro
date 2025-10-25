import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ProductCards from './components/ProductCards';
import TrustSection from './components/TrustSection';
import QuoteSection from './components/QuoteSection';
import Footer from './components/Footer';

const Homepage = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleSmoothScroll = (e) => {
      const target = e?.target?.closest('a[href^="#"]');
      if (target) {
        e?.preventDefault();
        const targetId = target?.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>ProAssure - Assurance Professionnelle pour VTC, Taxi & Transport au Maroc</title>
        <meta 
          name="description" 
          content="Protection complète pour les professionnels du transport au Maroc. Assurance VTC, Taxi, Transporteur. Devis gratuit en 2 minutes. Agréé ACAPS." 
        />
        <meta name="keywords" content="assurance VTC Maroc, assurance taxi Casablanca, transport professionnel, ProAssure, devis gratuit" />
        <meta property="og:title" content="ProAssure - Votre assurance, notre route vers la sérénité" />
        <meta property="og:description" content="Solutions d'assurance sur mesure pour VTC, Taxi et Transport professionnel au Maroc" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://proassure.ma/homepage" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Section */}
          <HeroSection />

          {/* Product Cards Section */}
          <ProductCards />

          {/* Trust & Social Proof Section */}
          <TrustSection />

          {/* Quote Request Section */}
          <QuoteSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Homepage;