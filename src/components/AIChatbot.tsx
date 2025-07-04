import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, X, Send, Globe } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'sv'>('en');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize with welcome message based on language
  useEffect(() => {
    const welcomeMessage = language === 'sv' 
      ? "Hej! Jag är Elena, din personliga assistent på KLARIO. Jag är här för att hjälpa dig komma igång med vår NFC-marknadsföringsplattform eller svara på frågor du kan ha. Hur kan jag hjälpa dig idag? 😊"
      : "Hi there! I'm Elena, your personal assistant at KLARIO. I'm here to help you get started with our NFC marketing platform or answer any questions you might have. How can I help you today? 😊";
    
    setMessages([{
      id: '1',
      text: welcomeMessage,
      sender: 'bot',
      timestamp: new Date()
    }]);
  }, [language]);

  const faqResponses = {
    en: {
      pricing: "Great question! We offer three plans: Starter at 399 SEK/month (up to 100 customers/month), Professional at 799 SEK/month (up to 500 customers/month), and Enterprise with custom pricing. All plans come with a 1-month free trial and yearly agreements. Would you like me to help you choose the right plan?",
      trial: "Absolutely! We offer a 1-month FREE trial for all our plans. You can cancel anytime with 3 months advance notice. Would you like me to help you get started with your free trial?",
      nfc: "Our NFC cards are a game-changer! They allow customers to instantly opt-in to your marketing campaigns just by tapping their phone. Starter plan includes 1 NFC card, Professional includes 5 cards, and Enterprise gets custom NFC cards. Pretty cool, right?",
      marketing: "Our NFC marketing platform helps you connect with customers through smart touch technology. When customers tap their phone to your NFC card, they instantly connect to your business and can opt-in to your marketing campaigns. The Professional plan even includes AI message generation!",
      support: "I'm here to help! For technical issues, our Starter plan includes email support, Professional gets priority support, and Enterprise customers have dedicated support. What specific question can I help you with?",
      signup: "I'd love to help you get started! First, let me ask - what's your business type and how many customers do you typically want to reach per month? This will help me recommend the perfect plan for you.",
      cancel: "No worries at all! You can cancel your subscription anytime with 3 months advance notice. We believe in transparency and no hidden fees. Is there something specific you're concerned about?",
      analytics: "Our analytics help you track NFC interactions, customer engagement, and campaign performance. Basic analytics come with the Starter plan, while Professional and Enterprise plans include advanced analytics with deeper insights.",
      integration: "Yes! Our Enterprise plan includes custom integrations with your existing systems. We can connect with CRMs, e-commerce platforms, and other business tools. What systems are you looking to integrate with?"
    },
    sv: {
      pricing: "Bra fråga! Vi erbjuder tre planer: Starter för 399 SEK/månad (upp till 100 kunder/månad), Professional för 799 SEK/månad (upp till 500 kunder/månad), och Enterprise med anpassad prissättning. Alla planer kommer med 1 månads gratis provperiod och årsavtal. Vill du att jag hjälper dig välja rätt plan?",
      trial: "Absolut! Vi erbjuder 1 månads GRATIS provperiod för alla våra planer. Du kan avbryta när som helst med 3 månaders förvarning. Vill du att jag hjälper dig komma igång med din gratis provperiod?",
      nfc: "Våra NFC-kort är fantastiska! De låter kunder omedelbart anmäla sig till dina marknadsföringskampanjer bara genom att trycka sin telefon. Starter-planen inkluderar 1 NFC-kort, Professional inkluderar 5 kort, och Enterprise får anpassade NFC-kort. Ganska coolt, eller hur?",
      marketing: "Vår NFC-marknadsföringsplattform hjälper dig ansluta med kunder genom smart touch-teknik. När kunder trycker sin telefon mot ditt NFC-kort ansluter de omedelbart till ditt företag och kan anmäla sig till dina marknadsföringskampanjer. Professional-planen inkluderar även AI-meddelandegenerering!",
      support: "Jag är här för att hjälpa! För tekniska problem inkluderar vår Starter-plan e-postsupport, Professional får prioritetssupport, och Enterprise-kunder har dedikerad support. Vilken specifik fråga kan jag hjälpa dig med?",
      signup: "Jag skulle gärna hjälpa dig komma igång! Först, låt mig fråga - vilken typ av företag har du och hur många kunder vill du vanligtvis nå per månad? Detta hjälper mig rekommendera den perfekta planen för dig.",
      cancel: "Inga problem alls! Du kan avbryta din prenumeration när som helst med 3 månaders förvarning. Vi tror på transparens och inga dolda avgifter. Finns det något specifikt du är orolig för?",
      analytics: "Vår analys hjälper dig spåra NFC-interaktioner, kundengagemang och kampanjprestanda. Grundläggande analys kommer med Starter-planen, medan Professional och Enterprise-planer inkluderar avancerad analys med djupare insikter.",
      integration: "Ja! Vår Enterprise-plan inkluderar anpassade integrationer med dina befintliga system. Vi kan ansluta med CRM:er, e-handelsplattformar och andra affärsverktyg. Vilka system vill du integrera med?"
    }
  };

  const suggestedQuestions = {
    en: [
      "What are your pricing plans?",
      "How does the free trial work?",
      "Tell me about NFC cards",
      "How do I get started?"
    ],
    sv: [
      "Vilka prisplaner har ni?",
      "Hur fungerar gratisperioden?",
      "Berätta om NFC-korten",
      "Hur kommer jag igång?"
    ]
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    const responses = faqResponses[language];
    
    if (message.includes('price') || message.includes('cost') || message.includes('sek') || message.includes('pris') || message.includes('kostnad')) {
      return responses.pricing;
    }
    if (message.includes('trial') || message.includes('free') || message.includes('gratis') || message.includes('provperiod')) {
      return responses.trial;
    }
    if (message.includes('nfc') || message.includes('card') || message.includes('kort')) {
      return responses.nfc;
    }
    if (message.includes('marketing') || message.includes('campaign') || message.includes('marknadsföring') || message.includes('kampanj')) {
      return responses.marketing;
    }
    if (message.includes('support') || message.includes('help') || message.includes('hjälp') || message.includes('stöd')) {
      return responses.support;
    }
    if (message.includes('sign up') || message.includes('signup') || message.includes('start') || message.includes('begin') || message.includes('börja') || message.includes('igång')) {
      return responses.signup;
    }
    if (message.includes('cancel') || message.includes('quit') || message.includes('stop') || message.includes('avbryt') || message.includes('sluta')) {
      return responses.cancel;
    }
    if (message.includes('analytic') || message.includes('report') || message.includes('data') || message.includes('statistik')) {
      return responses.analytics;
    }
    if (message.includes('integrat') || message.includes('connect') || message.includes('api') || message.includes('anslut')) {
      return responses.integration;
    }
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('hej') || message.includes('hallå')) {
      return language === 'sv' 
        ? "Hej! Trevligt att träffa dig! Jag är Elena från KLARIO. Jag är här för att hjälpa dig upptäcka hur vår NFC-marknadsföringsplattform kan få ditt företag att växa. Vad skulle du vilja veta?"
        : "Hello! Nice to meet you! I'm Elena from KLARIO. I'm here to help you discover how our NFC marketing platform can grow your business. What would you like to know?";
    }
    
    return language === 'sv'
      ? "Det är en bra fråga! Jag hjälper gärna dig med det. För mer specifik information kan jag koppla dig till vårt team, eller ställ gärna frågor om vår prissättning, NFC-funktioner, gratis provperiod eller hur du kommer igång. Vad intresserar dig mest?"
      : "That's a great question! I'd be happy to help you with that. For more specific information, I can connect you with our team, or feel free to ask me about our pricing, NFC features, free trial, or how to get started. What interests you most?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
    handleSendMessage();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-16 h-16 bg-purple-600 hover:bg-purple-700 shadow-lg animate-bounce"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
        <div className="absolute -top-12 -left-20 bg-purple-600 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
          Chat with Elena! 👋
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px]">
      <Card className="w-full h-full flex flex-col shadow-2xl border-purple-200">
        <CardHeader className="bg-purple-600 text-white p-4 rounded-t-lg flex flex-row items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=32&h=32&fit=crop&crop=face" alt="Elena" />
              <AvatarFallback className="bg-purple-500 text-white">E</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-sm">Elena</h3>
              <p className="text-xs opacity-90">KLARIO Assistant</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'sv' : 'en')}
              className="text-white hover:bg-purple-700 p-1"
              title={language === 'en' ? 'Switch to Swedish' : 'Växla till engelska'}
            >
              <Globe className="w-4 h-4" />
              <span className="ml-1 text-xs">{language.toUpperCase()}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-purple-700 p-1"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-0">
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-80">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className="flex items-start space-x-2 max-w-[85%]">
                  {message.sender === 'bot' && (
                    <Avatar className="w-6 h-6 flex-shrink-0">
                      <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=24&h=24&fit=crop&crop=face" alt="Elena" />
                      <AvatarFallback className="bg-purple-500 text-white text-xs">E</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`rounded-lg px-3 py-2 text-sm break-words ${
                      message.sender === 'user'
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=24&h=24&fit=crop&crop=face" alt="Elena" />
                    <AvatarFallback className="bg-purple-500 text-white text-xs">E</AvatarFallback>
                  </Avatar>
                  <div className="bg-gray-100 rounded-lg px-3 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {messages.length <= 1 && (
            <div className="px-4 py-2 border-t border-gray-200">
              <div className="text-xs text-gray-500 mb-2">
                {language === 'sv' ? 'Föreslagna frågor:' : 'Suggested questions:'}
              </div>
              <div className="grid grid-cols-1 gap-1">
                {suggestedQuestions[language].map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs h-8 justify-start"
                    onClick={() => handleSuggestedQuestion(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          )}
          
          <div className="border-t p-4">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={language === 'sv' ? 'Fråga mig vad som helst...' : 'Ask me anything...'}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="sm" className="bg-purple-600 hover:bg-purple-700">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIChatbot;
