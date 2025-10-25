import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ResourceCard from './components/ResourceCard';
import CategoryFilter from './components/CategoryFilter';
import FeaturedResource from './components/FeaturedResource';
import NewsletterSignup from './components/NewsletterSignup';
import QuickTools from './components/QuickTools';
import SearchBar from './components/SearchBar';

const ResourcesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResources, setFilteredResources] = useState([]);

  // Mock data for featured resource
  const featuredResource = {
    title: "Guide Complet de la Réglementation VTC 2024",
    description: "Découvrez tout ce que vous devez savoir sur les nouvelles réglementations VTC en vigueur au Maroc. Ce guide complet couvre les exigences légales, les procédures d'obtention de licence et les obligations d'assurance.",
    image: "https://images.unsplash.com/photo-1666886573531-48d2e3c2b684",
    imageAlt: "Professional driver in modern vehicle reviewing regulatory documents on tablet",
    duration: "45 min",
    viewers: "2,847"
  };

  // Mock data for categories
  const categories = [
  { id: 'all', name: 'Toutes les ressources', count: 24 },
  { id: 'guides', name: 'Guides pratiques', count: 8 },
  { id: 'videos', name: 'Vidéos tutoriels', count: 6 },
  { id: 'calculators', name: 'Calculateurs', count: 4 },
  { id: 'regulations', name: 'Réglementation', count: 3 },
  { id: 'business', name: 'Conseils métier', count: 2 },
  { id: 'news', name: 'Actualités', count: 1 }];


  // Mock data for resources
  const resources = [
  {
    id: 1,
    title: "Comment choisir la bonne assurance VTC",
    description: "Guide détaillé pour comprendre les différents types de couvertures d'assurance VTC et choisir celle qui convient le mieux à votre activité professionnelle.",
    type: "guide",
    category: "guides",
    image: "https://images.unsplash.com/photo-1723588591022-7851553df34f",
    imageAlt: "Insurance agent explaining VTC coverage options to professional driver at desk",
    readTime: "8 min",
    downloadUrl: "/guides/assurance-vtc.pdf",
    isNew: true
  },
  {
    id: 2,
    title: "Calculateur de prime d\'assurance taxi",
    description: "Outil interactif pour estimer votre prime d'assurance taxi en fonction de votre profil, votre véhicule et votre zone d'activité.",
    type: "calculator",
    category: "calculators",
    image: "https://images.unsplash.com/photo-1584346881556-19b8804d414f",
    imageAlt: "Calculator and financial documents on desk with taxi insurance forms",
    readTime: "5 min"
  },
  {
    id: 3,
    title: "Procédure de déclaration de sinistre",
    description: "Vidéo explicative détaillant étape par étape la procédure à suivre en cas d\'accident ou de sinistre avec votre véhicule professionnel.",
    type: "video",
    category: "videos",
    image: "https://images.unsplash.com/photo-1585092261015-82594e6b5181",
    imageAlt: "Professional explaining insurance claim process on video call with documents visible",
    readTime: "12 min",
    isNew: false
  },
  {
    id: 4,
    title: "Nouvelles réglementations transport 2024",
    description: "Mise à jour complète des nouvelles réglementations en vigueur pour les transporteurs professionnels au Maroc, incluant les obligations d'assurance.",
    type: "news",
    category: "regulations",
    image: "https://images.unsplash.com/photo-1655818145332-28100d77ffaf",
    imageAlt: "Legal documents and regulatory papers spread on desk with Morocco transport authority logo",
    readTime: "6 min"
  },
  {
    id: 5,
    title: "Liste de vérification pré-inspection",
    description: "Checklist complète pour préparer votre véhicule aux inspections réglementaires et vous assurer de la conformité de votre assurance.",
    type: "checklist",
    category: "guides",
    image: "https://images.unsplash.com/photo-1637522391680-1f23244b9005",
    imageAlt: "Professional mechanic inspecting taxi vehicle with checklist clipboard in hand",
    readTime: "4 min",
    downloadUrl: "/checklists/pre-inspection.pdf"
  },
  {
    id: 6,
    title: "Optimiser sa rentabilité en tant que VTC",
    description: "Conseils pratiques pour maximiser vos revenus tout en maintenant une couverture d\'assurance optimale et en respectant la réglementation.",
    type: "guide",
    category: "business",
    image: "https://images.unsplash.com/flagged/photo-1559733404-9b79677fc959",
    imageAlt: "Successful VTC driver reviewing financial reports and business growth charts on laptop",
    readTime: "10 min"
  },
  {
    id: 7,
    title: "Webinaire: Assurance et nouvelles technologies",
    description: "Session en direct sur l'impact des nouvelles technologies (véhicules électriques, applications) sur les besoins d'assurance des professionnels.",
    type: "webinar",
    category: "videos",
    image: "https://images.unsplash.com/photo-1557001883-50870d451c1b",
    imageAlt: "Insurance expert presenting webinar about technology and professional vehicle coverage",
    readTime: "60 min"
  },
  {
    id: 8,
    title: "Comparateur de polices d\'assurance",
    description: "Outil de comparaison interactive pour analyser différentes offres d'assurance et identifier celle qui offre le meilleur rapport qualité-prix.",
    type: "calculator",
    category: "calculators",
    image: "https://images.unsplash.com/photo-1681910203895-e56df5b07afa",
    imageAlt: "Split screen comparison showing different insurance policy options with charts and graphs",
    readTime: "7 min"
  }];


  // Filter resources based on category and search term
  useEffect(() => {
    let filtered = resources;

    if (activeCategory !== 'all') {
      filtered = filtered?.filter((resource) => resource?.category === activeCategory);
    }

    if (searchTerm) {
      filtered = filtered?.filter((resource) =>
      resource?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      resource?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase())
      );
    }

    setFilteredResources(filtered);
  }, [activeCategory, searchTerm]);

  const handleResourceClick = (resource) => {
    console.log('Opening resource:', resource?.title);
    // Handle resource opening logic here
  };

  return (
    <>
      <Helmet>
        <title>Ressources - ProAssure | Guides et Outils pour Professionnels du Transport</title>
        <meta name="description" content="Accédez à nos guides pratiques, calculateurs et ressources éducatives pour les professionnels VTC, taxi et transport au Maroc. Expertise réglementaire et conseils métier." />
        <meta name="keywords" content="ressources transport Maroc, guides VTC, assurance taxi, réglementation transport, calculateur prime" />
      </Helmet>
      <div className="min-h-screen bg-muted">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-primary via-primary to-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Icon name="BookOpen" size={32} className="text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Centre de Ressources
              </h1>
              
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Guides pratiques, outils interactifs et actualités réglementaires pour vous accompagner 
                dans votre activité de transport professionnel au Maroc.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Download"
                  iconPosition="left"
                  className="bg-white text-primary border-white hover:bg-gray-50">

                  Guides téléchargeables
                </Button>
                
                <Button
                  variant="ghost"
                  size="lg"
                  iconName="Play"
                  iconPosition="left"
                  className="text-white border-white/30 hover:bg-white/10">

                  Vidéos tutoriels
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Featured Resource */}
            <FeaturedResource resource={featuredResource} />
            
            {/* Search Bar */}
            <SearchBar
              onSearch={setSearchTerm}
              placeholder="Rechercher guides, vidéos, calculateurs..." />

            
            {/* Category Filter */}
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory} />

            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Resources Grid */}
              <div className="lg:col-span-3">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {activeCategory === 'all' ? 'Toutes les ressources' :
                      categories?.find((cat) => cat?.id === activeCategory)?.name}
                    </h2>
                    <p className="text-muted-foreground">
                      {filteredResources?.length} ressource{filteredResources?.length > 1 ? 's' : ''} disponible{filteredResources?.length > 1 ? 's' : ''}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Filter"
                      iconPosition="left"
                      className="text-muted-foreground">

                      Trier par
                    </Button>
                  </div>
                </div>
                
                {filteredResources?.length > 0 ?
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredResources?.map((resource) =>
                  <ResourceCard
                    key={resource?.id}
                    title={resource?.title}
                    description={resource?.description}
                    type={resource?.type}
                    image={resource?.image}
                    imageAlt={resource?.imageAlt}
                    readTime={resource?.readTime}
                    category={resource?.category}
                    downloadUrl={resource?.downloadUrl}
                    isNew={resource?.isNew}
                    onClick={() => handleResourceClick(resource)} />

                  )}
                  </div> :

                <div className="text-center py-12">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Search" size={32} className="text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Aucune ressource trouvée
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Essayez de modifier vos critères de recherche ou explorez d'autres catégories.
                    </p>
                    <Button
                    variant="outline"
                    onClick={() => {
                      setActiveCategory('all');
                      setSearchTerm('');
                    }}>

                      Voir toutes les ressources
                    </Button>
                  </div>
                }
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-8">
                {/* Quick Tools */}
                <QuickTools />
                
                {/* Newsletter Signup */}
                <NewsletterSignup />
                
                {/* Popular Resources */}
                <div className="bg-white rounded-lg shadow-card p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <Icon name="TrendingUp" size={20} className="mr-2 text-primary" />
                    Ressources populaires
                  </h3>
                  
                  <div className="space-y-4">
                    {resources?.slice(0, 3)?.map((resource, index) =>
                    <div key={resource?.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200 cursor-pointer">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-semibold text-primary">
                            {index + 1}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-foreground line-clamp-2 mb-1">
                            {resource?.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {resource?.readTime} • {resource?.type}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="MessageCircle" size={32} className="text-primary" />
            </div>
            
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Besoin d'aide personnalisée ?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nos experts sont là pour répondre à vos questions spécifiques et vous accompagner 
              dans le choix de votre assurance professionnelle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Phone"
                iconPosition="left">

                Parler à un expert
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                iconName="Calculator"
                iconPosition="left"
                className="text-primary border-primary hover:bg-primary hover:text-white">

                Demander un devis
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>);

};

export default ResourcesPage;