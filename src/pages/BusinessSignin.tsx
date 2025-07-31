
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Building2, Mail, Lock, Eye, EyeOff, Shield, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocalization } from "@/hooks/useLocalization";
import { t } from "@/localization/translations";

const businessSigninSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean().optional(),
});

type BusinessSigninForm = z.infer<typeof businessSigninSchema>;

const BusinessSignin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language } = useLocalization();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BusinessSigninForm>({
    resolver: zodResolver(businessSigninSchema),
  });

  const onSubmit = async (data: BusinessSigninForm) => {
    setIsSubmitting(true);
    try {
      console.log("Business signin data:", data);
      // Here you would typically authenticate with your backend
      alert("Welcome back! Redirecting to your dashboard...");
    } catch (error) {
      console.error("Signin error:", error);
      alert("Invalid credentials. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 max-w-md mx-auto">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{t(language, 'businessSignin.backToHome')}</span>
          </Link>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <Building2 className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TapCRM
            </h1>
          </div>
        </div>

        {/* Sign In Card */}
        <Card className="max-w-md mx-auto shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              {t(language, 'businessSignin.title')}
            </CardTitle>
            <CardDescription className="text-gray-600">
              {t(language, 'businessSignin.subtitle')}
            </CardDescription>
            <div className="flex justify-center space-x-2 mt-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <Shield className="w-3 h-3 mr-1" />
                Secure Login
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                <Smartphone className="w-3 h-3 mr-1" />
                Mobile Ready
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    {t(language, 'businessSignin.email')}
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="your@business.com"
                      className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    {t(language, 'businessSignin.password')}
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                      placeholder="Enter your password"
                      className="pl-10 pr-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-sm text-red-600">{errors.password.message}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    {...register("rememberMe")}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <Label htmlFor="rememberMe" className="text-sm text-gray-700">
                    {t(language, 'businessSignin.rememberMe')}
                  </Label>
                </div>
                
                <Link 
                  to="/business/forgot-password" 
                  className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
                >
                  {t(language, 'businessSignin.forgotPassword')}
                </Link>
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>{t(language, 'businessSignin.signingIn')}</span>
                  </div>
                ) : (
                  t(language, 'businessSignin.signIn')
                )}
              </Button>
            </form>

            <div className="mt-8">
              <Separator />
              <div className="text-center mt-6">
                <p className="text-gray-600 text-sm">
                  {t(language, 'businessSignin.noAccount')}
                </p>
                <Link 
                  to="/business/signup" 
                  className="inline-flex items-center space-x-2 mt-2 text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors"
                >
                  <Building2 className="w-4 h-4" />
                  <span>{t(language, 'businessSignin.createAccount')}</span>
                </Link>
              </div>
            </div>

            {/* Help Section */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">{t(language, 'businessSignin.needHelp')}</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p>• {t(language, 'businessSignin.contactSupport')}</p>
                <p>• {t(language, 'businessSignin.callUs')}</p>
                <p>• <Link to="/help" className="text-blue-600 hover:underline">{t(language, 'businessSignin.helpCenter')}</Link></p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="max-w-md mx-auto mt-6 text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-600 text-sm">
            <Shield className="w-4 h-4" />
            <span>{t(language, 'businessSignin.securityNotice')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSignin;
