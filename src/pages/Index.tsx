
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, MessageSquare, Zap, Star, Smartphone, Shield } from "lucide-react";
import CustomerForm from "@/components/CustomerForm";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  const [currentView, setCurrentView] = useState("landing");
  const [merchantId, setMerchantId] = useState("demo-merchant");

  // Mock data for demo
  const stats = {
    totalCustomers: 1247,
    activeConversations: 23,
    reviewsGenerated: 89,
    conversionRate: 67
  };

  if (currentView === "form") {
    return <CustomerForm merchantId={merchantId} onBack={() => setCurrentView("landing")} />;
  }

  if (currentView === "dashboard") {
    return <Dashboard merchantId={merchantId} onBack={() => setCurrentView("landing")} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 animate-fade-in">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TapCRM
              </h1>
            </div>
            <Button 
              onClick={() => setCurrentView("dashboard")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Open Dashboard
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6 hover:bg-blue-200 transition-colors duration-300 animate-bounce-in">
            <Shield className="w-4 h-4" />
            <span>GDPR Compliant</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            NFC-Powered Customer Engagement
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform physical interactions into digital relationships. Tap, collect, engage, and grow your business with GDPR-compliant automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => setCurrentView("form")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-lg transform active:scale-95"
            >
              Try Customer Form
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => setCurrentView("dashboard")}
              className="text-lg px-8 py-6 border-2 hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-md transform active:scale-95"
            >
              View Dashboard
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-600 text-sm font-medium">Total Customers</p>
                  <p className="text-3xl font-bold text-blue-900">{stats.totalCustomers.toLocaleString()}</p>
                </div>
                <Users className="w-8 h-8 text-blue-600 animate-pulse" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-600 text-sm font-medium">Active Campaigns</p>
                  <p className="text-3xl font-bold text-green-900">{stats.activeConversations}</p>
                </div>
                <MessageSquare className="w-8 h-8 text-green-600 animate-pulse" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-50 to-yellow-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-yellow-600 text-sm font-medium">Reviews Generated</p>
                  <p className="text-3xl font-bold text-yellow-900">{stats.reviewsGenerated}</p>
                </div>
                <Star className="w-8 h-8 text-yellow-600 animate-pulse" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-600 text-sm font-medium">Conversion Rate</p>
                  <p className="text-3xl font-bold text-purple-900">{stats.conversionRate}%</p>
                </div>
                <Zap className="w-8 h-8 text-purple-600 animate-pulse" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Smartphone className="w-6 h-6 text-blue-600" />
                <span>NFC-Triggered Forms</span>
              </CardTitle>
              <CardDescription>
                Mobile-optimized forms that capture customer data instantly when they tap your NFC card.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="hover:bg-gray-200 transition-colors duration-200">GDPR Compliant</Badge>
                  <Badge variant="outline" className="hover:bg-gray-100 transition-colors duration-200">Mobile First</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Automatically redirect customers to your Google review page after form submission.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="w-6 h-6 text-green-600" />
                <span>Multichannel Automation</span>
              </CardTitle>
              <CardDescription>
                Engage customers through SMS, Email, and WhatsApp with automated campaigns.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="hover:bg-gray-200 transition-colors duration-200">SMS</Badge>
                  <Badge variant="secondary" className="hover:bg-gray-200 transition-colors duration-200">Email</Badge>
                  <Badge variant="secondary" className="hover:bg-gray-200 transition-colors duration-200">WhatsApp</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Set up automated follow-ups and build lasting customer relationships.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-6">
                Experience the power of NFC-driven customer engagement
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => setCurrentView("form")}
                  className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform active:scale-95"
                >
                  Test Customer Form
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => setCurrentView("dashboard")}
                  className="border-white text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 transform active:scale-95"
                >
                  Explore Dashboard
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
