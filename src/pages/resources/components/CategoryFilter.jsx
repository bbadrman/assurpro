import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'all': return 'Grid3X3';
      case 'guides': return 'FileText';
      case 'videos': return 'Play';
      case 'calculators': return 'Calculator';
      case 'regulations': return 'Scale';
      case 'business': return 'TrendingUp';
      case 'news': return 'Newspaper';
      default: return 'Grid3X3';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-card p-6 mb-8">
      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
        <Icon name="Filter" size={20} className="mr-2 text-primary" />
        Filtrer par catégorie
      </h3>
      <div className="flex flex-wrap gap-2">
        {categories?.map((category) => (
          <Button
            key={category?.id}
            variant={activeCategory === category?.id ? "default" : "outline"}
            size="sm"
            iconName={getCategoryIcon(category?.id)}
            iconPosition="left"
            onClick={() => onCategoryChange(category?.id)}
            className={`${
              activeCategory === category?.id 
                ? 'bg-primary text-white' :'text-gray-700 border-gray-200 hover:bg-muted hover:text-primary'
            }`}
          >
            {category?.name}
            {category?.count && (
              <span className="ml-2 px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">
                {category?.count}
              </span>
            )}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;