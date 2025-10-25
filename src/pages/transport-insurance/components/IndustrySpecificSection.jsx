import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const IndustrySpecificSection = () => {
  const [activeIndustry, setActiveIndustry] = useState('logistics');

  const industries = {
    logistics: {
      title: "Transport & Logistique",
      description: "Solutions spécialisées pour les entreprises de transport de marchandises",
      image: "https://images.unsplash.com/photo-1695653422715-991ec3a0db7a",
      imageAlt: "Camion de livraison blanc avec chauffeur en uniforme chargeant des colis dans un entrepôt moderne",
      requirements: [
      "Licence de transport de marchandises",
      "Attestation de capacité professionnelle",
      "Registre des véhicules à jour",
      "Formation conducteurs ADR (si applicable)"],

      coverage: [
      "Marchandises transportées jusqu\'à 500 000 MAD",
      "Responsabilité civile professionnelle",
      "Perte d\'exploitation transport",
      "Frais de dépollution"],

      caseStudy: {
        company: "Logistique Atlas SARL",
        situation: "Accident avec renversement de marchandises sur l\'autoroute Casablanca-Rabat",
        coverage: "Indemnisation complète des marchandises (180 000 MAD) + frais de nettoyage (25 000 MAD)",
        outcome: "Reprise d\'activité en 48h avec véhicule de remplacement"
      }
    },
    construction: {
      title: "Transport BTP",
      description: "Couverture adaptée aux véhicules de chantier et transport de matériaux",
      image: "https://images.unsplash.com/photo-1583841667373-2266dcd546bc",
      imageAlt: "Camion-benne orange transportant des matériaux de construction sur un chantier avec ouvriers en casques",
      requirements: [
      "Autorisation transport matériaux lourds",
      "Certificat technique véhicule",
      "Assurance décennale (si applicable)",
      "Permis poids lourd à jour"],

      coverage: [
      "Équipements de chantier embarqués",
      "Dommages matériaux transportés",
      "Responsabilité chantier",
      "Protection environnementale"],

      caseStudy: {
        company: "BTP Maghreb Transport",
        situation: "Chute de matériaux endommageant plusieurs véhicules sur chantier",
        coverage: "Prise en charge des réparations (95 000 MAD) + responsabilité civile",
        outcome: "Règlement rapide permettant la continuité du chantier"
      }
    },
    food: {
      title: "Transport Alimentaire",
      description: "Protection spécialisée pour le transport de denrées périssables",
      image: "https://images.unsplash.com/photo-1699444117588-6a97e5ad048f",
      imageAlt: "Camion frigorifique blanc avec conducteur vérifiant la température des produits alimentaires frais",
      requirements: [
      "Agrément sanitaire transport",
      "Certification HACCP",
      "Contrôle température véhicule",
      "Formation hygiène alimentaire"],

      coverage: [
      "Denrées périssables jusqu\'à 300 000 MAD",
      "Bris de chaîne du froid",
      "Contamination accidentelle",
      "Frais de destruction sanitaire"],

      caseStudy: {
        company: "Fresh Transport Maroc",
        situation: "Panne du système frigorifique causant la perte de produits laitiers",
        coverage: "Indemnisation des marchandises perdues (75 000 MAD) + frais de destruction",
        outcome: "Remplacement immédiat du véhicule et poursuite des livraisons"
      }
    }
  };

  const industryTabs = [
  { id: 'logistics', label: 'Logistique', icon: 'Package' },
  { id: 'construction', label: 'BTP', icon: 'HardHat' },
  { id: 'food', label: 'Alimentaire', icon: 'Refrigerator' }];


  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Solutions par Secteur d'Activité
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Chaque secteur de transport a ses spécificités. Découvrez nos solutions 
            sur mesure adaptées à votre domaine d'activité.
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 shadow-card">
            <div className="flex space-x-2">
              {industryTabs?.map((tab) =>
              <button
                key={tab?.id}
                onClick={() => setActiveIndustry(tab?.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeIndustry === tab?.id ?
                'bg-primary text-white shadow-card' :
                'text-gray-600 hover:text-primary hover:bg-gray-50'}`
                }>

                  <Icon name={tab?.icon} size={18} />
                  <span>{tab?.label}</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Active Industry Content */}
        <div className="animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Industry Overview */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {industries?.[activeIndustry]?.title}
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8">
                {industries?.[activeIndustry]?.description}
              </p>

              <div className="rounded-xl overflow-hidden shadow-elevated mb-8">
                <Image
                  src={industries?.[activeIndustry]?.image}
                  alt={industries?.[activeIndustry]?.imageAlt}
                  className="w-full h-64 object-cover" />

              </div>
            </div>

            {/* Requirements & Coverage */}
            <div className="space-y-8">
              {/* Requirements */}
              <div className="bg-white rounded-xl p-6 shadow-card">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Icon name="FileCheck" size={20} className="text-primary mr-2" />
                  Prérequis Réglementaires
                </h4>
                
                <div className="space-y-3">
                  {industries?.[activeIndustry]?.requirements?.map((req, index) =>
                  <div key={index} className="flex items-start space-x-3">
                      <div className="flex items-center justify-center w-5 h-5 bg-primary/10 rounded-full mt-0.5">
                        <Icon name="Check" size={12} className="text-primary" strokeWidth={3} />
                      </div>
                      <span className="text-gray-700 text-sm">{req}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Coverage */}
              <div className="bg-white rounded-xl p-6 shadow-card">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Icon name="Shield" size={20} className="text-success mr-2" />
                  Garanties Spécialisées
                </h4>
                
                <div className="space-y-3">
                  {industries?.[activeIndustry]?.coverage?.map((coverage, index) =>
                  <div key={index} className="flex items-start space-x-3">
                      <div className="flex items-center justify-center w-5 h-5 bg-success/10 rounded-full mt-0.5">
                        <Icon name="Check" size={12} className="text-success" strokeWidth={3} />
                      </div>
                      <span className="text-gray-700 text-sm">{coverage}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Case Study */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                <Icon name="FileText" size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900">Cas Client Réel</h4>
                <p className="text-muted-foreground">Exemple de prise en charge dans ce secteur</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">
                  {industries?.[activeIndustry]?.caseStudy?.company}
                </h5>
                <p className="text-gray-700 mb-4">
                  <strong>Situation:</strong> {industries?.[activeIndustry]?.caseStudy?.situation}
                </p>
                <p className="text-gray-700">
                  <strong>Couverture:</strong> {industries?.[activeIndustry]?.caseStudy?.coverage}
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Icon name="CheckCircle" size={20} className="text-success" />
                  <span className="font-semibold text-success">Résolution Réussie</span>
                </div>
                <p className="text-gray-700">
                  {industries?.[activeIndustry]?.caseStudy?.outcome}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default IndustrySpecificSection;