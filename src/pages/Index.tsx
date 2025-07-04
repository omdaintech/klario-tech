
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

const Index = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'customer-form' | 'dashboard'>('home');
  const [merchantId, setMerchantId] = useState("demo-merchant-123");

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
          Welcome to KLARIO NFC Marketing Platform
        </h1>
        <p className="text-lg text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          AI-powered NFC marketing that transforms customer engagement with smart touch technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full focus-ring animate-bounce-in"
            onClick={() => setCurrentView('customer-form')}
          >
            Try Customer Form
          </Button>
          <Button 
            variant="outline"
            className="border-purple-600 text-purple-600 hover:bg-purple-50 font-bold py-3 px-8 rounded-full"
            onClick={() => setCurrentView('dashboard')}
          >
            View Dashboard Demo
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              About KLARIO
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              KLARIO is Sweden's leading NFC marketing platform, combining cutting-edge Near Field Communication technology with AI-powered automation. We help businesses create meaningful connections with customers through smart, touchless interactions that drive engagement and growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Nfc className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">NFC Innovation</h3>
              <p className="text-gray-600">Leading the way in contactless marketing technology</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
              <p className="text-gray-600">Smart automation that learns and adapts to your business</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-gray-600">Focused on creating exceptional customer experiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Revolutionary NFC Marketing Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transform how you connect with customers using our AI-powered NFC technology and smart marketing automation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-xl animate-slide-in-right">
              <CardHeader>
                <CardTitle className="flex items-center"><Nfc className="mr-2 text-blue-500" /> Smart NFC Cards</CardTitle>
                <CardDescription>Tap to connect instantly.</CardDescription>
              </CardHeader>
              <CardContent>
                Custom NFC cards that instantly connect customers to your business with a simple tap.
              </CardContent>
            </Card>

            <Card className="shadow-xl animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="flex items-center"><Star className="mr-2 text-yellow-500" /> AI-Powered Campaigns</CardTitle>
                <CardDescription>Smart messaging automation.</CardDescription>
              </CardHeader>
              <CardContent>
                AI generates personalized messages and campaigns that resonate with your customers.
              </CardContent>
            </Card>

            <Card className="shadow-xl animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle className="flex items-center"><Users className="mr-2 text-blue-500" /> Customer Insights</CardTitle>
                <CardDescription>Know your audience better.</CardDescription>
              </CardHeader>
              <CardContent>
                Advanced analytics and customer segmentation powered by AI technology.
              </CardContent>
            </Card>

            <Card className="shadow-xl animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
              <CardHeader>
                <CardTitle className="flex items-center"><MessageSquare className="mr-2 text-purple-500" /> Multi-Channel Reach</CardTitle>
                <CardDescription>Connect everywhere customers are.</CardDescription>
              </CardHeader>
              <CardContent>
                Reach customers via SMS, email, WhatsApp, and social media from one platform.
              </CardContent>
            </Card>

            <Card className="shadow-xl animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
              <CardHeader>
                <CardTitle className="flex items-center"><TrendingUp className="mr-2 text-orange-500" /> Real-time Analytics</CardTitle>
                <CardDescription>Track your success instantly.</CardDescription>
              </CardHeader>
              <CardContent>
                Monitor NFC interactions, campaign performance, and customer engagement in real-time.
              </CardContent>
            </Card>

            <Card className="shadow-xl animate-slide-in-right" style={{ animationDelay: '1s' }}>
              <CardHeader>
                <CardTitle className="flex items-center"><Shield className="mr-2 text-teal-500" /> GDPR Compliant</CardTitle>
                <CardDescription>Privacy-first approach.</CardDescription>
              </CardHeader>
              <CardContent>
                Full GDPR compliance with transparent data collection and customer consent management.
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your business. All plans include 1 month free trial with yearly agreement. Cancel anytime with 3 months advance notice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 relative">
              <div className="absolute top-4 right-4">
                <Badge className="bg-green-100 text-green-800">1 Month Free</Badge>
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">Starter</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-purple-600">399</span>
                  <span className="text-gray-600"> SEK/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Yearly agreement required</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Up to 100 customers/month
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    1 NFC card included
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Basic analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Email support
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Start Free Trial
                </Button>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Cancel anytime, 3 months in advance
                </p>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 relative border-purple-200">
              <div className="absolute top-4 right-4">
                <Badge className="bg-purple-100 text-purple-800">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">Professional</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-purple-600">799</span>
                  <span className="text-gray-600"> SEK/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Yearly agreement required</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Up to 500 customers/month
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    5 NFC cards included
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    AI message generation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Multi-channel campaigns
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Priority support
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Start Free Trial
                </Button>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Cancel anytime, 3 months in advance
                </p>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 relative">
              <div className="absolute top-4 right-4">
                <Badge className="bg-blue-100 text-blue-800">Custom</Badge>
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">Enterprise</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-purple-600">Custom</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">For large organizations</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Unlimited customers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Custom NFC cards
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    White-label solution
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Dedicated support
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Contact Sales
                </Button>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Custom terms available
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
            Why Choose KLARIO NFC Marketing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center justify-center">
                <Nfc className="mr-2 text-purple-500" /> Instant NFC Connection
              </h3>
              <p className="text-gray-600">
                Customers simply tap their phone to your NFC card to instantly connect and opt-in.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center justify-center">
                <Zap className="mr-2 text-blue-500" /> AI-Powered Automation
              </h3>
              <p className="text-gray-600">
                Our AI creates personalized campaigns and optimizes customer engagement automatically.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center justify-center">
                <Smartphone className="mr-2 text-green-500" /> Mobile-First Design
              </h3>
              <p className="text-gray-600">
                Seamless experience optimized for mobile devices and modern customer behavior.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center justify-center">
                <Globe className="mr-2 text-orange-500" /> Multi-Channel Integration
              </h3>
              <p className="text-gray-600">
                Connect NFC interactions with email, SMS, WhatsApp, and social media campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Meeting Section */}
      <section id="booking" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Book a free 15-minute consultation with our NFC marketing experts. We'll show you exactly how KLARIO can help grow your business through smart, touchless customer engagement.
          </p>
          <div className="max-w-md mx-auto">
            <Button 
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg mb-4"
              onClick={() => window.open('https://calendly.com/klario-demo', '_blank')}
            >
              Book Your Free Demo
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
                Contact Us
              </h2>
              <p className="text-gray-600 mb-4">
                Ready to revolutionize your customer marketing with NFC technology?
              </p>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-4">
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <Textarea
                    placeholder="Tell us about your business and NFC marketing needs"
                    className="w-full px-4 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-md focus-ring">
                  Get Started with NFC
                </Button>
              </form>
              {isSubscribed && (
                <Badge className="mt-4 bg-green-500 text-white border-0">
                  Thank you! We'll be in touch about your NFC marketing solution.
                </Badge>
              )}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Visit Us
              </h2>
              <p className="text-gray-600 mb-4">
                Our NFC technology experts are ready to help you transform your marketing.
              </p>
              <div className="flex items-center mb-2">
                <MapPin className="mr-2 text-purple-500" />
                <span className="text-gray-700">123 Innovation Street, Stockholm</span>
              </div>
              <div className="flex items-center mb-2">
                <Phone className="mr-2 text-purple-500" />
                <span className="text-gray-700">+46 8 123 456 78</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 text-purple-500" />
                <span className="text-gray-700">hello@klario.se</span>
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
