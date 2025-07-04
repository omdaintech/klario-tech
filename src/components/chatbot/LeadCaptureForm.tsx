
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { User, Mail, Phone } from "lucide-react";

interface LeadCaptureFormProps {
  language: 'en' | 'sv';
  onSubmit: (data: { name: string; email: string; phone?: string }) => void;
}

const LeadCaptureForm = ({ language, onSubmit }: LeadCaptureFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gdprConsent: false
  });

  const texts = {
    en: {
      title: "Get personalized information",
      name: "Your name",
      email: "Email address",
      phone: "Phone number (optional)",
      gdpr: "I consent to receive relevant information about KLARIO's NFC marketing solutions. I can unsubscribe anytime.",
      submit: "Get information",
      required: "Name and email are required"
    },
    sv: {
      title: "Få personlig information",
      name: "Ditt namn",
      email: "E-postadress",
      phone: "Telefonnummer (valfritt)",
      gdpr: "Jag samtycker till att få relevant information om KLARIOs NFC-marknadsföringslösningar. Jag kan avsluta prenumerationen när som helst.",
      submit: "Få information",
      required: "Namn och e-post krävs"
    }
  };

  const t = texts[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.gdprConsent) {
      return;
    }

    onSubmit({
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || undefined
    });
  };

  return (
    <div className="bg-white border border-purple-200 rounded-lg p-4 shadow-sm">
      <h4 className="font-semibold text-sm text-purple-800 mb-3 flex items-center">
        <User className="w-4 h-4 mr-2" />
        {t.title}
      </h4>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <Label htmlFor="lead-name" className="text-xs text-gray-600">{t.name}</Label>
          <Input
            id="lead-name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="h-8 text-sm"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="lead-email" className="text-xs text-gray-600">{t.email}</Label>
          <Input
            id="lead-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="h-8 text-sm"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="lead-phone" className="text-xs text-gray-600">{t.phone}</Label>
          <Input
            id="lead-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            className="h-8 text-sm"
          />
        </div>
        
        <div className="flex items-start space-x-2">
          <Checkbox
            id="gdpr-consent"
            checked={formData.gdprConsent}
            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, gdprConsent: !!checked }))}
            className="mt-1"
          />
          <Label htmlFor="gdpr-consent" className="text-xs text-gray-600 leading-tight">
            {t.gdpr}
          </Label>
        </div>
        
        <Button
          type="submit"
          size="sm"
          className="w-full bg-purple-600 hover:bg-purple-700 text-xs h-8"
          disabled={!formData.name.trim() || !formData.email.trim() || !formData.gdprConsent}
        >
          <Mail className="w-3 h-3 mr-2" />
          {t.submit}
        </Button>
      </form>
    </div>
  );
};

export default LeadCaptureForm;
