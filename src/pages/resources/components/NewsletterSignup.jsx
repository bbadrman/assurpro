import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <div className="bg-success/10 border border-success/20 rounded-lg p-6 text-center">
        <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} className="text-success" />
        </div>
        <h3 className="text-lg font-semibold text-success mb-2">
          Inscription confirmée !
        </h3>
        <p className="text-muted-foreground">
          Vous recevrez bientôt nos dernières actualités et ressources.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-muted rounded-lg p-6">
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Mail" size={24} className="text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Restez informé
        </h3>
        <p className="text-muted-foreground">
          Recevez les dernières actualités réglementaires et conseils métier directement dans votre boîte mail.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          label="Adresse email"
          placeholder="votre.email@exemple.com"
          value={email}
          onChange={(e) => setEmail(e?.target?.value)}
          required
          className="w-full"
        />
        
        <Button
          type="submit"
          variant="default"
          size="lg"
          fullWidth
          loading={isLoading}
          iconName="Send"
          iconPosition="right"
          disabled={!email}
        >
          S'abonner à la newsletter
        </Button>
        
        <p className="text-xs text-muted-foreground text-center">
          En vous inscrivant, vous acceptez de recevoir nos communications. 
          Vous pouvez vous désabonner à tout moment.
        </p>
      </form>
    </div>
  );
};

export default NewsletterSignup;