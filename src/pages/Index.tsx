import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Star, Users, MessageSquare, TrendingUp, Shield, Zap, Globe, Phone, Mail, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";

const Index = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navigation />
      
      <header className="py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 animate-fade-in">
          Welcome to KLARIO SMS Marketing Platform
        </h1>
        <p className="text-lg text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Reach your customers directly with personalized SMS campaigns.
        </p>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full focus-ring animate-bounce-in">
          Get Started Now
        </Button>
      </header>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-xl animate-slide-in-right">
              <CardHeader>
                <CardTitle className="flex items-center"><CheckCircle className="mr-2 text-green-500" /> Easy Setup</CardTitle>
                <CardDescription>Get started in minutes.</CardDescription>
              </CardHeader>
              <CardContent>
                Our platform is designed for simplicity. No coding required!
              </CardContent>
            </Card>

            <Card className="shadow-xl animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="flex items-center"><Star className="mr-2 text-yellow-500" /> Personalized Campaigns</CardTitle>
                <CardDescription>Tailor messages to your audience.</CardDescription>
              </CardHeader>
              <CardContent>
                Send targeted offers and updates that resonate with your customers.
              </CardContent>
            </Card>

            <Card className="shadow-xl animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle className="flex items-center"><Users className="mr-2 text-blue-500" /> Customer Segmentation</CardTitle>
                <CardDescription>Reach the right people.</CardDescription>
              </CardHeader>
              <CardContent>
                Segment your audience based on demographics, behavior, and more.
              </CardContent>
            </Card>

            <Card className="shadow-xl animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
              <CardHeader>
                <CardTitle className="flex items-center"><MessageSquare className="mr-2 text-purple-500" /> Two-Way Messaging</CardTitle>
                <CardDescription>Engage in real-time conversations.</CardDescription>
              </CardHeader>
              <CardContent>
                Answer questions, provide support, and build relationships with your customers.
              </CardContent>
            </Card>

            <Card className="shadow-xl animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
              <CardHeader>
                <CardTitle className="flex items-center"><TrendingUp className="mr-2 text-orange-500" /> Analytics & Reporting</CardTitle>
                <CardDescription>Track your success.</CardDescription>
              </CardHeader>
              <CardContent>
                Monitor campaign performance, track conversions, and optimize your strategy.
              </CardContent>
            </Card>

            <Card className="shadow-xl animate-slide-in-right" style={{ animationDelay: '1s' }}>
              <CardHeader>
                <CardTitle className="flex items-center"><Shield className="mr-2 text-teal-500" /> Secure & Reliable</CardTitle>
                <CardDescription>Your data is safe with us.</CardDescription>
              </CardHeader>
              <CardContent>
                We use industry-leading security measures to protect your information.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Why Choose KLARIO?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center justify-center">
                <Zap className="mr-2 text-purple-500" /> Instant Delivery
              </h3>
              <p className="text-gray-600">
                Reach your customers in seconds with our reliable SMS gateway.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center justify-center">
                <Globe className="mr-2 text-blue-500" /> Global Reach
              </h3>
              <p className="text-gray-600">
                Send SMS campaigns to customers around the world.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center justify-center">
                <Phone className="mr-2 text-green-500" /> Mobile-Friendly
              </h3>
              <p className="text-gray-600">
                Optimize your messages for mobile devices.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center justify-center">
                <Mail className="mr-2 text-orange-500" /> Email Integration
              </h3>
              <p className="text-gray-600">
                Integrate SMS with your existing email marketing campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 mb-4">
                Have questions? Reach out to our team.
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
                    placeholder="Your Message"
                    className="w-full px-4 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-md focus-ring">
                  Send Message
                </Button>
              </form>
              {isSubscribed && (
                <Badge className="mt-4 bg-green-500 text-white border-0">
                  Thank you for subscribing!
                </Badge>
              )}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Visit Us
              </h2>
              <p className="text-gray-600 mb-4">
                Our office is located in the heart of the city.
              </p>
              <div className="flex items-center mb-2">
                <MapPin className="mr-2 text-purple-500" />
                <span className="text-gray-700">123 Main Street, Cityville</span>
              </div>
              <div className="flex items-center mb-2">
                <Phone className="mr-2 text-purple-500" />
                <span className="text-gray-700">(123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 text-purple-500" />
                <span className="text-gray-700">info@klario.com</span>
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
