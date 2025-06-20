
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Smartphone } from "lucide-react";
import FormFields from "./customer-form/FormFields";
import ConsentCheckbox from "./customer-form/ConsentCheckbox";
import SubmitButton from "./customer-form/SubmitButton";
import { useCustomerForm } from "./customer-form/useCustomerForm";

interface CustomerFormProps {
  merchantId: string;
  onBack: () => void;
}

const CustomerForm = ({ merchantId, onBack }: CustomerFormProps) => {
  // Mock business data
  const businessData = {
    name: "Demo Restaurant",
    reviewUrl: "https://g.page/r/your-google-review-url",
    privacyUrl: "#"
  };

  const {
    formData,
    errors,
    touched,
    isSubmitting,
    handleInputChange,
    handleBlur,
    handleConsentChange,
    handleSubmit
  } = useCustomerForm({ merchantId, businessData, onBack });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="max-w-md mx-auto pt-8">
        {/* Header with animation */}
        <div className="flex items-center mb-6 animate-fade-in">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onBack} 
            className="mr-2 hover:bg-white/50 transition-all duration-200 hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
              <Smartphone className="w-3 h-3 text-white" />
            </div>
            <span className="font-semibold text-gray-700">TapCRM</span>
          </div>
        </div>

        {/* Business Info with slide-in animation */}
        <div className="text-center mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold hover:scale-110 transition-transform duration-300 cursor-pointer">
            {businessData.name.charAt(0)}
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{businessData.name}</h1>
          <p className="text-gray-600">We'd love to stay in touch!</p>
        </div>

        {/* Form with enhanced animations */}
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm animate-fade-in hover:shadow-2xl transition-all duration-300" style={{ animationDelay: '0.2s' }}>
          <CardHeader>
            <CardTitle className="text-center">Share Your Details</CardTitle>
            <CardDescription className="text-center">
              Help us provide you with better service and exclusive offers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <FormFields 
                formData={formData}
                errors={errors}
                touched={touched}
                onInputChange={handleInputChange}
                onBlur={handleBlur}
              />

              <ConsentCheckbox 
                consentGiven={formData.consentGiven}
                onConsentChange={handleConsentChange}
                businessName={businessData.name}
                privacyUrl={businessData.privacyUrl}
              />

              <SubmitButton isSubmitting={isSubmitting} />
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                After submitting, you'll be redirected to leave a Google review
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Trust Indicators with pulse animation */}
        <div className="mt-6 flex justify-center space-x-6 text-xs text-gray-500 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center space-x-1 hover:text-gray-700 transition-colors duration-200">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
            <span>GDPR Compliant</span>
          </div>
          <div className="flex items-center space-x-1 hover:text-gray-700 transition-colors duration-200">
            <Smartphone className="w-3 h-3 animate-pulse" />
            <span>Secure</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerForm;
