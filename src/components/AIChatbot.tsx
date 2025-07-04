
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, X, Send, Globe, Calendar, User, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import LeadCaptureForm from "./chatbot/LeadCaptureForm";
import BookingForm from "./chatbot/BookingForm";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  showLeadForm?: boolean;
  showBookingForm?: boolean;
}

interface UserContext {
  name?: string;
  email?: string;
  phone?: string;
  language: 'en' | 'sv';
  visitDuration: number;
  questionsAsked: number;
  showsInterest: boolean;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userContext, setUserContext] = useState<UserContext>({
    language: 'en',
    visitDuration: 0,
    questionsAsked: 0,
    showsInterest: false
  });
  const [gdprConsent, setGdprConsent] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const visitStartTime = useRef<number>(Date.now());
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Track visit duration
  useEffect(() => {
    const interval = setInterval(() => {
      setUserContext(prev => ({
        ...prev,
        visitDuration: Math.floor((Date.now() - visitStartTime.current) / 1000)
      }));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Auto-detect language and initialize
  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    const detectedLang = browserLang.includes('sv') ? 'sv' : 'en';
    
    setUserContext(prev => ({ ...prev, language: detectedLang }));
    
    const welcomeMessage = getWelcomeMessage(detectedLang, userContext.visitDuration);
    
    setMessages([{
      id: '1',
      text: welcomeMessage,
      sender: 'bot',
      timestamp: new Date()
    }]);
  }, []);

  const getWelcomeMessage = (language: 'en' | 'sv', visitDuration: number) => {
    const timeBasedGreeting = visitDuration > 30 
      ? (language === 'sv' ? "Jag märker att du har tittat runt lite - har du några frågor om våra NFC-lösningar?" 
                           : "I notice you've been exploring - do you have any questions about our NFC solutions?")
      : (language === 'sv' ? "Hej! Välkommen till KLARIO! 👋" : "Hi! Welcome to KLARIO! 👋");

    return language === 'sv' 
      ? `${timeBasedGreeting} Jag är Elena, din personliga assistent. Jag hjälper företag att växa med vår AI-drivna NFC-marknadsföringsplattform. Hur kan jag hjälpa dig idag? 😊`
      : `${timeBasedGreeting} I'm Elena, your personal assistant. I help businesses grow with our AI-powered NFC marketing platform. How can I help you today? 😊`;
  };

  const responses = {
    en: {
      pricing: "Great question! We offer three plans: Starter (399 SEK/month, up to 100 customers), Professional (799 SEK/month, up to 500 customers), and Enterprise (custom pricing). All include NFC cards and a 1-month free trial. Which plan interests you most?",
      trial: "Perfect! Our 1-month FREE trial gives you full access to test our NFC marketing platform. You can cancel anytime with 3 months notice. Would you like me to help you get started right now?",
      nfc: "Our NFC cards are game-changers! Customers just tap their phone to instantly connect and opt-in to your marketing. No apps needed! Starter includes 1 card, Professional gets 5, Enterprise gets custom designs. Pretty amazing, right?",
      marketing: "Our NFC platform revolutionizes customer engagement! When someone taps their phone to your NFC card, they instantly connect to your business and can join your marketing campaigns. The Professional plan even includes AI message generation!",
      support: "I'm here to help! We offer email support with Starter, priority support with Professional, and dedicated support for Enterprise. What specific challenge can I help you solve?",
      booking: "I'd love to schedule a personalized demo for you! It only takes 15 minutes and I can show you exactly how NFC marketing can grow your business. When would work best for you?",
      leadCapture: "To give you the most relevant information and keep you updated on how NFC marketing can benefit your business, could you share a few quick details with me?",
      gdpr: "We respect your privacy completely. By sharing your contact info, you consent to receive relevant information about our NFC marketing solutions. You can unsubscribe anytime. Is that okay?",
      conversion: "Based on our conversation, I think KLARIO could really help your business grow! Would you like to see a quick demo or speak with one of our NFC experts about your specific needs?"
    },
    sv: {
      pricing: "Bra fråga! Vi erbjuder tre planer: Starter (399 SEK/månad, upp till 100 kunder), Professional (799 SEK/månad, upp till 500 kunder), och Enterprise (anpassad prissättning). Alla inkluderar NFC-kort och 1 månads gratis provperiod. Vilken plan intresserar dig mest?",
      trial: "Perfekt! Vår 1 månads GRATIS provperiod ger dig full tillgång att testa vår NFC-marknadsföringsplattform. Du kan avbryta när som helst med 3 månaders uppsägning. Vill du att jag hjälper dig komma igång nu?",
      nfc: "Våra NFC-kort är fantastiska! Kunder trycker bara sin telefon för att omedelbart ansluta och anmäla sig till din marknadsföring. Inga appar behövs! Starter inkluderar 1 kort, Professional får 5, Enterprise får anpassade designer. Ganska fantastiskt, eller hur?",
      marketing: "Vår NFC-plattform revolutionerar kundengagemang! När någon trycker sin telefon mot ditt NFC-kort ansluter de omedelbart till ditt företag och kan gå med i dina marknadsföringskampanjer. Professional-planen inkluderar även AI-meddelandegenerering!",
      support: "Jag är här för att hjälpa! Vi erbjuder e-poststöd med Starter, prioritetsstöd med Professional och dedikerat stöd för Enterprise. Vilken specifik utmaning kan jag hjälpa dig lösa?",
      booking: "Jag skulle gärna boka en personlig demo för dig! Det tar bara 15 minuter och jag kan visa dig exakt hur NFC-marknadsföring kan få ditt företag att växa. När skulle passa bäst för dig?",
      leadCapture: "För att ge dig den mest relevanta informationen och hålla dig uppdaterad om hur NFC-marknadsföring kan gynna ditt företag, kan du dela några snabba detaljer med mig?",
      gdpr: "Vi respekterar din integritet helt. Genom att dela din kontaktinformation samtycker du till att få relevant information om våra NFC-marknadsföringslösningar. Du kan avsluta prenumerationen när som helst. Är det okej?",
      conversion: "Baserat på vår konversation tror jag att KLARIO verkligen kan hjälpa ditt företag att växa! Vill du se en snabb demo eller prata med en av våra NFC-experter om dina specifika behov?"
    }
  };

  const suggestedQuestions = {
    en: [
      "What are your pricing plans?",
      "How does NFC marketing work?",
      "Can I try it for free?",
      "Book a demo call"
    ],
    sv: [
      "Vilka prisplaner har ni?",
      "Hur fungerar NFC-marknadsföring?",
      "Kan jag testa gratis?",
      "Boka ett demo-samtal"
    ]
  };

  const detectLanguage = (text: string): 'en' | 'sv' => {
    const swedishWords = ['hej', 'tack', 'ja', 'nej', 'hur', 'vad', 'när', 'var', 'varför', 'pris', 'kostnad', 'gratis'];
    const words = text.toLowerCase().split(' ');
    const swedishMatches = words.filter(word => swedishWords.includes(word)).length;
    
    if (swedishMatches > 0) return 'sv';
    return userContext.language;
  };

  const analyzeUserIntent = (message: string): { interest: boolean; needsFollowUp: boolean; shouldCaptureLead: boolean } => {
    const lowerMessage = message.toLowerCase();
    const interestKeywords = ['interested', 'want', 'need', 'how much', 'price', 'cost', 'demo', 'trial', 'sign up', 'intresserad', 'vill', 'behöver', 'pris', 'kostnad'];
    const urgentKeywords = ['now', 'today', 'asap', 'urgent', 'nu', 'idag', 'brådskande'];
    
    const showsInterest = interestKeywords.some(keyword => lowerMessage.includes(keyword));
    const isUrgent = urgentKeywords.some(keyword => lowerMessage.includes(keyword));
    const shouldCaptureLead = (userContext.questionsAsked >= 2 && showsInterest) || isUrgent;
    
    return {
      interest: showsInterest,
      needsFollowUp: showsInterest || userContext.questionsAsked >= 1,
      shouldCaptureLead
    };
  };

  const generateResponse = (userMessage: string): { text: string; showLeadForm?: boolean; showBookingForm?: boolean } => {
    const detectedLang = detectLanguage(userMessage);
    if (detectedLang !== userContext.language) {
      setUserContext(prev => ({ ...prev, language: detectedLang }));
    }

    const message = userMessage.toLowerCase();
    const currentResponses = responses[detectedLang];
    const intent = analyzeUserIntent(userMessage);
    
    // Update user context
    setUserContext(prev => ({ 
      ...prev, 
      questionsAsked: prev.questionsAsked + 1,
      showsInterest: prev.showsInterest || intent.interest
    }));

    // Personalized greeting with name
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('hej') || message.includes('hallå')) {
      const greeting = detectedLang === 'sv' 
        ? `Hej${userContext.name ? ` ${userContext.name}` : ''}! Trevligt att träffa dig! 😊`
        : `Hello${userContext.name ? ` ${userContext.name}` : ''}! Nice to meet you! 😊`;
      
      return { text: greeting + " " + (detectedLang === 'sv' ? "Vad kan jag hjälpa dig med idag?" : "What can I help you with today?") };
    }

    // FAQ responses
    if (message.includes('price') || message.includes('cost') || message.includes('sek') || message.includes('pris') || message.includes('kostnad')) {
      return { 
        text: currentResponses.pricing,
        showLeadForm: intent.shouldCaptureLead
      };
    }
    if (message.includes('trial') || message.includes('free') || message.includes('gratis') || message.includes('provperiod')) {
      return { 
        text: currentResponses.trial,
        showLeadForm: intent.shouldCaptureLead
      };
    }
    if (message.includes('nfc') || message.includes('card') || message.includes('kort')) {
      return { text: currentResponses.nfc };
    }
    if (message.includes('demo') || message.includes('meeting') || message.includes('call') || message.includes('book') || message.includes('möte') || message.includes('samtal') || message.includes('boka')) {
      return { 
        text: currentResponses.booking,
        showBookingForm: true
      };
    }
    if (message.includes('marketing') || message.includes('campaign') || message.includes('marknadsföring') || message.includes('kampanj')) {
      return { text: currentResponses.marketing };
    }

    // Conversion-focused fallback
    if (intent.shouldCaptureLead) {
      return {
        text: currentResponses.conversion,
        showLeadForm: true
      };
    }

    // Default helpful response
    return {
      text: detectedLang === 'sv'
        ? "Det är en bra fråga! Jag hjälper gärna dig. Vill du veta mer om våra NFC-lösningar, priser, eller boka en snabb demo för att se hur det kan hjälpa ditt företag?"
        : "That's a great question! I'd be happy to help you. Would you like to know more about our NFC solutions, pricing, or book a quick demo to see how it can help your business?"
    };
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

    // Realistic typing delay
    const delay = 800 + Math.random() * 800;
    setTimeout(() => {
      const response = generateResponse(inputValue);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        sender: 'bot',
        timestamp: new Date(),
        showLeadForm: response.showLeadForm,
        showBookingForm: response.showBookingForm
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, delay);
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleLeadCapture = (leadData: { name: string; email: string; phone?: string }) => {
    setUserContext(prev => ({ ...prev, ...leadData }));
    setGdprConsent(true);
    
    // Here you would integrate with your CRM
    console.log('Lead captured:', leadData);
    
    toast({
      title: userContext.language === 'sv' ? "Tack!" : "Thank you!",
      description: userContext.language === 'sv' 
        ? "Vi kommer att kontakta dig snart med relevant information."
        : "We'll contact you soon with relevant information.",
    });

    const thankYouMessage: Message = {
      id: Date.now().toString(),
      text: userContext.language === 'sv'
        ? `Tack ${leadData.name}! Jag har dina uppgifter och någon från vårt team kommer att kontakta dig inom 24 timmar. Har du några andra frågor just nu?`
        : `Thank you ${leadData.name}! I have your details and someone from our team will contact you within 24 hours. Do you have any other questions right now?`,
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, thankYouMessage]);
  };

  const handleBooking = (bookingData: { date: string; time: string; timezone: string }) => {
    console.log('Booking scheduled:', bookingData);
    
    toast({
      title: userContext.language === 'sv' ? "Möte bokat!" : "Meeting booked!",
      description: userContext.language === 'sv'
        ? `Ditt möte är bokat för ${bookingData.date} kl ${bookingData.time}`
        : `Your meeting is booked for ${bookingData.date} at ${bookingData.time}`,
    });

    const confirmationMessage: Message = {
      id: Date.now().toString(),
      text: userContext.language === 'sv'
        ? `Perfekt! Ditt demo-möte är bokat för ${bookingData.date} kl ${bookingData.time} (${bookingData.timezone}). Du kommer att få en bekräftelse via e-post med alla detaljer. Ser fram emot att träffa dig!`
        : `Perfect! Your demo meeting is booked for ${bookingData.date} at ${bookingData.time} (${bookingData.timezone}). You'll receive an email confirmation with all the details. Looking forward to meeting you!`,
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, confirmationMessage]);
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
          className="rounded-full w-16 h-16 bg-purple-600 hover:bg-purple-700 shadow-lg animate-pulse hover:animate-none transition-all duration-300"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
        <div className="absolute -top-12 -left-32 bg-purple-600 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap animate-bounce">
          {userContext.language === 'sv' ? 'Chatta med Elena! 👋' : 'Chat with Elena! 👋'}
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px]">
      <Card className="w-full h-full flex flex-col shadow-2xl border-purple-200">
        <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 rounded-t-lg flex flex-row items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Avatar className="w-10 h-10 border-2 border-white">
                <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=40&h=40&fit=crop&crop=face" alt="Elena" />
                <AvatarFallback className="bg-purple-500 text-white">E</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h3 className="font-semibold text-sm">Elena</h3>
              <p className="text-xs opacity-90">NFC Marketing Expert</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setUserContext(prev => ({ ...prev, language: prev.language === 'en' ? 'sv' : 'en' }))}
              className="text-white hover:bg-purple-700/50 p-1 rounded-md"
              title={userContext.language === 'en' ? 'Switch to Swedish' : 'Växla till engelska'}
            >
              <Globe className="w-4 h-4" />
              <span className="ml-1 text-xs font-semibold">{userContext.language.toUpperCase()}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-purple-700/50 p-1 rounded-md"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-0">
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-96">
            {messages.map((message) => (
              <div key={message.id}>
                <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
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
                
                {message.showLeadForm && (
                  <div className="mt-3 ml-8">
                    <LeadCaptureForm 
                      language={userContext.language}
                      onSubmit={handleLeadCapture}
                    />
                  </div>
                )}
                
                {message.showBookingForm && (
                  <div className="mt-3 ml-8">
                    <BookingForm 
                      language={userContext.language}
                      onSubmit={handleBooking}
                    />
                  </div>
                )}
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

          {messages.length <= 1 && (
            <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
              <div className="text-xs text-gray-600 mb-2 font-medium">
                {userContext.language === 'sv' ? 'Populära frågor:' : 'Popular questions:'}
              </div>
              <div className="grid grid-cols-1 gap-2">
                {suggestedQuestions[userContext.language].map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs h-8 justify-start bg-white hover:bg-purple-50 border-purple-200 text-purple-700"
                    onClick={() => handleSuggestedQuestion(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          )}
          
          <div className="border-t p-4 bg-white">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={userContext.language === 'sv' ? 'Fråga mig vad som helst...' : 'Ask me anything...'}
                className="flex-1 border-purple-200 focus:border-purple-400"
              />
              <Button 
                onClick={handleSendMessage} 
                size="sm" 
                className="bg-purple-600 hover:bg-purple-700 px-3"
                disabled={!inputValue.trim()}
              >
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
