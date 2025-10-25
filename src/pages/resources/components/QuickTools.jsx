import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickTools = () => {
  const tools = [
    {
      id: 1,
      name: "Calculateur de prime",
      description: "Estimez votre prime d\'assurance en quelques clics",
      icon: "Calculator",
      color: "bg-blue-500",
      action: "Calculer"
    },
    {
      id: 2,
      name: "Vérificateur de conformité",
      description: "Vérifiez si votre véhicule respecte les réglementations",
      icon: "CheckCircle",
      color: "bg-green-500",
      action: "Vérifier"
    },
    {
      id: 3,
      name: "Générateur de devis",
      description: "Créez un devis personnalisé instantanément",
      icon: "FileText",
      color: "bg-purple-500",
      action: "Générer"
    },
    {
      id: 4,
      name: "Comparateur de couvertures",
      description: "Comparez les différentes options d'assurance",
      icon: "BarChart3",
      color: "bg-orange-500",
      action: "Comparer"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-card p-6">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
          <Icon name="Zap" size={20} className="text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Outils rapides</h3>
          <p className="text-sm text-muted-foreground">Calculateurs et vérificateurs instantanés</p>
        </div>
      </div>
      <div className="space-y-4">
        {tools?.map((tool) => (
          <div
            key={tool?.id}
            className="flex items-center p-4 border border-gray-100 rounded-lg hover:border-primary/20 hover:bg-muted/50 transition-all duration-200 group"
          >
            <div className={`w-10 h-10 ${tool?.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200`}>
              <Icon name={tool?.icon} size={20} className="text-white" />
            </div>
            
            <div className="flex-1">
              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                {tool?.name}
              </h4>
              <p className="text-sm text-muted-foreground">
                {tool?.description}
              </p>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              iconName="ArrowRight"
              iconPosition="right"
              className="text-primary border-primary hover:bg-primary hover:text-white ml-4"
            >
              {tool?.action}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickTools;