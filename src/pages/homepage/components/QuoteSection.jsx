import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const QuoteSection = () => {
  const [formData, setFormData] = useState({
    vehicleType: '',
    city: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const vehicleOptions = [
    { value: 'vtc', label: 'VTC - Véhicule de Transport avec Chauffeur' },
    { value: 'taxi', label: 'Taxi - Urbain ou Grand Taxi' },
    { value: 'transport', label: 'Transport Professionnel - Marchandises/Voyageurs' }
  ];

  const cityOptions = [
    { value: 'casablanca', label: 'Casablanca' },
    { value: 'rabat', label: 'Rabat' },
    { value: 'marrakech', label: 'Marrakech' },
    { value: 'fes', label: 'Fès' },
    { value: 'tangier', label: 'Tanger' },
    { value: 'agadir', label: 'Agadir' },
    { value: 'meknes', label: 'Meknès' },
    { value: 'oujda', label: 'Oujda' },
    { value: 'kenitra', label: 'Kénitra' },
    { value: 'tetouan', label: 'Tétouan' },
    { value: 'other', label: 'Autre ville' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setShowSuccess(true);

    // Reset form after success
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        vehicleType: '',
        city: '',
        email: '',
        phone: ''
      });
    }, 3000);
  };

  const isFormValid = formData?.vehicleType && formData?.city && formData?.email && formData?.phone;

  return (
    <section id="devis-section" className="py-20 bg-gradient-to-br from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                Obtenez Votre Devis
                <span className="text-accent block">en 2 Minutes</span>
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Remplissez notre formulaire simplifié et recevez immédiatement 
                une estimation personnalisée pour votre assurance professionnelle.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                'Devis gratuit et sans engagement',
                'Réponse immédiate par email',
                'Tarifs préférentiels en ligne',
                'Accompagnement personnalisé'
              ]?.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={14} className="text-gray-900" />
                  </div>
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-8 border-t border-blue-400/30">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={20} className="text-accent" />
                <span className="text-sm text-blue-200">Données sécurisées</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={20} className="text-accent" />
                <span className="text-sm text-blue-200">Traitement rapide</span>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="animate-slide-up">
            <div className="bg-white rounded-2xl shadow-modal p-8">
              {!showSuccess ? (
                <>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Formulaire de Devis
                    </h3>
                    <p className="text-gray-600">
                      Quelques informations pour personnaliser votre offre
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Select
                      label="Type de véhicule"
                      placeholder="Sélectionnez votre activité"
                      required
                      options={vehicleOptions}
                      value={formData?.vehicleType}
                      onChange={(value) => handleInputChange('vehicleType', value)}
                    />

                    <Select
                      label="Ville d'activité"
                      placeholder="Sélectionnez votre ville"
                      required
                      searchable
                      options={cityOptions}
                      value={formData?.city}
                      onChange={(value) => handleInputChange('city', value)}
                    />

                    <Input
                      label="Adresse email"
                      type="email"
                      placeholder="votre.email@gmail.com"
                      required
                      value={formData?.email}
                      onChange={(e) => handleInputChange('email', e?.target?.value)}
                    />

                    <Input
                      label="Numéro de téléphone"
                      type="tel"
                      placeholder="+212 6XX XX XX XX"
                      required
                      value={formData?.phone}
                      onChange={(e) => handleInputChange('phone', e?.target?.value)}
                    />

                    <Button
                      type="submit"
                      fullWidth
                      size="lg"
                      loading={isSubmitting}
                      disabled={!isFormValid}
                      iconName="Send"
                      iconPosition="right"
                      className="bg-primary hover:bg-blue-700"
                    >
                      {isSubmitting ? 'Génération du devis...' : 'Obtenir Mon Devis Gratuit'}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      En soumettant ce formulaire, vous acceptez d'être contacté par ProAssure 
                      pour recevoir votre devis personnalisé.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8 animate-scale-in">
                  <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name="CheckCircle" size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Devis Envoyé !
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Votre demande de devis a été transmise avec succès. 
                    Vous recevrez votre estimation personnalisée par email dans les prochaines minutes.
                  </p>
                  <Button
                    variant="outline"
                    iconName="ArrowRight"
                    iconPosition="right"
                    asChild
                  >
                    <Link to="/quote-request">Voir le Détail</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;