
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Shield, Star, Smartphone, CheckCircle2, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CustomerFormProps {
  merchantId: string;
  onBack: () => void;
}

const CustomerForm = ({ merchantId, onBack }: CustomerFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consentGiven: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Mock business data
  const businessData = {
    name: "Demo Restaurant",
    reviewUrl: "https://g.page/r/your-google-review-url",
    privacyUrl: "#"
  };

  const validateField = (field: string, value: string) => {
    switch (field) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'phone':
        // Phone is optional, but if provided should be valid
        if (value && value.length > 0) {
          const phoneRegex = /^[\+]?[\d\s\-\(\)]{8,}$/;
          return !phoneRegex.test(value) ? 'Please enter a valid phone number' : '';
        }
        return '';
      default:
        return '';
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field as keyof typeof formData] as string);
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(field => {
      if (field !== 'consentGiven') {
        const error = validateField(field, formData[field as keyof typeof formData] as string);
        if (error) newErrors[field] = error;
      }
    });

    if (!formData.consentGiven) {
      toast({
        title: "Consent Required",
        description: "Please agree to the data usage terms to continue.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.name || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and email address.",
        variant: "destructive",
      });
      return;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({
        name: true,
        email: true,
        phone: true,
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      console.log("Submitting customer data:", {
        ...formData,
        merchantId,
        consentTimestamp: new Date().toISOString()
      });
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Thank you!",
        description: "Your information has been saved. Redirecting to leave a review...",
      });
      
      // Simulate redirect to Google reviews
      setTimeout(() => {
        window.open(businessData.reviewUrl, '_blank');
        onBack();
      }, 2000);
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldStatus = (field: string) => {
    const hasError = errors[field] && touched[field];
    const isValid = !errors[field] && touched[field] && formData[field as keyof typeof formData];
    return { hasError, isValid };
  };

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
              <div className="space-y-4">
                {/* Name Field */}
                <div className="relative">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Full Name *
                  </Label>
                  <div className="relative mt-1">
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      placeholder="Enter your full name"
                      className={`transition-all duration-200 ${
                        getFieldStatus('name').hasError 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                          : getFieldStatus('name').isValid 
                          ? 'border-green-500 focus:border-green-500 focus:ring-green-500' 
                          : 'focus:border-blue-500 focus:ring-blue-500'
                      } hover:border-gray-400`}
                      required
                    />
                    {getFieldStatus('name').isValid && (
                      <CheckCircle2 className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-500 animate-scale-in" />
                    )}
                    {getFieldStatus('name').hasError && (
                      <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-red-500 animate-scale-in" />
                    )}
                  </div>
                  {errors.name && touched.name && (
                    <p className="text-red-500 text-xs mt-1 animate-fade-in">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="relative">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address *
                  </Label>
                  <div className="relative mt-1">
                    <Input
                      id="email"
                      type="email"
                      inputMode="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      placeholder="Enter your email"
                      className={`transition-all duration-200 ${
                        getFieldStatus('email').hasError 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                          : getFieldStatus('email').isValid 
                          ? 'border-green-500 focus:border-green-500 focus:ring-green-500' 
                          : 'focus:border-blue-500 focus:ring-blue-500'
                      } hover:border-gray-400`}
                      required
                    />
                    {getFieldStatus('email').isValid && (
                      <CheckCircle2 className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-500 animate-scale-in" />
                    )}
                    {getFieldStatus('email').hasError && (
                      <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-red-500 animate-scale-in" />
                    )}
                  </div>
                  {errors.email && touched.email && (
                    <p className="text-red-500 text-xs mt-1 animate-fade-in">{errors.email}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Phone Number (Optional)
                  </Label>
                  <div className="relative mt-1">
                    <Input
                      id="phone"
                      type="tel"
                      inputMode="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      onBlur={() => handleBlur('phone')}
                      placeholder="Enter your phone number"
                      className={`transition-all duration-200 ${
                        getFieldStatus('phone').hasError 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                          : getFieldStatus('phone').isValid 
                          ? 'border-green-500 focus:border-green-500 focus:ring-green-500' 
                          : 'focus:border-blue-500 focus:ring-blue-500'
                      } hover:border-gray-400`}
                    />
                    {getFieldStatus('phone').isValid && (
                      <CheckCircle2 className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-500 animate-scale-in" />
                    )}
                    {getFieldStatus('phone').hasError && (
                      <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-red-500 animate-scale-in" />
                    )}
                  </div>
                  {errors.phone && touched.phone && (
                    <p className="text-red-500 text-xs mt-1 animate-fade-in">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* GDPR Consent with enhanced styling */}
              <div className="border rounded-lg p-4 bg-blue-50/50 hover:bg-blue-50/70 transition-colors duration-200">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consentGiven}
                    onCheckedChange={(checked) => 
                      setFormData({...formData, consentGiven: checked as boolean})
                    }
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
                      I agree to share my contact details with <strong>{businessData.name}</strong> for 
                      follow-up communications including special offers, updates, and service improvements. 
                      My data will not be sold or shared with external parties. 
                      <a href={businessData.privacyUrl} className="text-blue-600 hover:underline ml-1 transition-all duration-200">
                        Privacy Policy
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button with enhanced animations */}
              <Button 
                type="submit" 
                className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6 transition-all duration-300 transform ${
                  isSubmitting ? 'scale-95' : 'hover:scale-105'
                } hover:shadow-lg active:scale-95`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </div>
                ) : (
                  <>
                    Submit & Leave Review
                    <Star className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
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
            <Shield className="w-3 h-3 animate-pulse" />
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
