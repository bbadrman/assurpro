import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DocumentUploadStep = ({ formData, updateFormData, errors }) => {
  const [dragActive, setDragActive] = useState({});

  const requiredDocuments = [
    {
      id: 'drivingLicense',
      label: 'Permis de conduire',
      description: 'Recto et verso du permis de conduire en cours de validité',
      required: true,
      acceptedFormats: '.pdf,.jpg,.jpeg,.png'
    },
    {
      id: 'vehicleRegistration',
      label: 'Carte grise du véhicule',
      description: 'Certificat d\'immatriculation du véhicule',
      required: true,
      acceptedFormats: '.pdf,.jpg,.jpeg,.png'
    },
    {
      id: 'identityCard',
      label: 'Pièce d\'identité',
      description: 'Carte d\'identité nationale ou passeport',
      required: true,
      acceptedFormats: '.pdf,.jpg,.jpeg,.png'
    },
    {
      id: 'professionalLicense',
      label: 'Licence professionnelle',
      description: 'Autorisation d\'exercer (VTC, Taxi, Transport)',
      required: true,
      acceptedFormats: '.pdf,.jpg,.jpeg,.png'
    },
    {
      id: 'previousInsurance',
      label: 'Relevé d\'information',
      description: 'Historique d\'assurance des 3 dernières années (si applicable)',
      required: false,
      acceptedFormats: '.pdf,.jpg,.jpeg,.png'
    }
  ];

  const handleDrag = (e, docId) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (e?.type === "dragenter" || e?.type === "dragover") {
      setDragActive(prev => ({ ...prev, [docId]: true }));
    } else if (e?.type === "dragleave") {
      setDragActive(prev => ({ ...prev, [docId]: false }));
    }
  };

  const handleDrop = (e, docId) => {
    e?.preventDefault();
    e?.stopPropagation();
    setDragActive(prev => ({ ...prev, [docId]: false }));
    
    if (e?.dataTransfer?.files && e?.dataTransfer?.files?.[0]) {
      handleFileUpload(e?.dataTransfer?.files?.[0], docId);
    }
  };

  const handleFileUpload = (file, docId) => {
    // Simulate file upload
    const newDocuments = {
      ...formData?.documents,
      [docId]: {
        file: file,
        name: file?.name,
        size: file?.size,
        uploadDate: new Date()?.toISOString(),
        status: 'uploaded'
      }
    };
    updateFormData({ documents: newDocuments });
  };

  const handleFileSelect = (e, docId) => {
    const file = e?.target?.files?.[0];
    if (file) {
      handleFileUpload(file, docId);
    }
  };

  const removeDocument = (docId) => {
    const newDocuments = { ...formData?.documents };
    delete newDocuments?.[docId];
    updateFormData({ documents: newDocuments });
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i))?.toFixed(2)) + ' ' + sizes?.[i];
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <Icon name="Upload" size={48} className="mx-auto text-primary mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Documents requis
        </h3>
        <p className="text-gray-600">
          Téléchargez les documents nécessaires pour finaliser votre demande de devis
        </p>
      </div>
      <div className="space-y-6">
        {requiredDocuments?.map((doc) => {
          const uploadedDoc = formData?.documents?.[doc?.id];
          const isUploaded = uploadedDoc && uploadedDoc?.status === 'uploaded';
          const hasError = errors?.documents?.[doc?.id];

          return (
            <div key={doc?.id} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-medium text-gray-800">{doc?.label}</h4>
                    {doc?.required && (
                      <span className="text-red-500 text-sm">*</span>
                    )}
                    {isUploaded && (
                      <Icon name="CheckCircle" size={16} className="text-green-500" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{doc?.description}</p>
                  <p className="text-xs text-gray-500">
                    Formats acceptés: {doc?.acceptedFormats?.replace(/\./g, '')?.toUpperCase()}
                  </p>
                </div>
              </div>
              {!isUploaded ? (
                <div
                  className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 ${
                    dragActive?.[doc?.id]
                      ? 'border-primary bg-blue-50'
                      : hasError
                      ? 'border-red-300 bg-red-50' :'border-gray-300 hover:border-gray-400'
                  }`}
                  onDragEnter={(e) => handleDrag(e, doc?.id)}
                  onDragLeave={(e) => handleDrag(e, doc?.id)}
                  onDragOver={(e) => handleDrag(e, doc?.id)}
                  onDrop={(e) => handleDrop(e, doc?.id)}
                >
                  <input
                    type="file"
                    id={`file-${doc?.id}`}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept={doc?.acceptedFormats}
                    onChange={(e) => handleFileSelect(e, doc?.id)}
                  />
                  <Icon 
                    name="Upload" 
                    size={32} 
                    className={`mx-auto mb-4 ${
                      dragActive?.[doc?.id] ? 'text-primary' : 'text-gray-400'
                    }`} 
                  />
                  <p className="text-sm font-medium text-gray-700 mb-1">
                    Glissez-déposez votre fichier ici
                  </p>
                  <p className="text-xs text-gray-500 mb-4">
                    ou cliquez pour sélectionner un fichier
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="FolderOpen"
                    iconPosition="left"
                    onClick={() => document.getElementById(`file-${doc?.id}`)?.click()}
                  >
                    Choisir un fichier
                  </Button>
                  {hasError && (
                    <p className="text-red-500 text-sm mt-2">{hasError}</p>
                  )}
                </div>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Icon name="FileText" size={20} className="text-green-600" />
                      <div>
                        <p className="font-medium text-green-800">{uploadedDoc?.name}</p>
                        <p className="text-sm text-green-600">
                          {formatFileSize(uploadedDoc?.size)} • Téléchargé le {new Date(uploadedDoc.uploadDate)?.toLocaleDateString('fr-FR')}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="Trash2"
                      onClick={() => removeDocument(doc?.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Icon name="AlertTriangle" size={20} className="text-amber-600 mt-0.5" />
          <div>
            <h5 className="font-medium text-amber-800 mb-1">
              Important
            </h5>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• Assurez-vous que tous les documents sont lisibles et à jour</li>
              <li>• La taille maximale par fichier est de 10 MB</li>
              <li>• Les documents seront vérifiés avant l'émission du devis final</li>
              <li>• Vos données sont sécurisées et traitées de manière confidentielle</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentUploadStep;