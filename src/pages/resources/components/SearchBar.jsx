import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const SearchBar = ({ onSearch, placeholder = "Rechercher des ressources..." }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e?.preventDefault();
    onSearch(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <div className="bg-white rounded-lg shadow-card p-6 mb-8">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Input
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e?.target?.value)}
            className="pl-12 pr-10"
          />
          <Icon 
            name="Search" 
            size={20} 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
          />
          {searchTerm && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Icon name="X" size={16} />
            </button>
          )}
        </div>
        
        <Button
          type="submit"
          variant="default"
          iconName="Search"
          iconPosition="left"
          className="sm:w-auto"
        >
          Rechercher
        </Button>
      </form>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="text-sm text-muted-foreground">Recherches populaires:</span>
        {['Réglementation VTC', 'Assurance taxi', 'Conformité véhicule', 'Prime assurance']?.map((term) => (
          <button
            key={term}
            onClick={() => {
              setSearchTerm(term);
              onSearch(term);
            }}
            className="text-sm text-primary hover:text-primary/80 underline transition-colors duration-200"
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;