
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Shield } from "lucide-react";

interface ConsentCheckboxProps {
  consentGiven: boolean;
  onConsentChange: (checked: boolean) => void;
  businessName: string;
  privacyUrl: string;
}

const ConsentCheckbox = ({ consentGiven, onConsentChange, businessName, privacyUrl }: ConsentCheckboxProps) => {
  return (
    <div className="border rounded-lg p-4 bg-blue-50/50 hover:bg-blue-50/70 transition-colors duration-200">
      <div className="flex items-start space-x-3">
        <Checkbox
          id="consent"
          checked={consentGiven}
          onCheckedChange={(checked) => onConsentChange(checked as boolean)}
          className="mt-1 transition-all duration-200 hover:scale-110"
        />
        <div className="flex-1">
          <Label 
            htmlFor="consent" 
            className="text-sm font-medium cursor-pointer"
          >
            <div className="flex items-center space-x-2 mb-2">
              <Shield className="w-4 h-4 text-blue-600" />
              <span>Data Usage Agreement *</span>
            </div>
          </Label>
          <p className="text-xs text-gray-600 leading-relaxed">
            I agree to share my contact details with <strong>{businessName}</strong> for 
            follow-up communications including special offers, updates, and service improvements. 
            My data will not be sold or shared with external parties. 
            <a href={privacyUrl} className="text-blue-600 hover:underline ml-1 transition-all duration-200">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConsentCheckbox;
