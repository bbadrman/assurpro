import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Accueil', path: '/homepage', icon: 'Home' },
    { name: 'Assurance VTC', path: '/vtc-insurance', icon: 'Car' },
    { name: 'Assurance Taxi', path: '/taxi-insurance', icon: 'Taxi' },
    { name: 'Transport Pro', path: '/transport-insurance', icon: 'Truck' },
    { name: 'Ressources', path: '/resources', icon: 'BookOpen' }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-elevated border-b border-gray-100' 
          : 'bg-white'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link 
            to="/homepage" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg shadow-card">
              <Icon name="Shield" size={24} color="white" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary font-sans">ProAssure</span>
              <span className="text-xs text-muted-foreground font-medium -mt-1">Protection Professionnelle</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-white shadow-card'
                    : 'text-gray-700 hover:bg-muted hover:text-primary'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              iconName="Phone"
              iconPosition="left"
              className="text-primary border-primary hover:bg-primary hover:text-white"
            >
              +212 5XX XX XX XX
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="Calculator"
              iconPosition="left"
              asChild
            >
              <Link to="/quote-request">Devis Gratuit</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-muted transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <Icon 
              name={isMobileMenuOpen ? "X" : "Menu"} 
              size={20} 
              className="text-gray-700"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100 border-t border-gray-100' :'max-h-0 opacity-0'
          }`}
        >
          <nav className="px-4 py-4 bg-white space-y-2">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-white shadow-card'
                    : 'text-gray-700 hover:bg-muted hover:text-primary'
                }`}
              >
                <Icon name={item?.icon} size={18} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            {/* Mobile CTA Buttons */}
            <div className="pt-4 space-y-3 border-t border-gray-100">
              <Button
                variant="outline"
                fullWidth
                iconName="Phone"
                iconPosition="left"
                className="text-primary border-primary hover:bg-primary hover:text-white"
              >
                +212 5XX XX XX XX
              </Button>
              <Button
                variant="default"
                fullWidth
                iconName="Calculator"
                iconPosition="left"
                asChild
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link to="/quote-request">Demander un Devis Gratuit</Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;