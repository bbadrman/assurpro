import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ResourceCard = ({ 
  title, 
  description, 
  type, 
  image, 
  imageAlt, 
  readTime, 
  category, 
  downloadUrl, 
  isNew = false,
  onClick 
}) => {
  const getTypeIcon = (type) => {
    switch (type) {
      case 'guide': return 'FileText';
      case 'video': return 'Play';
      case 'calculator': return 'Calculator';
      case 'checklist': return 'CheckSquare';
      case 'webinar': return 'Video';
      case 'news': return 'Newspaper';
      default: return 'FileText';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'guide': return 'bg-blue-100 text-blue-700';
      case 'video': return 'bg-red-100 text-red-700';
      case 'calculator': return 'bg-green-100 text-green-700';
      case 'checklist': return 'bg-purple-100 text-purple-700';
      case 'webinar': return 'bg-orange-100 text-orange-700';
      case 'news': return 'bg-gray-100 text-gray-700';
      default: return 'bg-blue-100 text-blue-700';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden group cursor-pointer">
      <div className="relative overflow-hidden h-48">
        <Image
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isNew && (
          <div className="absolute top-3 left-3 bg-accent text-white px-2 py-1 rounded-full text-xs font-medium">
            Nouveau
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(type)}`}>
            <Icon name={getTypeIcon(type)} size={12} className="mr-1" />
            {type === 'guide' && 'Guide'}
            {type === 'video' && 'Vidéo'}
            {type === 'calculator' && 'Calculateur'}
            {type === 'checklist' && 'Liste'}
            {type === 'webinar' && 'Webinaire'}
            {type === 'news' && 'Actualité'}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-primary uppercase tracking-wide">
            {category}
          </span>
          {readTime && (
            <span className="text-xs text-muted-foreground flex items-center">
              <Icon name="Clock" size={12} className="mr-1" />
              {readTime}
            </span>
          )}
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={onClick}
            className="text-primary border-primary hover:bg-primary hover:text-white"
          >
            {type === 'video' ? 'Regarder' : type === 'calculator' ? 'Utiliser' : 'Lire plus'}
          </Button>
          
          {downloadUrl && (
            <Button
              variant="ghost"
              size="sm"
              iconName="Download"
              iconPosition="left"
              className="text-muted-foreground hover:text-primary"
            >
              Télécharger
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;