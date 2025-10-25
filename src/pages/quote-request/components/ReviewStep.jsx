import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ReviewStep = ({ formData, onEdit }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'Non renseigné';
    return new Date(dateString)?.toLocaleDateString('fr-FR');
  };

  const formatCurrency = (amount) => {
    return `${amount?.toLocaleString('fr-FR')} MAD`;
  };

  const getVehicleTypeLabel = (type) => {
    const types = {
      vtc: 'VTC (Véhicule de Tourisme avec Chauffeur)',
      taxi: 'Taxi traditionnel',
      transport: 'Transport de marchandises'
    };
    return types?.[type] || type;
  };

  const getCoverageTypeLabel = (type) => {
    const types = {
      tiers: 'Responsabilité civile (Tiers)',
      tiers_plus: 'Tiers étendu',
      tous_risques: 'Tous risques'
    };
    return types?.[type] || type;
  };

  const getDeductibleLabel = (deductible) => {
    const deductibles = {
      '0': 'Aucune franchise (0 MAD)',
      '1000': 'Franchise réduite (1 000 MAD)',
      '2500': 'Franchise standard (2 500 MAD)',
      '5000': 'Franchise élevée (5 000 MAD)'
    };
    return deductibles?.[deductible] || `${deductible} MAD`;
  };

  const getAdditionalCoverageLabels = (coverage) => {
    if (!coverage) return [];
    
    const labels = {
      assistance24h: 'Assistance 24h/24',
      protectionJuridique: 'Protection juridique',
      garantiePersonnelle: 'Garantie du conducteur',
      equipementsPro: 'Équipements professionnels',
      pertesExploitation: 'Pertes d\'exploitation'
    };

    return Object.keys(coverage)?.filter(key => coverage?.[key])?.map(key => labels?.[key] || key);
  };

  const getUploadedDocuments = (documents) => {
    if (!documents) return [];
    
    const docLabels = {
      drivingLicense: 'Permis de conduire',
      vehicleRegistration: 'Carte grise du véhicule',
      identityCard: 'Pièce d\'identité',
      professionalLicense: 'Licence professionnelle',
      previousInsurance: 'Relevé d\'information'
    };

    return Object.keys(documents)?.filter(key => documents?.[key] && documents?.[key]?.status === 'uploaded')?.map(key => ({
        label: docLabels?.[key] || key,
        name: documents?.[key]?.name
      }));
  };

  const sections = [
    {
      title: 'Informations personnelles',
      step: 0,
      items: [
        { label: 'Civilité', value: formData?.civility },
        { label: 'Nom complet', value: `${formData?.firstName} ${formData?.lastName}` },
        { label: 'Date de naissance', value: formatDate(formData?.birthDate) },
        { label: 'Téléphone', value: formData?.phone },
        { label: 'E-mail', value: formData?.email },
        { label: 'Adresse', value: `${formData?.address}, ${formData?.city} ${formData?.postalCode}` }
      ]
    },
    {
      title: 'Informations du véhicule',
      step: 1,
      items: [
        { label: 'Type de véhicule', value: getVehicleTypeLabel(formData?.vehicleType) },
        { label: 'Marque et modèle', value: `${formData?.vehicleBrand} ${formData?.vehicleModel}` },
        { label: 'Année', value: formData?.vehicleYear },
        { label: 'Carburant', value: formData?.fuelType },
        { label: 'Immatriculation', value: formData?.licensePlate },
        { label: 'Puissance fiscale', value: `${formData?.fiscalPower} CV` },
        { label: 'Kilométrage annuel', value: `${formData?.annualMileage?.toLocaleString('fr-FR')} km` },
        { label: 'Usage', value: formData?.vehicleUsage }
      ]
    },
    {
      title: 'Couverture d\'assurance',
      step: 2,
      items: [
        { label: 'Type de couverture', value: getCoverageTypeLabel(formData?.coverageType) },
        { label: 'Franchise', value: getDeductibleLabel(formData?.deductible) },
        { 
          label: 'Garanties optionnelles', 
          value: getAdditionalCoverageLabels(formData?.additionalCoverage)?.join(', ') || 'Aucune'
        }
      ]
    }
  ];

  const uploadedDocs = getUploadedDocuments(formData?.documents);

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <Icon name="FileCheck" size={48} className="mx-auto text-primary mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Vérification de votre demande
        </h3>
        <p className="text-gray-600">
          Vérifiez toutes les informations avant de soumettre votre demande de devis
        </p>
      </div>
      {sections?.map((section, index) => (
        <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-gray-800 flex items-center">
                <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                  {section?.step + 1}
                </span>
                {section?.title}
              </h4>
              <Button
                variant="ghost"
                size="sm"
                iconName="Edit"
                iconPosition="left"
                onClick={() => onEdit(section?.step)}
                className="text-primary hover:text-primary hover:bg-blue-50"
              >
                Modifier
              </Button>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section?.items?.map((item, itemIndex) => (
                <div key={itemIndex} className="flex flex-col">
                  <dt className="text-sm font-medium text-gray-500 mb-1">
                    {item?.label}
                  </dt>
                  <dd className="text-sm text-gray-800">
                    {item?.value || 'Non renseigné'}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      {uploadedDocs?.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-gray-800 flex items-center">
                <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                  4
                </span>
                Documents téléchargés
              </h4>
              <Button
                variant="ghost"
                size="sm"
                iconName="Edit"
                iconPosition="left"
                onClick={() => onEdit(3)}
                className="text-primary hover:text-primary hover:bg-blue-50"
              >
                Modifier
              </Button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {uploadedDocs?.map((doc, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <Icon name="FileText" size={20} className="text-green-600" />
                  <div className="flex-1">
                    <p className="font-medium text-green-800">{doc?.label}</p>
                    <p className="text-sm text-green-600">{doc?.name}</p>
                  </div>
                  <Icon name="CheckCircle" size={20} className="text-green-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Icon name="Shield" size={24} className="text-blue-600 mt-1" />
          <div>
            <h5 className="font-semibold text-blue-800 mb-2">
              Prochaines étapes
            </h5>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Votre demande sera traitée dans les 24 heures ouvrées</li>
              <li>• Un conseiller ProAssure vous contactera pour finaliser votre devis</li>
              <li>• Vous recevrez votre proposition d'assurance par e-mail</li>
              <li>• Possibilité de souscrire directement en ligne ou par téléphone</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewStep;