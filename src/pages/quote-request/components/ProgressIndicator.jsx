import React from 'react';
import Icon from '../../../components/AppIcon';

const ProgressIndicator = ({ currentStep, totalSteps, steps }) => {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between mb-4">
        {steps?.map((step, index) => (
          <div key={index} className="flex items-center">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
              index < currentStep 
                ? 'bg-primary border-primary text-white' 
                : index === currentStep 
                ? 'bg-white border-primary text-primary' :'bg-gray-100 border-gray-300 text-gray-400'
            }`}>
              {index < currentStep ? (
                <Icon name="Check" size={16} />
              ) : (
                <span className="text-sm font-semibold">{index + 1}</span>
              )}
            </div>
            {index < steps?.length - 1 && (
              <div className={`w-16 h-0.5 mx-2 transition-all duration-300 ${
                index < currentStep ? 'bg-primary' : 'bg-gray-300'
              }`} />
            )}
          </div>
        ))}
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {steps?.[currentStep]?.title}
        </h3>
        <p className="text-sm text-gray-600">
          Étape {currentStep + 1} sur {totalSteps}
        </p>
      </div>
    </div>
  );
};

export default ProgressIndicator;