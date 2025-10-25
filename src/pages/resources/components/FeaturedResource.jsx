import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedResource = ({ resource }) => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary rounded-lg overflow-hidden shadow-elevated mb-8">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-8 lg:p-12 text-white">
          <div className="flex items-center mb-4">
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <Icon name="Star" size={16} className="mr-2" />
              Ressource vedette
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            {resource?.title}
          </h2>
          
          <p className="text-white/90 text-lg mb-6 leading-relaxed">
            {resource?.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="outline"
              size="lg"
              iconName="Play"
              iconPosition="left"
              className="bg-white text-primary border-white hover:bg-gray-50"
            >
              Regarder maintenant
            </Button>
            
            <Button
              variant="ghost"
              size="lg"
              iconName="Download"
              iconPosition="left"
              className="text-white border-white/30 hover:bg-white/10"
            >
              Télécharger le guide
            </Button>
          </div>
          
          <div className="flex items-center mt-6 text-white/80 text-sm">
            <Icon name="Clock" size={16} className="mr-2" />
            <span className="mr-4">{resource?.duration}</span>
            <Icon name="Users" size={16} className="mr-2" />
            <span>{resource?.viewers} vues</span>
          </div>
        </div>
        
        <div className="lg:w-1/2 relative">
          <Image
            src={resource?.image}
            alt={resource?.imageAlt}
            className="w-full h-64 lg:h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors duration-200">
              <Icon name="Play" size={24} className="text-white ml-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedResource;