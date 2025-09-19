import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

interface AgeGateProps {
  onVerified: () => void;
}

export const AgeGate = ({ onVerified }: AgeGateProps) => {
  const [birthDate, setBirthDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const calculateAge = (birthDate: string): number => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age;
  };

  const handleVerification = () => {
    if (!birthDate) {
      toast.error('Inserisci la tua data di nascita');
      return;
    }

    setIsLoading(true);
    
    // Simulate verification delay
    setTimeout(() => {
      const age = calculateAge(birthDate);
      
      if (age < 18) {
        toast.error('Devi avere almeno 18 anni per accedere a questo sito');
        setIsLoading(false);
        return;
      }

      // Store verification in localStorage
      localStorage.setItem('ageVerified', 'true');
      localStorage.setItem('ageVerifiedDate', new Date().toISOString());
      
      toast.success('Verifica completata con successo!');
      onVerified();
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 age-gate-overlay flex items-center justify-center p-4">
      <Card className="w-full max-w-md card-psychedelic animate-scale-in">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-display text-psychedelic">
            Verifica Età
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Devi essere maggiorenne per accedere al nostro sito di birra artigianale
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="birthDate" className="font-medium">
              Data di nascita
            </Label>
            <Input
              id="birthDate"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full"
              max={new Date().toISOString().split('T')[0]}
            />
          </div>
          
          <Button 
            onClick={handleVerification}
            disabled={isLoading}
            className="w-full btn-golden text-lg font-medium"
          >
            {isLoading ? 'Verifica in corso...' : 'Verifica Età'}
          </Button>
          
          <p className="text-xs text-muted-foreground text-center">
            Questo sito vende bevande alcoliche. L'accesso è riservato ai maggiorenni.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};