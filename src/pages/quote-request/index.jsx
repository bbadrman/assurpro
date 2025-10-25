import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import ProgressIndicator from './components/ProgressIndicator';
import PersonalInfoStep from './components/PersonalInfoStep';
import VehicleInfoStep from './components/VehicleInfoStep';
import CoverageStep from './components/CoverageStep';
import DocumentUploadStep from './components/DocumentUploadStep';
import QuoteCalculator from './components/QuoteCalculator';
import ReviewStep from './components/ReviewStep';

const QuoteRequest = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    // Personal Info
    civility: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    marketingConsent: false,
    
    // Vehicle Info
    vehicleType: '',
    vehicleBrand: '',
    vehicleModel: '',
    vehicleYear: '',
    fuelType: '',
    licensePlate: '',
    fiscalPower: '',
    annualMileage: '',
    vehicleUsage: '',
    
    // Coverage
    coverageType: '',
    deductible: '',
    additionalCoverage: {},
    
    // Documents
    documents: {}
  });

  const steps = [
    { title: 'Informations personnelles', component: PersonalInfoStep },
    { title: 'Véhicule à assurer', component: VehicleInfoStep },
    { title: 'Couverture souhaitée', component: CoverageStep },
    { title: 'Documents requis', component: DocumentUploadStep },
    { title: 'Vérification', component: ReviewStep }
  ];

  // Load saved form data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('proassure_quote_form');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setFormData(parsedData);
      } catch (error) {
        console.error('Error loading saved form data:', error);
      }
    }
  }, []);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('proassure_quote_form', JSON.stringify(formData));
  }, [formData]);

  const updateFormData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
    // Clear related errors when data is updated
    const updatedErrors = { ...errors };
    Object.keys(newData)?.forEach(key => {
      if (updatedErrors?.[key]) {
        delete updatedErrors?.[key];
      }
    });
    setErrors(updatedErrors);
  };

  const validateStep = (stepIndex) => {
    const newErrors = {};

    switch (stepIndex) {
      case 0: // Personal Info
        if (!formData?.civility) newErrors.civility = 'Veuillez sélectionner votre civilité';
        if (!formData?.firstName) newErrors.firstName = 'Le prénom est requis';
        if (!formData?.lastName) newErrors.lastName = 'Le nom de famille est requis';
        if (!formData?.birthDate) newErrors.birthDate = 'La date de naissance est requise';
        if (!formData?.phone) newErrors.phone = 'Le numéro de téléphone est requis';
        if (!formData?.email) {
          newErrors.email = 'L\'adresse e-mail est requise';
        } else if (!/^[^\s@]+@gmail\.com$/?.test(formData?.email)) {
          newErrors.email = 'Seules les adresses Gmail sont acceptées';
        }
        if (!formData?.address) newErrors.address = 'L\'adresse est requise';
        if (!formData?.city) newErrors.city = 'La ville est requise';
        if (!formData?.postalCode) newErrors.postalCode = 'Le code postal est requis';
        break;

      case 1: // Vehicle Info
        if (!formData?.vehicleType) newErrors.vehicleType = 'Le type de véhicule est requis';
        if (!formData?.vehicleBrand) newErrors.vehicleBrand = 'La marque du véhicule est requise';
        if (!formData?.vehicleModel) newErrors.vehicleModel = 'Le modèle du véhicule est requis';
        if (!formData?.vehicleYear) newErrors.vehicleYear = 'L\'année est requise';
        if (!formData?.fuelType) newErrors.fuelType = 'Le type de carburant est requis';
        if (!formData?.licensePlate) newErrors.licensePlate = 'Le numéro d\'immatriculation est requis';
        if (!formData?.fiscalPower) newErrors.fiscalPower = 'La puissance fiscale est requise';
        if (!formData?.annualMileage) newErrors.annualMileage = 'Le kilométrage annuel est requis';
        if (!formData?.vehicleUsage) newErrors.vehicleUsage = 'Le type d\'usage est requis';
        break;

      case 2: // Coverage
        if (!formData?.coverageType) newErrors.coverageType = 'Le type de couverture est requis';
        if (!formData?.deductible) newErrors.deductible = 'La franchise est requise';
        break;

      case 3: // Documents
        const requiredDocs = ['drivingLicense', 'vehicleRegistration', 'identityCard', 'professionalLicense'];
        const documentErrors = {};
        
        requiredDocs?.forEach(docId => {
          if (!formData?.documents?.[docId] || formData?.documents?.[docId]?.status !== 'uploaded') {
            documentErrors[docId] = 'Ce document est requis';
          }
        });
        
        if (Object.keys(documentErrors)?.length > 0) {
          newErrors.documents = documentErrors;
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps?.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepEdit = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Clear saved form data after successful submission
      localStorage.removeItem('proassure_quote_form');
      
      setShowSuccess(true);
      
      // Redirect to homepage after 3 seconds
      setTimeout(() => {
        navigate('/homepage');
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Une erreur est survenue. Veuillez réessayer.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const CurrentStepComponent = steps?.[currentStep]?.component;

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-16">
          <div className="min-h-screen flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-lg shadow-modal p-8 text-center max-w-md w-full"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={32} className="text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Demande envoyée !
              </h2>
              <p className="text-gray-600 mb-6">
                Votre demande de devis a été transmise avec succès. Un conseiller ProAssure vous contactera dans les 24 heures.
              </p>
              <div className="space-y-3">
                <p className="text-sm text-gray-500">
                  Vous allez être redirigé automatiquement...
                </p>
                <Button
                  variant="default"
                  fullWidth
                  iconName="Home"
                  iconPosition="left"
                  onClick={() => navigate('/homepage')}
                >
                  Retour à l'accueil
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Demande de Devis d'Assurance
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Obtenez votre devis personnalisé en quelques minutes. 
              Nos conseillers experts vous accompagnent dans le choix de la meilleure protection.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-card p-6 lg:p-8">
                <ProgressIndicator
                  currentStep={currentStep}
                  totalSteps={steps?.length}
                  steps={steps}
                />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {CurrentStepComponent && (
                      <CurrentStepComponent
                        formData={formData}
                        updateFormData={updateFormData}
                        errors={errors}
                        onEdit={handleStepEdit}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                  <Button
                    variant="outline"
                    iconName="ArrowLeft"
                    iconPosition="left"
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                  >
                    Précédent
                  </Button>

                  <div className="flex items-center space-x-4">
                    {currentStep < steps?.length - 1 ? (
                      <Button
                        variant="default"
                        iconName="ArrowRight"
                        iconPosition="right"
                        onClick={handleNext}
                      >
                        Suivant
                      </Button>
                    ) : (
                      <Button
                        variant="default"
                        iconName="Send"
                        iconPosition="left"
                        onClick={handleSubmit}
                        loading={isSubmitting}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                      </Button>
                    )}
                  </div>
                </div>

                {errors?.submit && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 text-sm">{errors?.submit}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quote Calculator */}
              <QuoteCalculator formData={formData} />

              {/* Help Card */}
              <div className="bg-white rounded-lg shadow-card p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Icon name="HelpCircle" size={20} className="mr-2 text-primary" />
                  Besoin d'aide ?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="Phone" size={16} className="text-primary mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Appelez-nous</p>
                      <p className="text-sm text-gray-600">+212 611 11 22 24</p>
                      <p className="text-xs text-gray-500">Lun-Ven 9h-18h</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="MessageCircle" size={16} className="text-primary mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Chat en direct</p>
                      <p className="text-sm text-gray-600">Réponse immédiate</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Mail" size={16} className="text-primary mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">E-mail</p>
                      <p className="text-sm text-gray-600">contact@proassure.ma</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Shield" size={20} className="text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-green-800 mb-1">
                      Données sécurisées
                    </h4>
                    <p className="text-sm text-green-700">
                      Vos informations sont protégées par un chiffrement SSL et traitées 
                      conformément à la réglementation marocaine sur la protection des données.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteRequest;