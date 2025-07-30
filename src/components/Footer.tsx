
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocalization } from "@/hooks/useLocalization";
import { t } from "@/localization/translations";

const Footer = () => {
  const { language } = useLocalization();
  
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
              {t(language, 'footer.description')}
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
            <h4 className="text-lg font-semibold">{t(language, 'footer.quickLinks')}</h4>
            <div className="space-y-2">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0 h-auto justify-start">
                {t(language, 'footer.aboutUs')}
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0 h-auto justify-start">
                {t(language, 'nav.services')}
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0 h-auto justify-start">
                {t(language, 'nav.pricing')}
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0 h-auto justify-start">
                {t(language, 'nav.contact')}
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t(language, 'footer.contactInfo')}</h4>
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
            <h4 className="text-lg font-semibold">{t(language, 'footer.stayUpdated')}</h4>
            <p className="text-gray-400 text-sm">
              {t(language, 'footer.newsletterDesc')}
            </p>
            <div className="space-y-2">
              <Input 
                placeholder={t(language, 'footer.emailPlaceholder')}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700">
                {t(language, 'footer.subscribe')}
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {t(language, 'footer.allRights')}
            </p>
            <div className="flex space-x-6">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0 h-auto">
                {t(language, 'footer.privacyPolicy')}
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0 h-auto">
                {t(language, 'footer.termsOfService')}
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0 h-auto">
                {t(language, 'footer.cookiePolicy')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
