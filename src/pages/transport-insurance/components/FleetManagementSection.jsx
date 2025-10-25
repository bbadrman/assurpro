import React from 'react';
import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const FleetManagementSection = () => {
  const fleetFeatures = [
    {
      icon: "BarChart3",
      title: "Tableau de Bord Centralisé",
      description: "Gérez tous vos véhicules depuis une interface unique avec suivi en temps réel des polices et sinistres."
    },
    {
      icon: "MapPin",
      title: "Géolocalisation Avancée",
      description: "Suivi GPS intégré pour optimiser les trajets et réduire les risques d\'accidents."
    },
    {
      icon: "Users",
      title: "Gestion des Conducteurs",
      description: "Profils conducteurs, formations sécurité et suivi des performances individuelles."
    },
    {
      icon: "FileText",
      title: "Reporting Automatisé",
      description: "Rapports mensuels détaillés sur la sinistralité, coûts et recommandations d'amélioration."
    },
    {
      icon: "Smartphone",
      title: "Application Mobile",
      description: "Déclaration de sinistres instantanée et suivi des interventions depuis le terrain."
    },
    {
      icon: "Headphones",
      title: "Support Dédié",
      description: "Gestionnaire de compte personnel disponible 24h/7j pour vos urgences."
    }
  ];

  const dashboardStats = [
    { label: "Véhicules Actifs", value: "18", icon: "Truck", color: "text-primary" },
    { label: "Sinistres en Cours", value: "2", icon: "AlertTriangle", color: "text-warning" },
    { label: "Économies Réalisées", value: "15%", icon: "TrendingDown", color: "text-success" },
    { label: "Score Sécurité", value: "94/100", icon: "Shield", color: "text-accent" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Gestion de Flotte Intelligente
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Optimisez votre flotte de transport avec nos outils de gestion avancés. 
            Réduisez vos coûts et améliorez la sécurité de vos opérations.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Aperçu Tableau de Bord Flotte
              </h3>
              <p className="text-muted-foreground">
                Interface de gestion complète pour votre flotte de transport
              </p>
            </div>

            {/* Mock Dashboard */}
            <div className="bg-white rounded-xl shadow-card p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-semibold text-gray-900">
                  Transport Maghreb SARL - Flotte Overview
                </h4>
                <div className="text-sm text-muted-foreground">
                  Dernière mise à jour: {new Date()?.toLocaleDateString('fr-FR')}
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {dashboardStats?.map((stat, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <Icon name={stat?.icon} size={20} className={stat?.color} />
                      <span className="text-sm text-muted-foreground">{stat?.label}</span>
                    </div>
                    <div className={`text-2xl font-bold ${stat?.color}`}>
                      {stat?.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mock Vehicle List */}
              <div className="border-t pt-6">
                <h5 className="font-medium text-gray-900 mb-4">Véhicules Récents</h5>
                <div className="space-y-3">
                  {[
                    { plate: "123-A-45", model: "Mercedes Actros", status: "En Route", location: "Casablanca → Rabat" },
                    { plate: "678-B-90", model: "Volvo FH", status: "Maintenance", location: "Garage Central" },
                    { plate: "234-C-67", model: "Scania R450", status: "Disponible", location: "Dépôt Tanger" }
                  ]?.map((vehicle, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Icon name="Truck" size={20} className="text-gray-600" />
                        <div>
                          <div className="font-medium text-gray-900">{vehicle?.plate}</div>
                          <div className="text-sm text-muted-foreground">{vehicle?.model}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-sm font-medium ${
                          vehicle?.status === 'En Route' ? 'text-success' :
                          vehicle?.status === 'Maintenance' ? 'text-warning' : 'text-primary'
                        }`}>
                          {vehicle?.status}
                        </div>
                        <div className="text-xs text-muted-foreground">{vehicle?.location}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                variant="default"
                size="lg"
                iconName="ExternalLink"
                iconPosition="right"
              >
                Voir Démo Complète
              </Button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleetFeatures?.map((feature, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-elevated transition-all duration-300 animate-fade-in">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <Icon name={feature?.icon} size={24} className="text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature?.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature?.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Prêt à Optimiser Votre Flotte ?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Découvrez comment nos solutions de gestion peuvent réduire vos coûts 
              d'assurance jusqu'à 25% tout en améliorant la sécurité.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Planifier une Démo
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Guide Gestion Flotte
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetManagementSection;