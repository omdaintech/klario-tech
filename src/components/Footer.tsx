
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/a7eaa1ee-80a5-4e7b-b08f-987d678e9306.png" 
                alt="KLARIO" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400">
              Transform physical interactions into digital relationships with NFC-powered customer engagement.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                LinkedIn
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                Twitter
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                Facebook
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0 h-auto justify-start">
                About Us
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0 h-auto justify-start">
                Services
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0 h-auto justify-start">
                Pricing
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0 h-auto justify-start">
                Contact
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">hello@klario.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter for the latest updates and features.
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 KLARIO. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0 h-auto">
                Privacy Policy
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0 h-auto">
                Terms of Service
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0 h-auto">
                Cookie Policy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
