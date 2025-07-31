
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Star, Users, MessageSquare, TrendingUp, Shield, Zap, Globe, Phone, Mail, MapPin, Smartphone, Nfc, QrCode } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";
import CustomerForm from "@/components/CustomerForm";
import Dashboard from "@/components/Dashboard";
import { useLocalization } from "@/hooks/useLocalization";
import { t } from "@/localization/translations";

const Index = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'customer-form' | 'dashboard'>('home');
  const [merchantId, setMerchantId] = useState("demo-merchant-123");
  const { language } = useLocalization();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
    }
  };

  if (currentView === 'customer-form') {
    return <CustomerForm merchantId={merchantId} onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'dashboard') {
    return <Dashboard merchantId={merchantId} onBack={() => setCurrentView('home')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navigation />
      
      {/* Home Section */}
      <section id="home" className="py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 animate-fade-in">
          {t(language, 'home.title')}
        </h1>
        <p className="text-lg text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {t(language, 'home.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full focus-ring animate-bounce-in"
            onClick={() => setCurrentView('customer-form')}
          >
            {t(language, 'home.tryCustomerForm')}
          </Button>
          <Button 
            variant="outline"
            className="border-purple-600 text-purple-600 hover:bg-purple-50 font-bold py-3 px-8 rounded-full"
            onClick={() => setCurrentView('dashboard')}
          >
            {t(language, 'home.viewDashboard')}
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t(language, 'about.title')}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              {t(language, 'about.description')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Nfc className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t(language, 'about.nfcInnovation')}</h3>
              <p className="text-gray-600">{t(language, 'about.nfcDescription')}</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t(language, 'about.aiPowered')}</h3>
              <p className="text-gray-600">{t(language, 'about.aiDescription')}</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t(language, 'about.customerFirst')}</h3>
              <p className="text-gray-600">{t(language, 'about.customerDescription')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t(language, 'services.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t(language, 'services.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-xl animate-slide-in-right">
              <CardHeader>
                <CardTitle className="flex items-center"><Nfc className="mr-2 text-blue-500" /> {t(language, 'services.smartNfc')}</CardTitle>
                <CardDescription>{t(language, 'services.smartNfcDesc')}</CardDescription>
              </CardHeader>
              <CardContent>
                {t(language, 'services.smartNfcContent')}
              </CardContent>
            </Card>

            <Card className="shadow-xl animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="flex items-center"><Star className="mr-2 text-yellow-500" /> {t(language, 'services.aiCampaigns')}</CardTitle>
                <CardDescription>{t(language, 'services.aiCampaignsDesc')}</CardDescription>
              </CardHeader>
              <CardContent>
                {t(language, 'services.aiCampaignsContent')}
              </CardContent>
            </Card>

            <Card className="shadow-xl animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle className="flex items-center"><Users className="mr-2 text-blue-500" /> {t(language, 'services.customerInsights')}</CardTitle>
                <CardDescription>{t(language, 'services.customerInsightsDesc')}</CardDescription>
              </CardHeader>
              <CardContent>
                {t(language, 'services.customerInsightsContent')}
              </CardContent>
            </Card>

            <Card className="shadow-xl animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
              <CardHeader>
                <CardTitle className="flex items-center"><MessageSquare className="mr-2 text-purple-500" /> {t(language, 'services.multiChannel')}</CardTitle>
                <CardDescription>{t(language, 'services.multiChannelDesc')}</CardDescription>
              </CardHeader>
              <CardContent>
                {t(language, 'services.multiChannelContent')}
              </CardContent>
            </Card>

            <Card className="shadow-xl animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
              <CardHeader>
                <CardTitle className="flex items-center"><TrendingUp className="mr-2 text-orange-500" /> {t(language, 'services.realTimeAnalytics')}</CardTitle>
                <CardDescription>{t(language, 'services.realTimeAnalyticsDesc')}</CardDescription>
              </CardHeader>
              <CardContent>
                {t(language, 'services.realTimeAnalyticsContent')}
              </CardContent>
            </Card>

            <Card className="shadow-xl animate-slide-in-right" style={{ animationDelay: '1s' }}>
              <CardHeader>
                <CardTitle className="flex items-center"><Shield className="mr-2 text-teal-500" /> {t(language, 'services.gdprCompliant')}</CardTitle>
                <CardDescription>{t(language, 'services.gdprCompliantDesc')}</CardDescription>
              </CardHeader>
              <CardContent>
                {t(language, 'services.gdprCompliantContent')}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t(language, 'pricing.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t(language, 'pricing.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 relative">
              <div className="absolute top-4 right-4">
                <Badge className="bg-green-100 text-green-800">{t(language, 'pricing.monthFree')}</Badge>
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{t(language, 'pricing.starter')}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-purple-600">399</span>
                  <span className="text-gray-600"> {t(language, 'pricing.sekMonth')}</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">{t(language, 'pricing.yearlyRequired')}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t(language, 'pricing.upTo100')}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t(language, 'pricing.oneNfcCard')}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t(language, 'pricing.basicAnalytics')}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t(language, 'pricing.emailSupport')}
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  {t(language, 'pricing.startFreeTrial')}
                </Button>
                <p className="text-xs text-gray-500 text-center mt-2">
                  {t(language, 'pricing.cancelTerms')}
                </p>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 relative border-purple-200">
              <div className="absolute top-4 right-4">
                <Badge className="bg-purple-100 text-purple-800">{t(language, 'pricing.mostPopular')}</Badge>
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{t(language, 'pricing.professional')}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-purple-600">799</span>
                  <span className="text-gray-600"> {t(language, 'pricing.sekMonth')}</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">{t(language, 'pricing.yearlyRequired')}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t(language, 'pricing.upTo500')}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t(language, 'pricing.fiveNfcCards')}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t(language, 'pricing.aiMessageGen')}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t(language, 'pricing.multiChannelCampaigns')}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t(language, 'pricing.advancedAnalytics')}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t(language, 'pricing.prioritySupport')}
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  {t(language, 'pricing.startFreeTrial')}
                </Button>
                <p className="text-xs text-gray-500 text-center mt-2">
                  {t(language, 'pricing.cancelTerms')}
                </p>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 relative">
              <div className="absolute top-4 right-4">
                <Badge className="bg-blue-100 text-blue-800">{t(language, 'pricing.custom')}</Badge>
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{t(language, 'pricing.enterprise')}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-purple-600">{t(language, 'pricing.custom')}</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">{t(language, 'pricing.largeOrgs')}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t(language, 'pricing.unlimitedCustomers')}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t(language, 'pricing.customNfcCards')}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t(language, 'pricing.whiteLabel')}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t(language, 'pricing.customIntegrations')}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t(language, 'pricing.dedicatedSupport')}
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  {t(language, 'pricing.contactSales')}
                </Button>
                <p className="text-xs text-gray-500 text-center mt-2">
                  {t(language, 'pricing.customTerms')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose KLARIO Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            {t(language, 'whyChoose.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center justify-center">
                <Nfc className="mr-2 text-purple-500" /> {t(language, 'whyChoose.instantConnection')}
              </h3>
              <p className="text-gray-600">
                {t(language, 'whyChoose.instantConnectionDesc')}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center justify-center">
                <Zap className="mr-2 text-blue-500" /> {t(language, 'whyChoose.aiAutomation')}
              </h3>
              <p className="text-gray-600">
                {t(language, 'whyChoose.aiAutomationDesc')}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center justify-center">
                <Smartphone className="mr-2 text-green-500" /> {t(language, 'whyChoose.mobileFirst')}
              </h3>
              <p className="text-gray-600">
                {t(language, 'whyChoose.mobileFirstDesc')}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center justify-center">
                <Globe className="mr-2 text-orange-500" /> {t(language, 'whyChoose.multiChannelIntegration')}
              </h3>
              <p className="text-gray-600">
                {t(language, 'whyChoose.multiChannelIntegrationDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Meeting Section */}
      <section id="booking" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {t(language, 'booking.title')}
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {t(language, 'booking.subtitle')}
          </p>
          <div className="max-w-md mx-auto">
            <Button 
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg mb-4"
              onClick={() => window.open('https://calendly.com/klario-demo', '_blank')}
            >
              {t(language, 'booking.bookNow')}
            </Button>
            <p className="text-sm text-gray-500">
              No commitment required • 15 minutes • Free consultation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {t(language, 'contact.title')}
              </h2>
              <p className="text-gray-600 mb-4">
                {t(language, 'contact.subtitle')}
              </p>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-4">
                  <Input
                    type="email"
                    placeholder={t(language, 'contact.email')}
                    className="w-full px-4 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <Textarea
                    placeholder={t(language, 'contact.message')}
                    className="w-full px-4 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-md focus-ring">
                  {t(language, 'contact.sendMessage')}
                </Button>
              </form>
              {isSubscribed && (
                <Badge className="mt-4 bg-green-500 text-white border-0">
                  {t(language, 'contact.thankYou')}
                </Badge>
              )}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {t(language, 'contact.visitTitle')}
              </h2>
              <p className="text-gray-600 mb-4">
                {t(language, 'contact.visitSubtitle')}
              </p>
              <div className="flex items-center mb-2">
                <MapPin className="mr-2 text-purple-500" />
                <span className="text-gray-700">{t(language, 'contact.address')}</span>
              </div>
              <div className="flex items-center mb-2">
                <Phone className="mr-2 text-purple-500" />
                <span className="text-gray-700">{t(language, 'contact.phone')}</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 text-purple-500" />
                <span className="text-gray-700">{t(language, 'contact.emailAddress')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Index;
