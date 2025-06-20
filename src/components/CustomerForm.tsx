
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Shield, Star, Smartphone } from "lucide-react";
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

  // Mock business data
  const businessData = {
    name: "Demo Restaurant",
    reviewUrl: "https://g.page/r/your-google-review-url",
    privacyUrl: "#"
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
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

    setIsSubmitting(true);
    
    // Simulate API call
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="max-w-md mx-auto pt-8">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="sm" onClick={onBack} className="mr-2">
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <Smartphone className="w-3 h-3 text-white" />
            </div>
            <span className="font-semibold text-gray-700">TapCRM</span>
          </div>
        </div>

        {/* Business Info */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
            {businessData.name.charAt(0)}
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{businessData.name}</h1>
          <p className="text-gray-600">We'd love to stay in touch!</p>
        </div>

        {/* Form */}
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-center">Share Your Details</CardTitle>
            <CardDescription className="text-center">
              Help us provide you with better service and exclusive offers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your full name"
                    className="mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Enter your email"
                    className="mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="Enter your phone number"
                    className="mt-1"
                  />
                </div>
              </div>

              {/* GDPR Consent */}
              <div className="border rounded-lg p-4 bg-blue-50/50">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consentGiven}
                    onCheckedChange={(checked) => 
                      setFormData({...formData, consentGiven: checked as boolean})
                    }
                    className="mt-1"
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
                      <a href={businessData.privacyUrl} className="text-blue-600 hover:underline ml-1">
                        Privacy Policy
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit & Leave Review"}
                <Star className="w-4 h-4 ml-2" />
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                After submitting, you'll be redirected to leave a Google review
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Trust Indicators */}
        <div className="mt-6 flex justify-center space-x-6 text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <Shield className="w-3 h-3" />
            <span>GDPR Compliant</span>
          </div>
          <div className="flex items-center space-x-1">
            <Smartphone className="w-3 h-3" />
            <span>Secure</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerForm;
