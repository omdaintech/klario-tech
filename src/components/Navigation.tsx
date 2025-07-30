
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLocalization } from "@/hooks/useLocalization";
import { t } from "@/localization/translations";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLocalization();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/a7eaa1ee-80a5-4e7b-b08f-987d678e9306.png" 
              alt="KLARIO" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-purple-600 transition-colors">
              {t(language, 'nav.home')}
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-purple-600 transition-colors">
              {t(language, 'nav.about')}
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-purple-600 transition-colors">
              {t(language, 'nav.services')}
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-purple-600 transition-colors">
              {t(language, 'nav.pricing')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-purple-600 transition-colors">
              {t(language, 'nav.contact')}
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <LanguageSwitcher />
            <Button 
              onClick={() => scrollToSection('booking')}
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
            >
              {t(language, 'nav.bookMeeting')}
            </Button>
            <Button 
              onClick={() => window.location.href = '/business/signin'}
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50"
            >
              {t(language, 'nav.signIn')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <nav className="flex flex-col space-y-4 pt-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-purple-600 transition-colors">
                {t(language, 'nav.home')}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-purple-600 transition-colors">
                {t(language, 'nav.about')}
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-purple-600 transition-colors">
                {t(language, 'nav.services')}
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-left text-gray-700 hover:text-purple-600 transition-colors">
                {t(language, 'nav.pricing')}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-purple-600 transition-colors">
                {t(language, 'nav.contact')}
              </button>
              <div className="flex flex-col space-y-2 pt-2">
                <LanguageSwitcher />
                <Button 
                  onClick={() => scrollToSection('booking')}
                  className="bg-gradient-to-r from-purple-600 to-purple-700"
                >
                  {t(language, 'nav.bookMeeting')}
                </Button>
                <Button 
                  onClick={() => window.location.href = '/business/signin'}
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  {t(language, 'nav.signIn')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
